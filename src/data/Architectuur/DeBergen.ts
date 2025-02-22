import * as t from "./_types"

const DeBergen = {
    /*
    Oranjestraat2: {
        type: 'gebouw', wijk: 'De Bergen',
        versie: [{
            adres: {
                straat: 'Oranjestraat',
                huisnummer: 2,
            },
        }]
    },
    */
} as const

export default DeBergen as t.tStadsobjectMap<typeof DeBergen>