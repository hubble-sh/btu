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

const r = metric.convertKToR({ k: 0.041, m: 0.09 })
console.log(`R${r.toFixed(1)} == R2.2`)

// "R2.2 == R2.2"
```