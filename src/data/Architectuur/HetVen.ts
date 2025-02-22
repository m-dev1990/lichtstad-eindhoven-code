import * as t from './_types'

const HetVen = {
    Evoluon: {
        type: 'gebouw', wijk: 'Het Ven',
        Philips: true, Strijp: undefined, TUe: false,
        versie: [{
            naam: ['Evoluon'],
            maak: {
                tijd: 1966,
                ontwerper: ['Louis Kalff', 'Leo de Bever'],
                project_url: undefined,
            },
            hoogte: undefined,
            stijl: ['futuristisch modernisme'],
            functie: ['museum'],
            plaats: {
                adres: [{
                    straat: 'Noord Brabantlaan',
                    huisnummer: '1A',
                }],
            }
        }],
        beschrijving: `
        Het UFO-vormige gebouw is gebouwd door Philips.
        Het is ontworpen door Louis Kalff en Leo de Bever.
        Louis Kalff is sinds 1925 de grafisch vormgever van Philips geweest.
        Hij ontwierp ook het Philips-logo.

        Het huisvestte hun wetenschaps- en technologiemuseum.
        De bezoekers konden er zelf experimenten uitvoeren.
        Het is vergelijkbaar met het museum Technopolis in Mechelen.
        Ik vind het een erg knap initiatief van zulk een bedrijf.
        In 1989 is het museum gesloten.

        Vanaf 2012 deed het gebouw terug dienst als museum.
        Er worden nu geen proeven meer gedaan.
        Er vinden tijdelijke tentoonstellingen rond wetenschap en technologie plaats.

        In 2013 koos de muziekband Kraftwerk het gebouw uit om een concert te geven.
        Een zeer gepaste locatie voor hun door technologie en toekomst geinspireerde electronische muziek.

        Dit bijzonder gebouw had wat mij betreft veel bekender mogen zijn.
        `,
    } as t.tGebouw,
}

export default HetVen as t.tStadsobjectMap<typeof HetVen>