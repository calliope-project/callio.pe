---
title: "Release v0.6.4"
description: "Release notes for Calliope v0.6.4."
date: 2019-05-27T16:00:00+02:00
---

Version 0.6.4 is packaged up and ready for download on [PyPI](https://pypi.python.org/pypi/calliope) and [conda-forge](https://anaconda.org/conda-forge/calliope)!

Highlights of this version are new group constraints that add a range of flexibility. For example, the `cost_var_max` group constraint allows flexible emissions limits on a per-region basis (assuming emissions are modelled as a cost class). The `demand_share_max` or `demand_share_per_timestep_max` group constraints allow limiting groups of technologies (e.g., variable renewables, or legacy generators) to a maximum on a model-wide basis or for groups of locations, on average or in each individual time step, respectively. Many kinds of policy constraints on system planning can easily be modelled through group constraints.

The documentation has a [full list of all group constraints](https://calliope.readthedocs.io/en/v0.6.4/user/advanced_constraints.html#group-constraints).

In addition, multi-objective optimisation problems can now be specified by weighting cost classes in the default objective function, an `asynchronous_prod_con` setting allows forcing storage or transmission technologies to not supply and demand a carrier in the same time step, and specialised storage-related constraints (`energy_cap_per_storage_cap_equals` and `energy_cap_per_storage_cap_min`) were added.

The documentation has also seen quite a few improvements and a visual overhaul.

For details on all the improvements to constraints and the various bugs that were fixed, see the [full changelog](https://calliope.readthedocs.io/en/v0.6.4/history.html).
