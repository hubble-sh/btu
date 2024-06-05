import { assertAlmostEquals } from '@std/assert'
import { convertKToR } from 'btu/insulation/metric.ts'

/**
 * These test cases come from materials used in popular energy rating software in Australia.
 */
Deno.test('R value from K value conversion is as expected', () => {
    const cases = [
        { expected: 1.2, K: 0.044, m: 0.052 },
        { expected: 0.4, K: 0.033, m: 0.013 },
        // { }
    ]

    for (const { expected, K, m } of cases) {
        const R = convertKToR({ K, m })
        if (R != expected) {
            console.warn(`For R${expected} (K: ${K}, m: ${m}) we got ${R}, which is ~${Math.abs(expected - R).toFixed(2)} off.`)
        }
        assertAlmostEquals(R, expected, 0.05, `Expected R${expected}, got R${R.toFixed(2)}, from ${m} / ${K}W/m°C`)
    }
})