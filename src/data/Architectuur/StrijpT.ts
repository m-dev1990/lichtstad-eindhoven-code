import * as t from "./_types"

const StrijpT = {
    Gloeilampplantsoen: {
        // https://www.dommelsekracht.nl/het-gloeilampplantsoen/
        type: 'park', wijk: 'Strijp T',
        Philips: true, Strijp: 'T', TUe: false,
        versie: [{
            naam: ['Gloeilampplantsoen'],
            maak: {
                tijd: 1955,
                ontwerper: [],
                project_url: undefined,
            },
            stijl: [],
            plaats: [],
        }],
        beschrijving: undefined,
    },
} as const

export default StrijpT as t.tStadsobjectMap<typeof StrijpT>