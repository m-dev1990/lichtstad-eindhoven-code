import _fns from '../_fns'
import * as t from './_types'

const tHool = {
    tHool: {
        type: 'wijk', wijk: "'t Hool",
        Philips: true, Strijp: undefined, TUe: false,
        versie: [{
            naam: ["'t Hool"],
            maak: {
                tijd: 1972,
                ontwerper: ['Van den Broek', 'Bakema'],
                project_url: undefined,
            },
            stijl: [],
        }],
        beschrijving: _fns.multiline(`
            Deze wijk werd gebouwd op initiatief van enkele NatLab-medewerkers.
            Bij het ontwerp werd aandacht besteed aan sociale doelstellingen.
            Er staat een mix van goedkopere en duurdere woningen.
            Verstedelijking en de menselijke maat werden met elkaar verzoend.
            Er is veel groen en de wijk is autoluw.
            `)
    },
} as const

export default tHool as t.tStadsobjectMap<typeof tHool>