# Contribute

## Introduction

First, thank you for considering contributing to rollup! It's people like you that make the open source community such a great community! 😊

We welcome any type of contribution, not only code. You can help with

- **QA**: file bug reports, the more details you can give the better (i.e. [REPL](https://rollupjs.org/repl/)-links or repos that demonstrate the specific issue)
- **Marketing**: writing blog posts, howto's, printing stickers, ...
- **Community**: presenting the project at meetups, organizing a dedicated meetup for the local community, ...
- **Code**: take a look at the [open issues](https://github.com/rollup/plugins/issues). Even if you can't write code, commenting on them, showing that you care about a given issue matters. It helps us triage them.
- **Money**: we welcome financial contributions in full transparency on our [open collective](https://opencollective.com/rollup).

## Your First Contribution

Working on your first Pull Request? You can learn how from this _free_ series, [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github).

## Submitting code

Any code change should be submitted as a pull request. The description should explain what the code does and give steps to execute it. The pull request should also contain tests.

## Code review process

The bigger the pull request, the longer it will take to review and merge. Try to break down large pull requests in smaller chunks that are easier to review and merge.

It is also always helpful to have some context for your pull request. What was the purpose? Why does it matter to you? Does it resolve any known Github issues? Adding a line "resolves #<issue number>" (e.g. "resolves #23") to the description of your pull request or of a specific commit will automatically close this issue once the pull request is merged.

## For Maintainers

### Commits

Commits in this repository are expected to follow the [Conventional Commits Specification](https://www.conventionalcommits.org/en/v1.0.0/). Since commits are used to generate CHANGELOGs for the packages in this repository and control version-release flows, each commit that affects a particular package must have a scope matching that pacakge's name. e.g. `fix(batman): broken riddle` will match the `@openbase/batman` a package located at `packages/batman` in the repository.

To affect multiple packages in one commit, use a comma to delimit package names in the commit scope. e.g. `fix(batman,robin): batcave permissions.`

### Pull Requests

Pull Requests should ideally be limited to affect one package, but there may be situations where more than one package needs changes. PR merges should use _Squash Merge_.

⚠️ Before submitting your Pull Request, please make sure you have run `pnpm lint` and `pnpm test` from the directory(s) of the packages you're working on. `pnpm` scripts can also be run from anywhere using a `--filter` flag. e.g. `pnpm lint --filter @sanitise/html`.

### Publishing Packages

To publish changes to one or more packages, open a new Pull Request and merge it to `master` upon approval.

Manual publishing of packages is not necessary _**and not recommended**_. Publishing is handled by the `.github/workflow/release.yml` Github Action upon merge to `master`. The Github Action handles examining changes, generating a CHANGELOG for the package, bumping the version appropriately, publishing the package, committing a release, and pushing release tags.

### Adding Dependencies

Much like `yarn`, `pnpm add {dependency-name}` will add a dependency to a package.

However, because this is a monorepo, dependencies aren't frequently added to the repo root. Instead, move to the target service directory and run `pnpm add` there. e.g.

```console
cd packages/log
pnpm add del-cli --save-dev
```

If the rare need arises to add or update a dependency in all packages in the repository, a recursive add may be performed. e.g.

```console
$ pnpm add typescript --recursive
```

To add a package to the repo root, use the `-D -w` flags, which instruct `pnpm` to save to `devDependencies` and target the "workspace root." Root packages should always be installed to `devDependencies`.

## Package Scripts

All packages in this monorepo share the same set of scripts, and similar functionality between services can be expected.

Scripts can be run from the respective `packages/*` directories using `pnpm {script name}`, or from the monorepo root directory using `pnpm {script-name} --filter {package-name}` to target specific packages.
