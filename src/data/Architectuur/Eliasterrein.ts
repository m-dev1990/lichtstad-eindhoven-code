import * as t from './_types'

const Eliasterrein = {
    /*
    Mauritsstraat66: {
        type: 'gebouw',
        adres: {
            straat: 'Mauritsstraat',
            huisnummer: 66,
        }
    },
    Hoogstraat2: {
        type: 'gebouw',
        adres: {
            straat: 'Hoogstraat',
            huisnummer: 2,
        }
    }
        */
} as const

export default Eliasterrein as t.tStadsobjectMap<typeof Eliasterrein>