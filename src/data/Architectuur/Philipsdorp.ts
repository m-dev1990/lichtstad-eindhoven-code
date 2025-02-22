import _fns from '../_fns'
import * as t from "./_types"

const Philipsdorp = {
    PSVStadion: {
        type: 'gebouw', wijk: 'Philipsdorp',
        Philips: true, Strijp: undefined, TUe: false,
        versie: [{
            naam: ['PSV-stadion'],
            functie: ['stadion'],
            stijl: ['high-tech modernisme'],
            hoogte: undefined,
            maak: {
                tijd: 1988,
                ontwerper: ['Van den Pauwert'],
                project_url: undefined,
            },
            plaats: [{
                adres: {
                    straat: 'Frederiklaan',
                    huisnummer: 6,
                },
            }],
        }, {
            naam: [],
            functie: [],
            hoogte: undefined,
            maak: {
                tijd: 2002,
                ontwerper: ['Toon van Aken'],
                project_url: undefined,
            },
            stijl: ['high-tech modernisme'],
            plaats: {}
        }],
        // https://sportgeschiedenis.nl/sporten/voetbal/een-voetbaleiland-in-eindhoven-de-geschiedenis-van-het-philips-stadion/
        beschrijving: _fns.multiline(`
            In 1911 werd hier door Philips de eerste voetbalclub opgericht.
            Ik had het oude truitje wel willen zin: geel en zwart met een gloeilamp op de borst.
            Zeer onfair vond men dit in andere voetbalclubs:
            deze club wordt gesubsidieerd door een bedrijf. Wij moeten onze organisatie uit eigen zak betalen. Hoe kunnen we daar tegenop?
            Hoe is de voetbalwereld veranderd (al is de klacht niet helemaal verdwenen).
            In 1913 wordt de club hernoemd naar PSV of Philips Sportvereeniging.
            Enkel Philips-werkers werd toegelaten tot het team.
            In 1916 ontstond het eerste stadion: een houte tribune naast het veld.
            Gedurende de 20ste eeuw werden de stadions door grotere opgevolgd.
            Het huidige stadion dateert van 1988.
            In het jaar 2002 zijn daar enorme zonneschermen aan toegevoegd.
            Ze doen denken aan een insectachtig alien robotmonster dat continu dreigt de vredige wijk Philipsdorp te gaan verorberen.
            Ik heb geen idee waarom de architect dat het meest passende ontwerp vond.

            Weetje:
            In 1916, niet in dit stadion, gebruikte Philips ook zijn kunde om de eerste verlichte voetbalmatch te organiseren.
            Nog steeds houdt een tak van het bedrijf zich bezig stadionverlichting.
            `),
    },
    Philipsdorp: {
        type: 'wijk', wijk: 'Philipsdorp',
        Philips: true, Strijp: undefined, TUe: false,
        versie: [{
            naam: ['Philipsdorp'],
            maak: {
                ontwerper: [],
                tijd: 1910,
                project_url: undefined,
            },
            stijl: [],
            plaats: [],
        }],
        beschrijving: _fns.multiline(`
            Deze wijk werd gebouwd in 1910.
            De naam spreekt voor zich voor wie en waarvoor.
            De houding van Philips tegenover haar arbeiders was erg dubbel.
            Enerzijds zorgde het bedrijf voor haar personeel door kwalitatieve woningen te voorzien.
            Ze hadden gas- en waterleidingen en riolering. Dit was toen uitzonderlijk.
            In de rest van Eindhoven zat men nog met open riolen.
            De familie Philips dient dus de erkenning te krijgen voor deze grote, sociale inspanningen.
            Anderzijds had het beleid een grote keerzijde. Het bedrijf had het personeel zeer sterk onder controle: wie vakbondsacties plande, werd uit zijn huis gezet.
            `),
    },
    /*
    PhilipsdorpJohannastraat: {
        type: 'straat',
        naam: 'Johannastraat',
        wijk: 'Philipsdorp',
    },
    PhilipsdorpHubertastraat: {
        type: 'straat',
        naam: 'Hubertastraat',
        wijk: 'Philipsdorp',
    },
    PhilipsdorpHenriettestraat: {
        type: 'straat',
        naam: 'Henriëttestraat',
        wijk: 'Philipsdorp',
    },
    */
    HartjeEindhoven: {
        type: 'gebouw', wijk: 'Philipsdorp',
        Philips: false, Strijp: undefined, TUe: false,
        versie: [{
            naam: ['Hartje Eindhoven'],
            // bron: https://nl.wikipedia.org/wiki/Stadionkwartier_(Eindhoven)
            // bron: https://www.galleo.co/project/stadionkwartier-hartje-eindhoven
            maak: {
                tijd: 2012,
                ontwerper: ['Vermeulen van Aken Architectuur'],
                project_url: undefined,
            },
            hoogte: undefined,
            plaats: [{
                adres: {
                    straat: 'Frederikstraat',
                    huisnummer: undefined,
                },
            }],
            stijl: [],
            functie: ['woning'],
        }],
        beschrijving: _fns.multiline(`
            Dit is één complex. Eindhoven valt op voor haar stijlvolle architectuur. Dit is een van de weinige gebouwen die wat mij betreft best terug gesloopt mogen worden.
            Enerzijds bestaat het gebouw uit meerdere types gevels.
            Toch is er genoeg samenhang dat men aanvoelt dat nog steeds dat het tot hetzelfde gebouw behoort.
            Ze verschillen te veel van elkaar om harmonieus te zijn en ze horen te duidelijk bij elkaar om als aparte ontwerpen tot hun recht te komen.
            Daarnaast maken de gevels zelf ook geen indruk.
            Het oorspronkelijke plan voorzag een uniforme stijl. Achteraf wijzigden de wensen en heeft men dit plan dan aangepast naar meer verscheidenheid.
            Dit versterkt mijn aanvoelen dat er weinig aandacht is besteed aan het uiteindelijke ontwerp.
            
            De namen van de gebouwen vind ik ook al goedkoop en sentimenteel. Het complex heet Hartje Eindhoven, hoewel het niet in het centrum ligt.
            Elk sub-gebouw is vernoemd naar een stad: Hartje Antwerpen, Hartje Gent,... maar er is niks dat het gebouw verder iets van het karakter van die stad geeft.
            `),
    }
} as const

export default Philipsdorp as t.tStadsobjectMap<typeof Philipsdorp>