[![Build Status](https://github.com/emiller88/setup-nextflow/workflows/CI/badge.svg)](https://github.com/emiller88/setup-nextflow/actions)

# A Github Action that installs a specific nextflow version

Check out [examples of using this Action in the wild](https://github.com/search?l=&q=emiller88/setup-nextflow+++filename%3A*.yml&type=Code).

See the [actions tab](https://github.com/emiller88/setup-nextflow/actions) for runs of this action! :rocket:

Heavily influenced by [setup-emacs](https://github.com/purcell/setup-emacs)

## Usage:

```yaml
uses: emiller88/setup-nextflow@master
with:
  version: 24.5
```

The `nextflow` executable on the path will then be the requested
version.

For an example of real-life usage, see the [Actions config for
`nf-core/modules`](https://github.com/nf-core/modules/blob/master/.github/workflows/fastqc.yml).
