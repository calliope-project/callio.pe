/*
 * Marks the menu entry for the section you are currently reading, and keeps
 * the address bar pointing at the same section.
 *
 * This is the only JavaScript on the site, and it is here because CSS cannot
 * do it: a scroll-driven `view-timeline` needs an element spanning each
 * section, and the page renders as a flat run of headings and blocks with no
 * such wrapper -- quite apart from `animation-timeline` not yet being
 * baseline. Everything else, including the horizontal galleries, stays CSS.
 *
 * Strictly an enhancement: with JavaScript off, or on a page that has none of
 * these anchors, the menu simply behaves as it did before.
 *
 * This reads positions on scroll rather than using an IntersectionObserver.
 * The observer looks like the tidier tool and is not: it reports intersection
 * *changes*, and a heading that straddles the line -- which is exactly what a
 * heading you have just scrolled to does -- never changes state, so the first
 * section on the page could never light up. Recomputing is four
 * getBoundingClientRect calls, coalesced to at most one per animation frame.
 */
(function () {
  "use strict";

  // The whole bar, not one of its lists: the menu is split into an in-page
  // list and an outbound one, and only the former holds `#` anchors anyway.
  var nav = document.querySelector(".nav-bar");
  if (!nav) return;

  var header = document.querySelector("header.site-header") || nav;

  var links = nav.querySelectorAll('a[href*="#"]');
  var items = [];
  for (var i = 0; i < links.length; i++) {
    var id = links[i].getAttribute("href").split("#")[1];
    var target = id && document.getElementById(id);
    if (target) items.push({ link: links[i], item: links[i].parentNode, target: target });
  }
  // No anchors on this page (the news archive, a post).
  if (!items.length) return;

  // "Last heading above the line" is only correct if the list is in document
  // order. It is, as the menu stands, but sorting means reordering the menu
  // cannot quietly break this.
  items.sort(function (a, b) {
    var order = a.target.compareDocumentPosition(b.target);
    return order & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
  });

  // The line a heading has to pass to count as the current section: just below
  // the pinned header. The bar is one row wide, two around tablet widths and
  // three stacked on a phone, so its height is measured rather than assumed --
  // a fixed value would leave the highlight a section behind on the tall ones.
  //
  // The measurement also sets scroll-padding-top, so anchor jumps clear the
  // bar by the same amount at every width. The stylesheet sets a value per
  // breakpoint too; that one is the fallback for when this script does not
  // run. The line sits one slack below where a jump lands, so a heading you
  // have just jumped to counts as the section you are in rather than missing
  // it by the fraction of a pixel the scroll position happens to carry.
  var SLACK = 10;
  var pad = 0;
  var line = 0;
  function measure() {
    var next = header.offsetHeight + SLACK;
    if (next === pad) return;
    pad = next;
    line = pad + SLACK;
    document.documentElement.style.scrollPaddingTop = pad + "px";
  }

  var queued = false;
  var written = window.location.hash;

  // Keeps the address bar on the section you are reading, so the URL is always
  // worth copying.
  //
  // replaceState, never pushState: a history entry per section would turn the
  // back button into an undo-my-scrolling button and bury the page you came
  // from. Only written when the section actually changes, not once a frame --
  // Safari throttles replaceState to about a hundred calls per thirty seconds,
  // which a 60fps scroll would blow through in under two.
  function syncUrl(active) {
    if (!window.history || !window.history.replaceState) return;
    var hash = active ? "#" + active.target.id : "";
    if (hash === written) return;
    written = hash;
    window.history.replaceState(null, "", location.pathname + location.search + hash);
  }

  function apply() {
    queued = false;
    measure();
    var active = null;
    for (var i = 0; i < items.length; i++) {
      if (items[i].target.getBoundingClientRect().top <= line) active = items[i];
    }
    for (var j = 0; j < items.length; j++) {
      var on = items[j] === active;
      items[j].item.classList.toggle("active", on);
      if (on) items[j].link.setAttribute("aria-current", "true");
      else items[j].link.removeAttribute("aria-current");
    }
    syncUrl(active);
  }

  function schedule() {
    if (queued) return;
    queued = true;
    window.requestAnimationFrame(apply);
  }

  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule);
  apply();
})();
