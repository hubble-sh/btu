/**
 * @module
 * This module contains utility functions for dealing with insulation using metric units.
 * 
 * Note that as a result, this is not suitable for the US building industry,
 * which tends to use imperial units.
 */

/**
 * Convert a K value (with thickness in meters) into an R value.
 *
 * Warning: May be approximate due to errors in measuring.
 * 
 * See [this case study from the Australian NCC](https://ncc.abcb.gov.au/sites/default/files/resources/2022/UTNCC-Thermal-bridging-case-study-01.pdf)
 * to understand R Values better.
 * 
 * If K is 0, the resulting R value will be `Infinity`. Use `Number.isFinite` if required.
 * 
 * @param options
 * @param options.K The K value in W/m°C
 * @param options.m The thickness in meters
 * @returns the R value in m²K/W
 */
export function convertKToR({ m, K }: { m: number, K: number }): number {

    return K ? m / K : Infinity
}

/**
 * Convert a U value into an R value.
 * 
 * If U is 0, the resulting R value will be `Infinity`. Use `Number.isFinite` if required.
 * 
 * @param options
 * @param options.U The K value in  W/m²K.
 * @returns the R value in m²K/W
 */
export function convertUToR({ U }: { U: number }): number {
    return U ? 1 / U : Infinity
}

