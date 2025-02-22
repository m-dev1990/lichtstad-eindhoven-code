import _fns from "../_fns"
import * as t from "./_types"

const Limbeek = {
    // onbekend: jaar
    Bakermat: {
        type: 'gebouw', wijk: 'Bakermat',
        Philips: false, Strijp: undefined, TUe: false,
        versie: [{
            naam: ['Bakermat'],
            functie: ['woning'],
            maak: {
                // bron: https://www.tielemans.nl/projecten/de-bakermat-eindhoven
                tijd: 2022,
                ontwerper: ['van aken architecten', 'Maarten Baas'],
                project_url: undefined,
            },
            // bron: https://www.tielemans.nl/projecten/de-bakermat-eindhoven
            hoogte: 65,
            plaats: [{ 
                adres: {
                    straat: 'Marconilaan',
                    huisnummer: 3,
                },
            }],
            stijl: ['raar post-modernisme'],
        }],
        beschrijving: undefined,
    },
} as const

export default Limbeek as t.tStadsobjectMap<typeof Limbeek>