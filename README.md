<div align="center">
<h1>eslint-config-fyfirman</h1>

<p>ESLint rules for all of my personal projects. Feel free to use these conventions :-)</p>
</div>

---

[![Build Status][build-badge]][build]
[![version][version-badge]][package]
[![downloads][downloads-badge]][npmtrends]
[![MIT License][license-badge]][license]
[![All Contributors][all-contributors-badge]](#contributors-)
[![PRs Welcome][prs-badge]][prs]
[![Code of Conduct][coc-badge]][coc]


## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [Issues](#issues)
  - [🐛 Bugs](#-bugs)
  - [💡 Feature Requests](#-feature-requests)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

This module is distributed via [npm][npm] which is bundled with [node][node] and
should be installed as one of your project's `devDependencies`:

```
npm install --save-dev eslint-config-fyfirman
```

This library has a required `peerDependencies` listing for [`eslint`][eslint]

## Usage

Then add the extends to your `.eslintrc.js`:

```javascript
module.exports = {
  extends: 'fyfirman',
  rules: {
    // your overrides
  },
}
```


## Issues

_Looking to contribute? Look for the [Good First Issue][good-first-issue]
label._

### 🐛 Bugs

Please file an issue for bugs, missing documentation, or unexpected behavior.

[**See Bugs**][bugs]

### 💡 Feature Requests

Please file an issue to suggest new features. Vote on feature requests by adding
a 👍. This helps maintainers prioritize what to work on.

[**See Feature Requests**][requests]


<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors][all-contributors] specification.
Contributions of any kind welcome!


[npm]: https://www.npmjs.com
[node]: https://nodejs.org
[build-badge]: https://img.shields.io/github/workflow/status/fyfirman/eslint-config-fyfirman/validate?logo=github&style=flat-square
[build]: https://github.com/fyfirman/eslint-config-fyfirman/actions?query=workflow%3Avalidate
[version-badge]: https://img.shields.io/npm/v/eslint-config-fyfirman.svg?style=flat-square
[package]: https://www.npmjs.com/package/eslint-config-fyfirman
[downloads-badge]: https://img.shields.io/npm/dm/eslint-config-fyfirman.svg?style=flat-square
[npmtrends]: http://www.npmtrends.com/eslint-config-fyfirman
[license-badge]: https://img.shields.io/npm/l/eslint-config-fyfirman.svg?style=flat-square
[license]: https://github.com/fyfirman/eslint-config-fyfirman/blob/master/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://github.com/fyfirman/eslint-config-fyfirman/blob/master/other/CODE_OF_CONDUCT.md
[emojis]: https://github.com/all-contributors/all-contributors#emoji-key
[all-contributors]: https://g.all-contributorsrcithub.com/all-contributors/all-contributors
[all-contributors-badge]: https://img.shields.io/github/all-contributors/fyfirman/eslint-config-fyfirman?color=orange&style=flat-square
[bugs]: https://github.com/fyfirman/eslint-config-fyfirman/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+sort%3Acreated-desc+label%3Abug
[requests]: https://github.com/fyfirman/eslint-config-fyfirman/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+sort%3Areactions-%2B1-desc+label%3Aenhancement
[good-first-issue]: https://github.com/fyfirman/eslint-config-fyfirman/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+sort%3Areactions-%2B1-desc+label%3Aenhancement+label%3A%22good+first+issue%22

[eslint]: https://github.com/eslint/eslint

