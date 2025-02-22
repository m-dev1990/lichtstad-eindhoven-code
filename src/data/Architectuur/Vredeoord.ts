import * as t from "./_types";
import _fns from "../_fns";

const Vredeoord = {
    // https://www.architectuurcentrumeindhoven.nl/archief/achtergrondartikel-kantoor-philips-nederland/
    VB: {
        type: 'gebouw', wijk: 'Vredeoord',
        Philips: true, Strijp: undefined, TUe: false,
        versie: [{
            naam: [{ naam: 'Vredeoord B', afkorting: 'VB' }],
            plaats: {
                adres: {
                    straat: 'Boschdijk',
                    huisnummer: 525,
                },
            },
            maak: {
                tijd: 1964,
                ontwerper: ['Roosenburg, Verhave, Luyt, de Jongh'],
                project_url: undefined,
            },
            hoogte: 65,
            stijl: [],
            functie: ['kantoor'],
        }, {
            naam: [],
            plaats: {},
            maak: {
                tijd: 2006,
                ontwerper: [],
                project_url: undefined,
            },
            hoogte: undefined,
            stijl: [],
            functie: [],
        }],
        beschrijving: _fns.multiline(`
            Het was lange tijd de hoofdzetel van Philips Nederland. De naam VB staat voor Vredeoord B.

            Ik vind het heel hard lijken op de BP Building in Antwerpen.
            Als het een van het ander is afgekeken, dan waren wij Antwerpenaren eerst <dikke-nek-emoji>.`),
    },
    // architracks, project site
    CabinsInTheWood: {
        type: 'gebouw', wijk: 'Vredeoord',
        Philips: false, Strijp: undefined, TUe: false,
        versie: [{
            naam: ['Cabins in the Wood'],
            plaats: {
                adres: {
                    straat: 'Loofhout',
                    // architracks: huisnummer 1 tot 11
                    huisnummer: { reeks: [1, 11], },
                },
            },
            maak: {
                // < architracks
                tijd: 2021,
                ontwerper: ['mulderendevries architecten'],
                project_url: 'https://mulderendevries.nl/architecten/cabins-in-the-wood/'
            },
            hoogte: undefined,
            stijl: [],
            functie: ['woning'],
        }],
        beschrijving: undefined,
    },
    // architracks
    Douglashout1: {
        type: 'gebouw', wijk: 'Vredeoord',
        Philips: false, Strijp: undefined, TUe: false,
        versie: [{
            naam: [],
            plaats: {
                adres: [{
                    straat: 'Douglashout',
                    // < architracks 1-67
                    huisnummer: 1,
                }],
            },
            maak: {
                tijd: 2020,
                ontwerper: ['Architectenbureau Visser en Bouwman'],
                project_url: undefined,
            },
            functie: ['woning', 'gezondheidscentrum'],
            stijl: [],
            hoogte: undefined,
        }],
        beschrijving: undefined,
    } as t.tGebouw,
} as const

export default Vredeoord as t.tStadsobjectMap<typeof Vredeoord>