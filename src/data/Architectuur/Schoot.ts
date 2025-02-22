import _fns from '../_fns'
import * as t from "./_types"

const Schoot = {
    Cederlaan20: {
        type: 'gebouw', wijk: 'Schoot',
        Philips: false, Strijp: undefined, TUe: false,
        versie: [{
            naam: ['Studentenhuisvesting Cederlaan'],
            maak: {
                tijd: 2012,
                ontwerper: ['Vissers & Roelands'],
                project_url: 'https://www.vissersroelands.nl/projecten/0909/studentenhuisvesting-cederlaan',
            },
            plaats: [{
                adres: {
                    straat: 'Cederlaan',
                    huisnummer: 20,
                },
            }],
            hoogte: undefined,
            stijl: ['hedendaags'],
            functie: ['woning'],
        }],
        beschrijving: 'Een erg lelijk gebouw.',
    },
    PhilipsBedrijfsschool: {
        type: 'gebouw', wijk: 'Schoot',
        Philips: true, Strijp: undefined, TUe: false,
        versie: [{
            naam: ['Philips Bedrijfsschool'],
            maak: {
                tijd: 1950,
                ontwerper: ['Roosenburg Verhave Luyt'],
                project_url: undefined,
            },
            hoogte: undefined,
            stijl: ['art-deco-modernisme'],
            plaats: [{
                adres: {
                    straat: 'Kastanjelaan',
                    huisnummer: 1,
                },
            }],
            functie: ['onderwijs'],
        }, {
            naam: [],
            maak: {
                tijd: 2019,
                ontwerper: ['diederendirrix'],
                project_url: 'https://www.diederendirrix.nl/nl/projecten/transformatie-philips-bedrijfsschool-eindhoven/'
            },
            hoogte: undefined,
            stijl: [],
            functie: [],
            plaats: [],
        }],
        beschrijving: _fns.multiline(`
            In 1929 werd deze school opgericht.
            Het gebouw is zwaar beschadigd tijdens de tweede wereldoorlog.
            Een nieuw gebouw werd opgericht.
            In 1950 heropende de school er in het huidige gebouw.
            In 1989 ging de school, in een periode van delocalisatie van Philips, dicht.
            In 2019 is het heropend als appartementencomplex met een cafe aan de entree.

            Ik apprecieer zulke stijl: een mengeling van klassiek en modern. Dat maakt het gezellig en voor gezelligheid zou een hoop meer aandacht mogen zijn in de architectuur.
            `),
    },
    PantaRhei: {
        type: 'fontein', wijk: 'Schoot',
        Philips: true, Strijp: undefined, TUe: false,
        versie: [{
            naam: ['Panta Rhei'],
            maak: {
                tijd: 1951,
                ontwerper: ['Hubert van Lith'],
                project_url: undefined,
            },
            plaats: [],
            stijl: [],
        }],
        beschrijving: 'Aangeboden door het personeel van Philips aan het bedrijf ter gelegenheid van het 60-jarig jubileum van het bedrijf.',
    }
} as const

export default Schoot as t.tStadsobjectMap<typeof Schoot>