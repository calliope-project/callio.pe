---
title: "Release v0.6.6"
description: "Release announcement and highlights for Calliope v0.6.6."
date: 2020-10-12T14:00:00+01:00
---

Version 0.6.6[^1] is packaged up and ready for download on [PyPI](https://pypi.python.org/pypi/calliope) and [conda-forge](https://anaconda.org/conda-forge/calliope)!

Key additional features are:

1. This release expands yet again on the model-wide group constraints added in 0.6.5, namely by addition of the `carrier_con` constraints. A full list of available constraints can be found in the [documentation](https://calliope.readthedocs.io/en/v0.6.6-post1/user/advanced_constraints.html#group-constraints).

2. There is a new run configuration: `spores`. 'SPORES' refers to Spatially-explicit Practically Optimal REsultS. This run mode allows a user to generate any number of alternative results which are within a certain range of the optimal cost. This run mode has been [recently applied to the Italian energy system](https://doi.org/10.1016/j.joule.2020.08.002) More information on using this run mode can be found in the [documentation](https://calliope.readthedocs.io/en/v0.6.6-post1/user/advanced_features.html#spores-mode).

3. More interface methods to pyomo have been added, to allow a user to a. better debug the backend model (`get_model_attrs`) and to add their own pyomo constraint functions (`add_constraint`).

4. If you work with Calliope as part of a Python workflow, then you can now specify timeseries files as dataframes (`df=` in the YAML definition) instead of always needing to load them from CSV.

We have also updated some dependencies in this version, including pandas (now >v1.0), xarray, and pyomo. The Pyomo update fixes an installation issue encountered when installing the Calliope conda-forge package.

Finally, from the next minor release, we have decided to deprecate plotting; it will instead be available as a seperate module. This will allow us to develop a more general energy systems plotting module. *Warning*: although still available in 0.6.6, the current plotting functionality has not been updated in several years and is now also untested.

The list of fixes and minor improvements is available in the [full changelog](https://calliope.readthedocs.io/en/v0.6.6-post1/history.html).

[^1]: Due to initial PyPI packaging issues, the version available is technically `0.6.6-patch1`, but installing using `0.6.6` or without version specification will automatically install this patched version.