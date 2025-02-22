import * as t from "./_types";

const Vonderkwartier = {
    Vonderweg66: {
        type: 'gebouw',
        wijk: 'Vonderkwartier',
        Philips: false, Strijp: undefined, TUe: false,
        versie: [{
            naam: [],
            plaats: {
                adres: [{
                    straat: 'Vonderweg',
                    huisnummer: 66,
                }],
            },
            maak: {
                tijd: 1992,
                ontwerper: ['Diederen en Schutgens'],
                project_url: undefined,
            },
            functie: ['woning'],
            stijl: [],
            hoogte: undefined,
        }],
        beschrijving: undefined,
    },
    LodewijkNapoleonplein17Huizengroep: {
        // http://vanabbestichting.nl/wp-content/uploads/2021/01/Voorstel-HvA-stg.-aanvragen-monumentenstatus-selectie-15-panden-2021-DEF..pdf
        type: 'gebouw', wijk: 'Vonderkwartier',
        Philips: false, Strijp: undefined, TUe: false,
        versie: [{
            naam: [],
            plaats: {
                adres: [{
                    straat: 'Lodewijk Napoleonplein',
                    huisnummer: { reeks: [17, 19] },
                }],
            },
            maak: {
                tijd: 1930, // rond 1930
                ontwerper: ['Phil Donders'],
                project_url: undefined,
            },
            functie: ['woning'],
            hoogte: undefined,
            stijl: [],
        }],
        beschrijving: undefined
    },
    LodewijkNapoleonplein19: {
        type: 'gebouw', wijk: 'Vonderkwartier',
        Philips: false, Strijp: undefined, TUe: false,
        versie: [{
            naam: [],
            plaats: {
                adres: [{
                    straat: 'Lodewijk Napoleonplein',
                    huisnummer: 19,
                }],
                object: 'LodewijkNapoleonplein17Huizengroep',
            },
            maak: {
                tijd: 1930,
                ontwerper: ['Phil Donders'],
                project_url: undefined,
            },
            functie: ['woning'],
            hoogte: undefined,
            stijl: [],
        }],
        beschrijving: undefined,
    },
/*
    Vonderhof: {
        type: 'gebouw',
        wijk: 'Vonderkwartier',
        Philips: false, Strijp: undefined, TUe: false,
        versie: [{
            naam: ['Vonderhof'],
            plaats: {
                adres: {
                    straat: 'Bernhardplaats',
                    huisnummer: 1,
                },
            },
            maak: {
                tijd: 1930,
                ontwerper: [],
                project_url: undefined,
            },
            functie: ['rustoord'],
            stijl: [],
            hoogte: undefined,
        }],
        beschrijving: undefined,
    }
*/
} as const

export default Vonderkwartier as t.tStadsobjectMap<typeof Vonderkwartier>