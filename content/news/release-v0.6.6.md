---
title: "Release v0.6.6"
description: "Release announcement and highlights for Calliope v0.6.6."
date: 2020-10-12T14:00:00+01:00
---

Version 0.6.6[^1] is packaged up and ready for download on [PyPI](https://pypi.python.org/pypi/calliope) and [conda-forge](https://anaconda.org/conda-forge/calliope)!

This release improves and expands yet again on the model-wide group constraints added in 0.6.5, namely by addition of new constraints. A full list of available constraints can be found in the [documentation](https://calliope.readthedocs.io/en/v0.6.6-post1/user/advanced_constraints.html#group-constraints).

There is also a new run configuration: `spores`. 'SPORES' refers to Spatially-explicit Practically Optimal REsultS. This run mode allows a user to generate any number of alternative results which are within a certain range of the optimal cost. This run mode has been [recently applied to the Italian energy system](https://doi.org/10.1016/j.joule.2020.08.002) More information on using this run mode can be found in the [documentation](https://calliope.readthedocs.io/en/v0.6.6-post1/user/advanced_features.html#spores-mode).

More interface methods to pyomo have been added, to allow a user to a. better debug the backend model (`get_model_attrs`) and to add their own pyomo constraint functions (`add_constraint`).

We have updated some dependencies in this version, including pandas (now >v1.0), xarray, and pyomo. We have also slimmed down the list of dependencies, to minimise the package installed footprint.

From the next minor release, we have also decided to deprecate plotting; it will instead be available as a seperate module. This will allow us to develop a more general energy systems plotting module. Warning: although still available in 0.6.6, the current plotting functionality has not been updated in several years and is now also untested.

The long list of fixes and minor improvements is available in the [full changelog](https://calliope.readthedocs.io/en/v0.6.6-post1/history.html).

[^1]: Due to initial PyPI packaging issues, the version available is technically `0.6.6-patch1`, but installing using `0.6.6` or without version specification will automatically install this patched version.