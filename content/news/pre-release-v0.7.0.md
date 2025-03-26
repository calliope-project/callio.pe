---
title: "Major new features: pre-release of version 0.7.0"
description: "Pre-release announcement and highlights for Calliope v0.7.0."
date: 2025-03-26T08:00:00+01:00
---

For quite a while now we have been working on a major new version of Calliope - v0.7.0 – packed with powerful new features and major usability upgrades.

[A pre-release version of v0.7.0 is already available](https://calliope.readthedocs.io/en/latest/) through both PyPI and Conda-Forge. For new projects, we recommend using this new version already as it introduces a range of backwards-incompatible changes. The Calliope team is using it productively in several projects.

Some of the major new features include:

* Easy customisation of all model math: Extending our philosophy of easy customisation further, Calliope now allows full customisation of the model math. We have built a math parser and all of the pre-defined math inside Calliope is [formulated in our own YAML-based math notation](https://calliope.readthedocs.io/en/latest/pre_defined_math/), which is easy to read, understand and modify. The documentation on [defining your own math](https://calliope.readthedocs.io/en/latest/user_defined_math/) explains how you can make use of this powerful functionality to build your own custom constraints, or modify the build-in ones.
* Ability to [load any data from tabular files](https://calliope.readthedocs.io/en/latest/creating/data_tables/), not just time series.
* [Direct interface to the Gurobi API](https://calliope.readthedocs.io/en/latest/advanced/backend_choice/): This speeds up model generation and requires less memory.
* Improvements and streamlining for the terminology and to component definitions (for example, all technologies can now include a storage buffer).
* Visualisation has been removed from Calliope itself; instead we have a dedicated interactive visualisation tool called [Calligraph](https://github.com/calliope-project/calligraph) which is also available as a pre-release. This is a preview of Calligraph in action: {{< video src="videos/calligraph.mp4" width="800px" >}}

Much of the internal code has been re-built around these new features. In this process, we have also made a large number of smaller changes, for example, an [easier way to access shadow prices](https://calliope.readthedocs.io/en/latest/advanced/shadow_prices/).

See the (also completely re-built) documentation for v0.7.0 by going to the ["latest" branch on ReadTheDocs](https://calliope.readthedocs.io/en/latest/).

The docs contain [detailed guidance on migrating a model from v0.6 to v0.7](https://calliope.readthedocs.io/en/latest/migrating/), which also gives you a fuller picture of the many improvements in the new version.

We welcome feedback and contributions!
