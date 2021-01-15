## Network Canvas Shared Web Styles

This repo contains shared sass modules that can be imported into other projects. It's intended to be used as a git submodule.

### Adding the submodule to a project

```bash
git submodule add https://github.com/codaco/shared-web-styles /assets/shared
```

### Importing
```bash
# assets/css/main.scss
@import '../shared/grid.scss'
```

### Jekyll-specific

Whatever directory you add the submodule, add this to the `load_paths` in your Jekyll `_config.yml`, e.g.:

```
sass:
  load_paths:
    - _sass
    - assets/shared/shared-web-styles
```


Then as per the [Jekyll docs](https://jekyllrb.com/docs/assets/) import the sass modules you want to use into the main style file:

```bash
# assets/css/main.scss
@import '../shared/grid.scss'
```

Jekyll automatically compiles this into `assets/css/main.css` in the build.
