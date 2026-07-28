# callio.pe

Source for the [Calliope project website](https://www.callio.pe/). Built with
[Hugo](https://gohugo.io/) and deployed on Netlify.

## Tasks

* `pixi run dev`: Local server with drafts at http://localhost:1313.
* `pixi run public`: Production build into `public/`.
* `pixi run clean`: Remove `public/`.

## Data

| File | What it holds |
| --- | --- |
| `data/applications.yaml` | Showcase entries, each `research`, `practice` or `teaching`. A `research` entry cites a DOI that must exist in `publications.yaml`. |
| `data/publications.yaml` | The papers behind the `research` entries. Bibliography only. |

Contributors are fetched on build in `layouts/partials/contributors.html`, for each repository listed under `params.contributorSources` in `config.yaml`.
To correct a name, avatar or contribution type, it has to be fixed upstream.

## Acknowledgements

Parts of `assets/css/style.css` and the templates derive from the Hugo Bootstrap v4 theme, and `assets/css/milligram.css` is derived from Milligram v1.3.0. See [NOTICE.md](NOTICE.md).
