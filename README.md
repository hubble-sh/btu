# BTU - Building Trade Utilities

A package of utilities for working in the building construction industry.

(The name is a pun on Btu, _British Thermal Unit_, an imperial unit used in measuring insulation and conductivity, as an equivalent to watts)

## Installation

```sh
deno add jsr:@hubble/btu

# For installing on Node with NPM, see: https://jsr.io/docs/with/node
npx jsr add @hubble/btu
```

## Submodules

### insulation/metric

```ts
import * as metric from '@hubble/btu/insulation/metric'

metric.convertKToR({ K: 0. })
```