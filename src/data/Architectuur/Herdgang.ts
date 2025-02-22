import * as t from "./_types"

const Herdgang = {
    // onbekend: maakjaar
    PhilipsDeJonghPark: {
        type: 'park', wijk: 'Herdgang',
        Philips: false, Strijp: undefined, TUe: false,
        versie: [{
            naam: ['Philips_de_Jongh-Park'],
            maak: {
                ontwerper: ['Gerard Kools'],
                tijd: undefined,
                project_url: undefined,
            },
            plaats: [],
            stijl: [],
        }],
        beschrijving: `Dit park is vernoemd naar de vrouw van Anton Philips, Anna Philips de Jongh.
            In 1920 schonk het echtpaar het park aan de stad Eindhoven.`,        
    },
    /*
    PhilipsDeJonghPark_Parkpavilioen: {
        type: 'gebouw',
        naam: 'Philips_de_Johgn-Park parkpaviljoen',
        in: 'PhilipsDeJonghPark',
    }
    */
} as const

export default Herdgang as t.tStadsobjectMap<typeof Herdgang>