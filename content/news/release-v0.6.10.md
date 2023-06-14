---
title: "Release v0.6.10"
description: "Release announcement and highlights for Calliope v0.6.10."
date: 2023-01-18T16:00:00+01:00
---

As of 18 January 2023, version 0.6.10 is packaged up and ready for download on [PyPI](https://pypi.python.org/pypi/calliope) and [conda-forge](https://anaconda.org/conda-forge/calliope)!

As of now, the 0.6.x branch of Calliope is mostly in bugfix mode, while work has started on 0.7, the next major version of Calliope with several wide-ranging improvements.

Version 0.6.10, as well as 0.6.8 and 0.6.9 before, focus on fixing various smaller bugs and keeping up with newer versions of Python and other packages. In particular, Calliope now runs on Apple Silicon devices.

Also of note: [in scikit-learn version 0.24.0, the method of random sampling for K-Means clustering was changed ](https://scikit-learn.org/stable/whats_new/v0.24.html#changed-models). This change will lead to different optimisation results if using [K-Means clustering](https://calliope.readthedocs.io/en/v0.6.10/user/advanced_features.html#time-resolution-adjustment) in your model.

The full list of fixes and minor improvements is available in the [changelog](https://calliope.readthedocs.io/en/v0.6.10/history.html).