import * as t from "./_types"

const Fellenoord = {
    // bron naam: https://www.unstudio.com/en/page/16995/fellenoord-15
    // bron: architracks
    Fellenoord15: {
        type: 'gebouw', wijk: 'Fellenoord',
        Philips: false, Strijp: undefined, TUe: false,
        versie: [{
            functie: ['kantoor'],
            maak: {
                tijd: 2021,
                ontwerper: ['UN Studio'],
                project_url: 'https://www.unstudio.com/en/page/16995/fellenoord-15',
            },
            stijl: ['origineel modernisme'],
            plaats: [{
                adres: {
                    straat: 'Fellenoord',
                    huisnummer: 15,
                },
            }],
            hoogte: undefined,
            naam: ["Fellenoord 15"],
        }],
        beschrijving: undefined,
    },
} as const

export default Fellenoord as t.tStadsobjectMap<typeof Fellenoord>