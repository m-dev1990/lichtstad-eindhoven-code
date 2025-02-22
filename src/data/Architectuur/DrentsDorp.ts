import _fns from "../_fns";
import * as t from "./_types"

const DrentsDorp = {
    DrentsDorp: {
        type: 'wijk', wijk: "Drents Dorp",
        Philips: true, Strijp: undefined, TUe: false,
        versie: [{
            naam: ['Drents Dorp'],
            maak: {
                // Eindhoven Design District map
                // https://www.eindhovendesigndistrict.com/assets/documents/Eindhoven-Design-District-Map-web.pdf
                // https://www.architectuurcentrumeindhoven.nl/wp-content/uploads/2018/04/ACE-Architectuurgids-Philipserfgoed.pdf
                ontwerper: ['Cornelis Smit'],
                // https://www.ihesm.com/eindhoven1934/drentsdorp/
                // 1925-1930
                tijd: 1930,
                project_url: undefined,
            },
            plaats: [],
            stijl: ['traditioneel'],
        }],
        beschrijving: _fns.multiline(`De wijk is gebouwd voor arbeiders van Philips door het bedrijf.
            Zij kwamen uit het noorden, meer bepaald uit Drente.
            Vandaar de naam Drents Dorp.`),
    },
    NieuwDrentsDorp: {
        type: 'wijk', wijk: 'Drents Dorp',
        Philips: false, Strijp: undefined, TUe: false,
        versie: [{
            naam: ['Nieuw Drents Dorp'],
            // https://www.biqarchitecten.nl/drents-dorp
            maak: {
                tijd: 2014,
                ontwerper: ['BIQ Architecten'],
                project_url: 'https://www.biqarchitecten.nl/drents-dorp',
            },
            plaats: [],
            stijl: ['post-post-modernisme'],
        }],
        beschrijving: undefined,
    }
} as const

export default DrentsDorp as t.tStadsobjectMap<typeof DrentsDorp>