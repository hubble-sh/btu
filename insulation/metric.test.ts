import { assertAlmostEquals } from '@std/assert'
import { convertKToR } from 'btu/insulation/metric.ts'

/**
 * These test cases come from materials used in popular energy rating software in Australia.
 */
Deno.test('R-value from k-value conversion is as expected', () => {
    type Case = { expected: number, k: number, m: number }

    const cases: Case[] = [
        { expected: 1.2, k: 0.044, m: 0.052 },
        { expected: 0.4, k: 0.033, m: 0.013 },
        // Further tests from here:
        // https://ncc.abcb.gov.au/sites/default/files/resources/2022/UTNCC-Thermal-bridging-case-study-01.pdf
        { expected: 0.056, k: 0.25, m: 0.014 }, // Fibre Cemeent
        { expected: 2.2, k: 0.041, m: 0.09 }, // Some generic bulk insulation
        { expected: 0.076, k: 0.17, m: 0.013},
    ]

    for (const { expected, k, m } of cases) {
        const R = convertKToR({ k, m })
        if (R !== expected) {
            console.warn(`For R${expected} (k: ${k}, m: ${m}) we got ${R}, which is ~${Math.abs(expected - R).toFixed(4)} off.`)
        }
        assertAlmostEquals(R, expected, 0.05, `Expected R${expected}, got R${R.toFixed(2)}, from ${m} / ${k}W/m°K`)
    }
})