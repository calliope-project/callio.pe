---
title: "Calliope"
description: "Calliope is a free and open-source framework for building energy system models, at scales from a single urban district to an entire continent."
---

<div class="intro-bar">
    <div class="intro-left">
        <h4>Energy system models, from urban districts to entire continents</h4>
        <p>Calliope has been under continuous development since its creation in 2013. It is a free and open-source (Apache 2.0 licensed) framework for building energy system models. You define a model in plain text. Calliope turns it into an optimisation problem you can solve, explore and share.</p>
        <ul>
            <li><i class="fas fa-download"></i><strong><a href="https://calliope.readthedocs.io/en/latest/installation/">Get started</a></strong>: install it and work through the tutorials.</li>
            <li><i class="fas fa-cube"></i><strong><a href="#showcase">Build on an existing model</a></strong>: many published studies use Calliope.</li>
            <li><i class="fas fa-book"></i><strong><a href="https://calliope.readthedocs.io/en/latest/">Read the documentation</a></strong> for the full reference.</li>
            <li><i class="fas fa-comments"></i><strong><a href="https://calliope-modelblocks.zulipchat.com/">Ask a question</a></strong> on Zulip, or <a href="https://github.com/calliope-project/calliope">develop Calliope with us on GitHub</a>.</li>
        </ul>
    </div>
    <div class="intro-right">
        {{< recent-news count="3" >}}
    </div>
    <div style="clear: both;"></div>
</div>

## Why Calliope? {#why}

<div class="hl">
    <div class="hl-row">
        <div class="hl-label"><h3>One framework for every scale</h3>A Calliope model can cover a single urban district or an entire continent. A model is defined by its data, and the code and math are shared across scales. <a href="#showcase">See what people have built</a>.</div>
        <div class="hl-img"><img src="/images/trade-offs.png" alt="The same European system modelled at continental and at regional resolution, with the cost and infrastructure each implies"></div>
    </div>
    <div class="hl-row">
        <div class="hl-label"><h3>Models are human-readable text files</h3>YAML and CSV, and nothing else. That makes a model readable, diffable and reviewable, and lets a whole one live in a repository. <a href="https://calliope.readthedocs.io/en/latest/examples/">See the example models and tutorials</a>.</div>
        <div class="hl-img">{{% codeblock file="examples/example-tech.yaml" language="yaml" title="Example definition of a combined cycle gas turbine" %}}</div>
    </div>
    <div class="hl-row">
        <div class="hl-label"><h3>The math is text too, including everything built-in</h3>Every constraint Calliope contains is written in YAML, and you can add your own in the same syntax or override what is built-in. What you see here is Calliope's own energy balance. Our docs give you a range of examples to build on, from monthly peak charges to piecewise costs. <a href="https://calliope.readthedocs.io/en/latest/user_defined_math/">Write your own math</a>.</div>
        <div class="hl-img">{{% codeblock file="examples/example-math.yaml" language="yaml" title="Definition of the built-in energy balance constraint" %}}</div>
    </div>
    <div class="hl-row">
        <div class="hl-label"><h3>Results you can explore, without writing plotting code</h3>Calligraph, a companion tool, opens a solved model in your browser to click through. <a href="https://calligraph.readthedocs.io/">See the Calligraph documentation</a>.</div>
        <div class="hl-img">{{< video src="videos/calligraph.mp4" width="100%" >}}</div>
    </div>
</div>

There is more behind these: [modelling to generate alternatives](https://calliope.readthedocs.io/en/latest/examples/modes/) with SPORES mode, [scenarios and run scripts](https://calliope.readthedocs.io/en/latest/advanced/scripts/) for batches of runs, [tabular data from CSV](https://calliope.readthedocs.io/en/latest/examples/loading_tabular_data/), [time resampling and clustering](https://calliope.readthedocs.io/en/latest/advanced/time/), MILP and [piecewise linear constraints](https://calliope.readthedocs.io/en/latest/examples/piecewise_constraints/), [shadow prices](https://calliope.readthedocs.io/en/latest/advanced/shadow_prices/), and a [solver-agnostic backend](https://calliope.readthedocs.io/en/latest/advanced/backend_choice/) with a direct Gurobi interface.
{ .section-note .section-more }

{{% box color="grey" %}}

## Showcase {#showcase}

These selected examples showcase the wide range of applications that Calliope can be used for.

For a more complete listing of the hundreds of academic studies building on Calliope, the [Google Scholar listing of citations to the Calliope paper](https://scholar.google.com/scholar?oi=bibs&hl=en&cites=2201781058244578148) is a useful starting point.

{{< application-list >}}

{{% /box %}}

## Community {#community}

Calliope is built by many people and credits are tracked with [all-contributors](https://allcontributors.org/) in the [Calliope repository](https://github.com/calliope-project/calliope). Calliope's maintainers (marked <span class="sr-only">as maintainer</span><span class="maintainer-mark maintainer-legend" aria-hidden="true"><i class="fas fa-wrench"></i></span> in the contributor list) can be reached at [maintainers@callio.pe](mailto:maintainers@callio.pe).

{{< contributor-grid >}}

{{% box color="accent" %}}

### <i class="fas fa-rocket"></i>Join the community {#join}

Calliope is built entirely in the open, and every kind of contribution counts.

- **[Read the documentation](https://calliope.readthedocs.io/en/latest/)** first. It is extensive, and your question may already be answered there.
- **[Chat with the community on Zulip](https://calliope-modelblocks.zulipchat.com/)**. Questions, half-formed ideas and models you are stuck on are all welcome.
- **[Develop it with us on GitHub](https://github.com/calliope-project/calliope)**. The [contributors' guide](https://calliope.readthedocs.io/en/latest/contributing/) walks through setting up and opening a first pull request or an issue for a bug or a feature request.
- **Tell us about your model or study** either through the [chat](https://calliope-modelblocks.zulipchat.com/) or by [email](mailto:maintainers@callio.pe). If you have built something with Calliope, we are eager to hear about it!

{{% /box %}}
