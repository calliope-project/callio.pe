---
title: "Release of version 0.7.0"
description: "Release announcement and highlights for Calliope v0.7.0."
date: 2026-09-25T13:30:00+02:00
---

Since its creation back in 2013, Calliope has had the ambition of making energy system models more accessible, understandable, and reusable.

Now, after a long period of pre-releases, we have finally arrived at the release of version 0.7.0. This represents both a complete rewrite of most internals in Calliope, and a return to one of the original ideas behind Calliope: that energy system models should be as human-readable as possible and fully modifiable, while simultaneously avoiding the need to write (Python) code as much as possible.

With Calliope 0.7.0, not just the model components, but all of the underlying mathematics meet this ambition. Users can now define custom constraints using our [YAML-based math notation](https://calliope.readthedocs.io/en/stable/user_defined_math/), and even the built-in constraints are fully modifiable and replaceable. This represents a lot of effort by the Calliope team over the past few years, and we look forward to further building on this foundation in innovative ways, and to seeing what others build on top of it!

Other highlights in version 0.7.0 include:

- [Flexible data tables](https://calliope.readthedocs.io/en/stable/basic/data_tables/) allow loading any parameters from tables, not just time series.
- [Custom solver backends](https://calliope.readthedocs.io/en/stable/advanced/backend_choice/) allow direct solver interfaces without going through Pyomo: so far available for Gurobi and HiGHS.
- Visualisation is no longer a part of Calliope itself, but available through third-party packages like [Calligraph](https://github.com/calliope-project/calligraph) and [Calliope Studio](https://github.com/sjpfenninger/calliope-studio).

The [migration guide for 0.7.0](https://calliope.readthedocs.io/en/stable/migrating/) details many of the other changes and improvements in version 0.7.0.

The list of contributors to Calliope is large and growing. We've also overhauled the website which now includes, among other things, an [acknowledgement of all contributions](https://www.callio.pe/#community).
