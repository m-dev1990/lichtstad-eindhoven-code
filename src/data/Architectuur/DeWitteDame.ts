import _fns from "../_fns"
import * as t from "./_types"


const DeWitteDame = {
    Lichttoren: {
        type: 'gebouw', wijk: 'De Witte Dame',
        Philips: true, Strijp: undefined, TUe: false,
        versie: [{
            naam: ['Lichttoren', 'De Witte Dame'],
            maak: {
                tijd: 1920,
                ontwerper: ['TABROS - Technisch Advies Bureau Roosenburg, Op ten Noort, Scheffer'],
                project_url: undefined,
            },
            stijl: ['art-deco'],
            plaats: [{
                adres: {
                    straat: 'Mathildelaan',
                    huisnummer: 1,
                },
            }],
            hoogte: undefined,
            functie: ['fabriek'],
        }, {
            naam: [],
            maak: {
                tijd: 1994,
                ontwerper: ['diederendirrix'],
                project_url: 'https://www.diederendirrix.nl/nl/projecten/witte-dame/'
            },
            stijl: ['post-post-modernisme'],
            functie: [],
            plaats: [],
            hoogte: undefined,
        }],
        beschrijving: _fns.multiline(`De Lichttoren is het embleem van Eindhoven.
            Het kreeg de elegante bijnaam "De Witte Dame".
            Het is een kenmerkend gebouw waarmee Philips zijn impact op de stad duidelijk maakt.
            Het was zichtbaar bij het buitenstappen van het Centraal Station (helaas niet meer)
            De meeste architectuur van Philips was louter functioneel.
            Voor deze witte dame heeft men een kleine moeite om haar presentabel op te maken.
            `)
    },
} as const

export default DeWitteDame as t.tStadsobjectMap<typeof DeWitteDame>