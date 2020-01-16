---
title: "Release v0.6.5"
description: "Release announcement and highlights for Calliope v0.6.5."
date: 2020-01-15T10:00:00+01:00
---

Version 0.6.5 is packaged up and ready for download on [PyPI](https://pypi.python.org/pypi/calliope) and [conda-forge](https://anaconda.org/conda-forge/calliope)!

This release improves and expands on the model-wide group constraints added in 0.6.4, further increasing the flexibility they make available.

There is also a new `storage_discharge_depth` constraint, which allows setting a minimum stored-energy level to be preserved by a storage technology.

This version is also fully Python 3.8 compatible. In the process of updating dependencies for Python 3.8, we updated to the most recent version of scikit-learn (0.22), which fixes a bug in how k-means clustering reacts to specifying a random seed. This may result in models running Calliope 0.6.5 and setting a random seed seeing different k-means clusters than Calliope 0.6.4 and older.

The long list of fixes and minor improvements is available in the [full changelog](https://calliope.readthedocs.io/en/v0.6.5/history.html).
