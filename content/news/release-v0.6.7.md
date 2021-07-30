---
title: "Release v0.6.7"
description: "Release announcement and highlights for Calliope v0.6.7."
date: 2021-06-30T16:00:00+01:00
---

Version 0.6.7 is packaged up and ready for download on [PyPI](https://pypi.python.org/pypi/calliope) and [conda-forge](https://anaconda.org/conda-forge/calliope)!

Key additional features are:

1. Support for Pyomo's solver interface with `gurobi_persistent` has been enabled. When working with the Gurobi solver and looking to rerun a model several times, it can be done without the overhead of sending the model across to Gurobi. This update entails a new backend interface method to send backend model updates to the Gurobi model instance (`model.backend.regenerate_persistent_solver(...)`).

2. The `spores` run mode introduced in v0.6.6 has more functionality. It is possible to initialise the run with a previously optimised model, such that you can skip the 'cost optimal' run phase. It is also possible to build the Pyomo backend model in the SPORES run mode `model.run(build_only=True)`, update the backend (e.g. add constraints with `model.backend.add_constraint(...)`), and then run the model in SPORES mode (`model_with_results = model.backend.rerun()`). All of this can be done using the Gurobi Persistent solver, for increased efficiency.

3. This release improves the robustness of [model-wide group constraints](https://calliope.readthedocs.io/en/v0.6.7/user/advanced_constraints.html#group-constraints) to user inputs. This means that some user configurations may no longer work unless they are split into a greater number of more explicit groups (e.g. carrier-specific constraints can only be defined for one carrier per group constraint).

4. Scenarios can now be a mixture of scenarios and overrides, rather than only overrides. This enables you to nest sets of overrides into intermediate scenarios for easier scenario management.

We have also updated some dependencies in this version, including pandas, xarray, and pyomo.

The list of fixes and minor improvements is available in the [full changelog](https://calliope.readthedocs.io/en/v0.6.7/history.html).