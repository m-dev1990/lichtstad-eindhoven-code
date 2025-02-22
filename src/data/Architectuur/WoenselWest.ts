import * as t from "./_types"

const WoenselWest = {
    // architracks, architectuurcentrumeindhoven wandeling
    VoltaGalvani: {
        type: 'gebouw', wijk: 'Woensel-West',
        Philips: false, Strijp: undefined, TUe: false,
        versie: [{
            naam: ['Volta Galvani'],
            functie: ['woning'],
            maak: {
                ontwerper: [ 'Geurst & Schulze Architecten' ],
                tijd: 2014,
                // TODO
                project_url: undefined,
            },
            plaats: {
                adres: [{
                    straat: 'Edisonstraat',
                    huisnummer: { even: false, reeks: [99, 137], },
                }, {
                    straat: 'Galvanistraat',
                    huisnummer: t.$AdresHuisnummerAll,
                }, {
                    straat: 'Voltastraat',
                    huisnummer: t.$AdresHuisnummerAll,
                }, {
                    straat: 'Wenckebachstraat',
                    huisnummer: { even: false, reeks: [1, 25], },
                }, {
                    straat: 'Wenckebachstraat',
                    huisnummer: { even: true, reeks: [4, 36]},
                }]
            },
            stijl: [],
            hoogte: undefined,
        }],
        beschrijving: undefined,
    },
} as const

export default WoenselWest as t.tStadsobjectMap<typeof WoenselWest>