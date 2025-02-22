import * as t from "./_types"

// ook Strijp T en Strijp R behoren tot de wijk Zwaanstraat
const Zwaanstraat = {
    /*
    // onbekend: huisnummer, architect
    BezuidenhoutsewegX1: {
        type: 'gebouw',
        naam: 'Bezuidenhoutseweg',
        adres: {
            straat: 'Bezuidenhoutseweg',
        }
    }
    */
} as const

export default Zwaanstraat as t.tStadsobjectMap<typeof Zwaanstraat>