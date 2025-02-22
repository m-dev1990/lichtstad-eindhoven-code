import _fns from '../_fns'
import * as t from "./_types"

const WoenselseWatermolen = {
    // bron: https://nl.wikipedia.org/wiki/BunkerToren, architracks
    Bunkertoren: {
        type: 'gebouw', wijk: 'Woenselse Watermolen',
        Philips: false, Strijp: undefined, TUe: true,
        versie: [{
            naam: ['De Bunker'],
            plaats: {
                adres: {
                    straat: 'John F. Kennedylaan',
                    huisnummer: 3,
                },
            },
            maak: {
                tijd: 1969,
                ontwerper: ['Huig Maaskant'],
                project_url: undefined,
            },
            functie: ['studentencentrum'],
            stijl: ['brutalisme'],
            hoogte: undefined,
        }, {
            
            naam: ['Bunkertoren'],
            hoogte: 103,
            plaats: {

            },
            maak: {
                tijd: 2022,
                ontwerper: ['Powerhouse Company', 'DELVA Landscape Architecture & Urbanism'],
                project_url: 'https://www.powerhouse-company.com/bunker-tower'
            },
            functie: ['woning', 'kantoor', 'horeca'],
            stijl: ['brutalisme'],
            
        }],
        beschrijving: undefined,
    }
} as const

export default WoenselseWatermolen as t.tStadsobjectMap<typeof WoenselseWatermolen>