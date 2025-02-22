import * as t from './Architectuur/_types'

export type * from './Architectuur/_types'

export type tFoto = {
    file: string,
    ratio: number[]
    day: Date,
    beschrijving: string,
    onderwerp: { object: t.tStadsobject }[]
}

export type tOnderwerp = { object: t.tStadsobject }