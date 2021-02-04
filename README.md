# What ia this?

I'm trying to add [snowpack](https://www.snowpack.dev/) to my projects.

And it fails on packages.

In this repo I collect [minimal reproducible examples](https://stackoverflow.com/help/minimal-reproducible-example) to show these issues.

To see all failed packages check [branches](https://github.com/zaverden/snow-failed-pkgs/branches/all).

Check `packages.json` to find what versions of packages are used (all versions are fix).

# `redux-form`

```
Unhandled Runtime Error
Uncaught ReferenceError: module is not defined
```

[It fail on line `const castModule = module;`](https://github.com/redux-form/redux-form/blob/0485967d7f98b349e850570a2f2f3a4124f392d8/src/util/isHotReloading.js#L3)
