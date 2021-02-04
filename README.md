# What ia this?

I'm trying to add [snowpack](https://www.snowpack.dev/) to my projects.

And it fails on packages.

In this repo I collect [minimal reproducible examples](https://stackoverflow.com/help/minimal-reproducible-example) to show these issues.

To see all failed packages check [branches](https://github.com/zaverden/snow-failed-pkgs/branches/all).

Check `packages.json` to find what versions of packages are used (all versions are fix).

# `react-s-alert`

`snowpack` exports this module wrong way.

```javascript
import Alert from "react-s-alert";
console.log(Alert);

// Expected:
// <component>
//
// Actual:
// {
//   default: <component>
// }
```