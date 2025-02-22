import _fns from '../_fns'
import * as t from "./_types"

const StrijpR = {
    StrijpR: {
        type: 'wijk', wijk: 'Strijp R',
        Philips: true, Strijp: 'R', TUe: false,
        versie: [{
            naam: ['Strijp R'],
            maak: {
                ontwerper: ['diederendirrix'],
                tijd: 1946,
                project_url: 'https://www.diederendirrix.nl/nl/projecten/stedenbouwkundig-plan-strijp-r/',
            },
            stijl: ['post-post-modernisme'],
        }],
        // https://fabriekofiel.com/strijp-r/
        beschrijving: _fns.multiline(`
            Deze wijk was oorspronkelijk een fabrieksterrein van Philips.
            Na de bouw van Strijp S in de jaren '20, geraakte de economie in de jaren '30 in het slop
            Na de Tweede Wereldoorlog steeg de vraag opnieuw.
            Philips begon met de uitbreiding naar de terreinen Strijp T en Strijp R.
            Hier werden voornamelijk beeldbuizen geproduceerd.
            In de jaren '80 werd de massaproductie hier stopgezet.
            De ontwikkeling en testproductie van beeldbuizen bleef hier bestaan.
            In de jaren '00 was het over and out voor deze site. De schuldige: de flatscreen-TV.
            De wijk werd vanaf 2010 omgebouwd tot woonwijk. De straatnamen verwijzen ernaar.
            De wijk werd ontworpen door de architecten DiederenDirrix.
        `)
    },
    DiodehofPersglashofAnodehofBeeldbuisring: {
        type: 'gebouw', wijk: 'Strijp R',
        Philips: true, Strijp: 'R',  TUe: false,
        versie: [{
            naam: [],
            maak: {
                tijd: 2013,
                ontwerper: ['diederendirrix'],
                project_url: undefined,
            },
            plaats: {
                adres: [{
                    straat: 'Diodehof',
                    huisnummer: undefined,
                }, {
                    straat: 'Persglashof',
                    huisnummer: undefined,
                } , {
                    straat: 'Anodehof',
                    huisnummer: undefined,
                }, {
                    straat: 'Beeldbuisring',
                    huisnummer: undefined,
                }],
            },
            stijl: ['post-post-modernisme'],
            functie: ['woning'],
            hoogte: undefined,
        }],
        beschrijving: undefined,
    },
    // 
    RFPortiersloge: {
        type: 'gebouw', wijk: 'Strijp R',
        Philips: true, Strijp: 'R', TUe: false,
        versie: [{
            naam: ['RF'],
            maak: {
                tijd: 1948,
                ontwerper: [],
                project_url: undefined,
            },
            hoogte: undefined,
            plaats: [],
            functie: ['woning'],
            stijl: ['functioneel'],
        }, {
            naam: ['RF Portiersloge'],
            maak: {
                tijd: 2013,
                ontwerper: ['Eek en Dekkers'],
                project_url: 'https://eekendekkers.com/project/rf-portiersloge/',
            },
            hoogte: undefined,
            plaats: [],
            functie: ['woning'],
            stijl: ['high-tech-modernisme']
        }],
        beschrijving: undefined,
    },
    RKKeramiekfabriek: {
        type: 'gebouw', wijk: 'Strijp R',
        Philips: true, Strijp: 'R', TUe: false,
        versie: [{
            naam: ['RK Keramiekfabriek'],
            // https://fabriekofiel.com/strijp-r/
            maak: {
                ontwerper: [],
                tijd: 1946,
                project_url: undefined,
            },
            hoogte: undefined,
            functie: ['fabriek'],
            stijl: ['functioneel'],
            plaats: [],
        }, {
            naam: ['Studio Piet Hein Eek'],
            maak: {
                ontwerper: [],
                tijd: 2010,
                project_url: undefined,
            },
            hoogte: undefined,
            functie: ['reca', 'hotel', 'kantoor', 'winkel'],
            stijl: [],
            plaats: [],
        }],
        beschrijving: _fns.multiline(`
            Hier werd het magnetisch keramiek voor radio- en TV-componentent geproduceerd.
            
            Nederlands interieurontwerper Piet Hein Eek bouwde dit fabrieksgebouw om tot zijn studio.
            Hij is bekend geworden door het vervaardigen van meubels met van herbruikte voorwerpen.
            Hij was de eerste die het 
            Deze omvat onder andere een kunstgalerij, een winkel en een hotel.
            `)
    },
    UrbanVillas: {
        type: 'gebouw',
        wijk: 'Strijp R',
        // veld: 7.2,
        Philips: false, Strijp: 'R', TUe: false,
        versie: [{
            naam: ['Urban Villas'],
            maak: {
                tijd: 2016,
                ontwerper: ['Houben / van Mierlo Architecten'],
                project_url: 'https://www.houbenvanmierlo.nl/werk/urban-villas/',
            },
            hoogte: undefined,
            plaats: {
                adres: [{
                    straat: 'Getterhof',
                    huisnummer: t.$AdresHuisnummerAll,
                }]
            },
            functie: ['woning'],
            stijl: [],
        }],
        beschrijving: undefined,
    },
    Beeldbuisring17: {
        type: 'gebouw', wijk: 'Strijp R',
        Strijp: 'R', Philips: false, TUe: false,
        versie: [{
            naam: ['Beeldbuisring 17'],
            plaats: [{
                adres: [{
                    straat: 'Beeldbuisring',
                    huisnummer: 17,
                }],
            }],
            maak: {
                tijd: undefined,
                ontwerper: [],
                project_url: undefined,
            },
            hoogte: undefined,
            functie: ['woning'],
            stijl: [],
        }],
        beschrijving: undefined,
    },
    // architracks
    Beeldbuisring19: {
        type: 'gebouw', wijk: 'Strijp R',
        Philips: false, Strijp: 'R', TUe: false,
        versie: [{
            naam: ['Beeldbuisring 19'],
            plaats: [{
                adres: [{
                    straat: 'Beeldbuisring',
                    huisnummer: 19,
                }],
            }],
            maak: {
                tijd: undefined,
                ontwerper: ['Houben / van Mierlo Architecten'],
                project_url: 'https://www.houbenvanmierlo.nl/werk/vrijstaande-woning-boskavel/',
            },
            hoogte: undefined,
            functie: ['woning'],
            stijl: [],
        }],
        beschrijving: undefined,
    },
    Deflectiespoelstraat88: {
        type: 'gebouw', wijk: 'Strijp R',
        Philips: false, Strijp: 'R', TUe: false,
        versie: [{
            naam: [],
            plaats: {
                adres: [{
                    straat: 'Deflectiespoelstraat',
                    huisnummer: 88,
                }]
            },
            maak: {
                tijd: 2021,
                ontwerper: [],
                project_url: undefined,
            },
            hoogte: undefined,
            stijl: [],
            functie: ['woning'],
        }],
        beschrijving: undefined,
    } as t.tGebouw,
    // architracks
    Veld6: {
        type: 'gebouw', wijk: 'Strijp R',
        Philips: false, Strijp: 'R', TUe: false,
        // veld: 6,
        versie: [{
            naam: ['Veld 6'],
            maak: {
                tijd: 2020,
                ontwerper: ['Happel Cornelisse Verhoeven Architecten'],
                project_url: 'https://hcva.nl/werk/strijp-r',
            },
            plaats: [{
                //  Schaduwmaskerstraat 1-75 en 8-26, Maskerdooshof 1-11 en 2-8
                adres: [{
                    straat: 'Schaduwmaskerstraat',
                    huisnummer: undefined,
                }, {
                    straat: 'Maskerdooshof',
                    huisnummer: undefined,
                }],
            }],
            stijl: [],
            functie: ['woning'],
            hoogte: undefined,
        }],
        beschrijving: undefined,
    },
    // architracks
    Strowoningen_Strijp_R: {
        type: 'gebouw', wijk: 'Strijp R',
        Philips: false, Strijp: 'R', TUe: false,
        versie: [{
            naam: ['Strowoningen Strijp R'],
            maak: {
                tijd: 2016,
                ontwerper: ['architecten|en|en'],
                project_url: 'https://architecten-en-en.nl/project/stro-woningen-strijp-r/',
            },
            stijl: [],
            functie: ['woning'],
            hoogte: undefined,
            plaats: [{
                adres: [{ straat: 'Kathodelaan', huisnummer: { even: false, reeks: [1, 9] } }],
            }],
        }],
        beschrijving: undefined,
    },
    HuisR: {
        type: 'gebouw', wijk: 'Strijp R',
        Philips: false, Strijp: 'R', TUe: false,
        versie: [{
            naam: ['Huis R'],
            maak: {
                // https://www.archdaily.com/977928/house-r-eek-en-dekkers
                tijd: 2021,
                ontwerper: ['Eek en Dekkers'],
                project_url: 'https://eekendekkers.com/project/huis-r-eindhoven/',
            },
            hoogte: undefined,
            functie: ['woning'],
            stijl: [],
            plaats: {
                adres: [{
                    straat: 'Elburglaan',
                    huisnummer: 17
                }]
            },
        }],
        beschrijving: undefined
    } as t.tGebouw,
    Elburglaan35: {
        type: 'gebouw',
        wijk: 'Strijp R',
        Philips: false, Strijp: 'R', TUe: false,
        versie: [{
            naam: ['Elburglaan 35'],
            maak: {
                tijd: undefined,
                ontwerper: [],
                project_url: undefined,
            },
            plaats: [{
                adres: [{
                    straat: 'Elburglaan',
                    huisnummer: 35,
                }]
            }],
            hoogte: undefined,
            functie: ['woning'],
            stijl: []
        }],
        beschrijving: undefined,
    },
    // architracks
    // architectuurcentrumeindhoven wandeling
    Atlashuis: {
        type: 'gebouw',
        wijk: 'Strijp R',
        Philips: false, Strijp: 'R', TUe: false,
        versie: [{
            naam: ['Atlashuis'],
            maak: {
                tijd: 2016,
                ontwerper: ['Monadnock'],
                project_url: 'https://monadnock.nl/catalogus/atlas-huis/',
            },
            plaats: {
                adres: [{
                    straat: 'Elburglaan',
                    huisnummer: 23,
                }],
            },
            functie: ['woning'],
            stijl: ['gestilleerde fantasie'],
            hoogte: undefined,
        }],
        beschrijving: 'Een aparte stijl. Wat mij betreft mogen meer huizen zo origineel ontworpen zijn. Beoordeling: *****'
    },
    // architectuurcentrumeindhoven wandeling
    VillaFiftyFifty: {
        type: 'gebouw', wijk: 'Strijp R',
        Philips: false, Strijp: 'R', TUe: false,
        versie: [{
            naam: ['Villa Fifty Fifty'],
            maak: {
                // https://studioninedots.nl/project/villa-fifty-fifty/
                // Design-Comletion: 2018-2020
                tijd: 2020,
                ontwerper: ['Studioninedots'],
                project_url: 'https://studioninedots.nl/project/villa-fifty-fifty/',
            },
            plaats: {
                adres: [{
                    straat: 'Elburglaan',
                    huisnummer: 35,
                }],
            },
            functie: ['woning'],
            stijl: ['origineel modernisme'],
            hoogte: undefined,
        }],
        beschrijving: 'Dit metalen huis heeft de naam te danken aan de verdeling van interieur en exterieur. Het heeft een binnenkoer en een toren. Beoordeling: *****',
    },
    // onbekend: architect
    Elburglaan7: {
        type: 'gebouw', wijk: 'Strijp R',
        Philips: true, Strijp: 'R', TUe: false,
        versie: [{
            naam: ['Elburglaan 7'],
            plaats: [{
                adres: [{
                    straat: 'Elburglaan',
                    huisnummer: 7,
                }],
            }],
            maak: {
                tijd: undefined,
                ontwerper: [],
                project_url: undefined,
            },
            hoogte: undefined,
            stijl: [],
            functie: [],
        }],
        beschrijving: undefined,
    },
} as const

export default StrijpR as t.tStadsobjectMap<typeof StrijpR>