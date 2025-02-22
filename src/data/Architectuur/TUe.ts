import _fns from '../_fns'
import * as t from "./_types"

const TUe = {
    TUe: {
        type: 'wijk',
        wijk: 'TU/e',
        Philips: true, Strijp: undefined, TUe: true,
        versie: [{
            naam: ['TU/e'],
            maak: {
                tijd: undefined,
                ontwerper: [],
                project_url: undefined,
            },
            stijl: [],
        }],
        beschrijving: _fns.multiline(`
            De campus van de universiteit Eindhoven vormt een aangenaam geheel.
            Ze is gelegen aan een oever van het riviertje de Dommel.
            Er is groen en veel open ruimte. Het plan is strak.
            De gebouwen dateren van het einde van de jaren '50 tot nu.
            Ze zijn gebouwd in een stijl die strak, modern en technisch aandoet.
            Dat past dus erg goed bij een technische universiteit.
            `)
    },
    FlyingPins: {
        type: 'kunstwerk',
        // naam: 'Flying Pins',
        wijk: 'TU/e',
        Philips: false,
        Strijp: undefined,
        TUe: false,
        versie: [{
            naam: ['Flying Pins'],
            maak: {
                tijd: 2000,
                ontwerper: ['Claes Oldenburg', 'Coosje van Bruggen'],
                project_url: undefined,
            },
            plaats: [{
                straat: 'John F. Kennedylaan'
            }],
            stijl: ['post-modernisme'],
        }],
        beschrijving: undefined,
    },
    // bron: https://web.tue.nl/cursor/bastiaan/jaargang48/cursor22/achtergrond/special.html
    // bron: Cultuurhistorische verkenning - Technische Universiteit Eindhoven.pdf
    ZwarteDoos: {
        type: 'gebouw',
        wijk: 'TU/e',

        Philips: false,
        Strijp: undefined,
        TUe: true,
        versie: [{
            naam: [{ naam: 'laagbouw Technologie', afkorting: 'T-laag' }],
            maak: {
                tijd: 1962,
                ontwerper: ['OD205'],
                project_url: undefined,
            },
            stijl: [],
            hoogte: undefined,
            functie: ['onderwijs'],
            plaats: {
                adres: [{
                    straat: 'Den Dolech',
                    huisnummer: 2,
                }],
            }
        }, {
            naam: [{ naam: 'Zwarte Doos', afkorting: undefined }],
            maak: {
                tijd: 2006,
                ontwerper: ['Zjak Hofman'],
                project_url: undefined,
            },
            stijl: [],
            hoogte: undefined,
            functie: ['reca', 'cinema', 'evenementen'],
            plaats: [],
        }],
        beschrijving: _fns.multiline(`
            Het gebouw huisde de faculteit Scheikunde Technologie (ST).
            Het grootste deel is gesloopt.
            In het restant, de Zwarte Doos, zijn nu een café, een cinema en een congrescentrum ondergebracht.
        `),
    },
    ObjetMathematique: {
        type: 'kunstwerk',
        wijk: 'TU/e',
        Philips: true,
        TUe: true,
        Strijp: undefined,
        versie: [{
            naam: ['Objet Mathématique'],
            maak: {
                tijd: 1958,
                ontwerper: ['Charles-Édouard Jeanneret-Gris', 'Ianis Xenakis'],
                project_url: undefined,
            },
            plaats: {
                straat: 'Koeveld',
            },
            stijl: [],
        }],
        beschrijving: _fns.multiline(`
            Deze simpele constructie is het ontwerp van de slechtste architect van de 20ste eeuw. In het Nederlands is hij bekend onder zijn pseudoniem de Korbuizer.
            Het ding bestaat uit een constructie van metalen buizen.
            Daartussen hangen 3 driehoekige platen.
            Inspiratieloos kregen deze de drie basiskleuren.
            Een schijn van sofisticatie en mysterie wordt opgeroepen door de gele en de groene symmetrische veelhoek die erin opgehangen zijn.
            Een schijn van gevoeligheid en esthetiek wordt gesuggereerd door een lamp die de tekst "poème électronique" vormt.
            Ze heeft een handgeschreven lettertype.
            Dit vloekt met de kleur van het neon-licht en de elementaire, rechte vormen van de rest van het ding.
            Het ding is zeer simpel, lelijk en heeft geen betekenis.
            Het ding kreeg de naam Objet Mathématique.
            Het markeerde de ingang van het Philips-pavilioen op de wereldtentoonstelling van 1958 in Brussel.
            In dit pavilioen werd de bezoeker vanuit wel 425 luidsprekers aan alle kanten bestookt met willekeurig gekozen geluiden (babygehuil, het geluid van transistoren, een bel,...).
            Deze waren op allerhande manieren waren vervormd.
            Het heette het Poème Électronique.

            Raar moet het in elk geval geweest zijn.

            Het werk was zo onbegrijpelijk slecht dat het publiek ervan uit ging dat ze de schoonheid en betekenis niet begrepen.
            Deze reactie maakte dat hij naast de slechtste ook de meest invloedrijke architect van de 20ste eeuw is geworden.

            Oorspronkelijk was De Korbuizer voor dit ding gevraagd samen te werken met Gerard Rietveld. De Korbuizer weigerde.
            Rietveld is in zijn creativiteit nooit verder gekomen dan het stadium van constructies van rechthoeken in basiskleuren.
            Het is daarom aannemelijk dat het voorstel van De Korbuizer driehoeken te gebruiken tot onwerkbare spanning tussen beiden zou hebben geleid.
            `)
    },
    Vertigo: {
        type: 'gebouw',
        wijk: 'TU/e',
        Philips: false,
        Strijp: undefined,
        TUe: true,
        versie: [{
            naam: [{ naam: 'hoogbouw Technologie', afkorting: 'T-hoog', }],
            maak: {
                tijd: 1961,
                ontwerper: ['Samuel van Embden'],
                project_url: undefined,
            },
            hoogte: undefined,
            stijl: [],
            functie: ['onderwijs'],
            plaats: [],
        }, {
            naam: [{ naam: 'Vertigo', afkorting: undefined, }],
            maak: {
                tijd: 2002,
                ontwerper: ['diederendirrix'],
                project_url: undefined,
            },
            hoogte: undefined,
            stijl: [],
            functie: ['onderwijs'],
            plaats: [],
        }],
        beschrijving: undefined,
    },
    Auditorium: {
        type: 'gebouw', wijk: 'TU/e',
        Philips: false, Strijp: undefined, TUe: true,
        versie: [{
            naam: [{ naam: 'Auditorium', afkorting: undefined }],
            maak: {
                tijd: 1965,
                // S.J. van Embden, J. Choisy
                ontwerper: ['Samuel van Embden', 'Jaques Choisy'],
                project_url: undefined,
            },
            hoogte: undefined,
            stijl: [],
            functie: ['onderwijs'],
            plaats: [{
                adres: [{
                    straat: 'De Zaale',
                    huisnummer: 1,
                }],
            }],
        }],
        beschrijving: undefined,
    },
    KOE: {
        type: 'pavilioen',
        wijk: 'TU/e',
        Philips: false,
        Strijp: undefined,
        TUe: true,
        versie: [{
            naam: [{ naam: 'Kunstobject-Ontmoetingsplaats-Eindhoven', afkorting: 'KOE' }],
            maak: {
                tijd: 2013,
                project_url: undefined,
                ontwerper: [],
            },
            stijl: [],
            plaats: {
                straat: 'Koeveld',
            },
        }],
        beschrijving: undefined
    },
    Atlas: {
        type: 'gebouw',
        // complex: undefined,
        wijk: 'TU/e',
        Philips: false,
        TUe: true,
        Strijp: undefined,
        versie: [{
            naam: [{ naam: 'Hoofdgebouw', afkorting: undefined }],
            maak: {
                tijd: 1963,
                ontwerper: ['Samuel van Embden', 'Jaques Choisy'],
                project_url: undefined,
            },
            hoogte: undefined,
            stijl: [],
            functie: ['onderwijs'],
            plaats: {
                adres: [{
                    straat: 'De Wielen',
                    huisnummer: 6,
                }],
            },
        }, {
            naam: [{ naam: 'Atlas', afkorting: undefined }],
            maak: {
                tijd: 2019,
                ontwerper: ['Team V', 'Van Rossum', 'Valstar Simonis', 'Peutz'],
                project_url: 'https://teamv.nl/project/mainbuilding-tu-e/'
            },
            hoogte: undefined,
            stijl: [],
            functie: ['onderwijs'],
            plaats: [],
        }],
        beschrijving: undefined,
    },
    Wording: {
        type: 'kunstwerk',
        wijk: 'TU/e',
        Philips: false, Strijp: undefined, TUe: true,
        versie: [{
            naam: [{ naam: 'Wording', afkorting: undefined, }],
            maak: {
                ontwerper: ['Piet Killaars'],
                tijd: 1968,
                project_url: undefined,
            },
            stijl: [],
            plaats: { straat: 'Simon Stevinplein' },
        }],
        beschrijving: undefined,
    },
    // bron: https://www.tue.nl/en/our-university/tue-campus/buildings/matrix
    Matrix: {
        type: 'gebouw',
        wijk: 'TU/e',
        Philips: false,
        Strijp: undefined,
        TUe: true,
        versie: [{
            naam: [{ naam: 'hal Fysische Technologie', afkorting: 'FT-hal' }],
            plaats: {},
            maak: {
                ontwerper: ['Samuel van Embden'],
                tijd: 1959,
                project_url: undefined,
            },
            functie: ['onderwijs'],
            hoogte: undefined,
            stijl: [],
        }, {
            naam: [{ naam: 'Matrix', afkorting: undefined }],
            plaats: {},
            maak: {
                // 2014-2018
                tijd: 2018,
                ontwerper: ['inbo architecten'],
                project_url: undefined,
            },
            functie: ['onderwijs'],
            hoogte: undefined,
            stijl: [],
        }],
        beschrijving: undefined,
    },
    Metaforum: {
        type: 'gebouw',
        //complex: undefined,
        wijk: 'TU/e',
        Philips: false,
        Strijp: undefined,
        TUe: true,
        versie: [{
            naam: [{ naam: 'hal Werktuigbouwkunde', afkorting: 'W-hal' }],
            maak: {
                // bron: https://www.ectorhoogstad.com/nl/project/metaforum-eindhoven-university-technology
                ontwerper: ['Samuel van Embden', 'Jacques Choisy'],
                project_url: undefined,
                tijd: 1960,
            },
            functie: ['onderwijs'],
            hoogte: undefined,
            stijl: [],
            plaats: {}
        }, {
            naam: [{ naam: 'Metaforum', afkorting: undefined }],
            maak: {
                // 2008-2012
                tijd: 2012,
                ontwerper: ['Ector Hoogstad Architecten'],
                project_url: 'https://www.ectorhoogstad.com/nl/project/metaforum-eindhoven-university-technology'
            },
            functie: ['onderwijs'],
            hoogte: undefined,
            stijl: [],
            plaats: {},
        }],
        beschrijving: undefined,
    },
    Gemini: {
        type: 'gebouw',
        // naam: 'Gemini',
        // complex: undefined,
        wijk: 'TU/e',
        Philips: false,
        Strijp: undefined,
        TUe: true,
        versie: [{
            naam: [{ naam: undefined, afkorting: 'W-hoog/W-laag' }],
            plaats: {},
            maak: {
                // 1970-1974
                tijd: 1974,
                ontwerper: ['Samuel van Embden'],
                project_url: undefined,
            },
            functie: ['onderwijs'],
            hoogte: undefined,
            stijl: [],
        }, {
            naam: [{ naam: 'Gemini', afkorting: undefined }],
            plaats: {},
            maak: {
                tijd: undefined,
                ontwerper: [],
                project_url: undefined,
            },
            functie: ['onderwijs'],
            hoogte: undefined,
            stijl: [],
        }],
        beschrijving: undefined,
    },
    Neuron: {
        type: 'gebouw',
        // complex: undefined,
        wijk: 'TU/e',
        Philips: false,
        Strijp: undefined,
        TUe: true,
        versie: [{
            naam: [{ naam: 'Transitorium', afkorting: undefined }],
            plaats: {},
            maak: {
                // 1970-1972
                tijd: 1972,
                // bron: https://teamv.nl/project/laplace-education-center-tu-e/
                // bron: https://www.tue.nl/en/our-university/tue-campus/buildings/neuron?_gl=1*uivinh*_up*MQ..*_ga*MTk3NTM5MzQ1OC4xNzMyNzA0MjY4*_ga_JN37M497TT*MTczMjcwNDI2OC4xLjAuMTczMjcwNDI2OC4wLjAuMA..
                ontwerper: ['Samuel van Embden', 'Jacques Choisy'],
                project_url: undefined,
            },
            hoogte: undefined,
            functie: ['computer'],
            stijl: [],
        }, {
            naam: [{ naam: 'Laplacegebouw', afkorting: undefined }],
            plaats: {},
            maak: {
                tijd: undefined,
                ontwerper: [],
                project_url: undefined,
            },
            hoogte: undefined,
            functie: ['computer'],
            stijl: [],
        }, {
            naam: [{ naam: 'Neuron', afkorting: undefined }],
            plaats: {},
            maak: {
                // 2021-2023
                tijd: 2023,
                ontwerper: ['Team V'],
                project_url: 'https://teamv.nl/project/laplace-education-center-tu-e/',
            },
            hoogte: undefined,
            functie: ['onderwijs'],
            stijl: [],
        }],
        beschrijving: _fns.multiline(`
            De oude naam van het gebouw is het "Laplacegebouw".
            Pierre-Simon Laplace was een wiskundige en astronoom uit het einde van de 18de eeuw en het begin van de 19de eeuw.
            Waar ik hem van ken is van de ontwikkeling van het kansrekenen.
            Experten in de wiskunden kennen hem van de vergelijking van Laplace en de Laplace-transformatie.
            In de astronomie verfijnde hij de beschrijving van de banen van de planeten en manen.

            Het gebouw was de computerruimte van de universiteit.

            Dit gebouw huisvest nu de factulteit artificiele intelligentie. Het is daarom hernoemd.
            De naam Neuron verwijst naar een techniek van neurale netwerken binnen de AI.
            Bij deze techniek is geinspireerd op de verbindingen tussen cellen in de hersenen.
            Neuron is een andere naam voor "hersencel".
            `)
    },
    Traverse: {
        type: 'gebouw',
        wijk: 'TUe',
        // complex: 'Driegebouwenplan',
        Philips: false,
        Strijp: undefined,
        TUe: true,
        versie: [{
            naam: [{ naam: 'Bestuursgebouw', afkorting: undefined }],
            plaats: {},
            maak: {
                // bron: Cultuurhistorische verkenning - Technische Universiteit Eindhoven.pdf 
                // aug 1983- mei 1985
                tijd: 1985,
                ontwerper: ['OD205'],
                project_url: undefined,
            },
            stijl: [],
            functie: [],
            hoogte: undefined,
        }, {
            naam: [{ naam: 'Traverse', afkorting: undefined, }],
            plaats: {},
            maak: {
                tijd: undefined,
                ontwerper: undefined,
                project_url: undefined
            },
            stijl: [],
            functie: [],
            hoogte: undefined,
        }],
        beschrijving: undefined,
    },
    IPOgebouw: {
        type: 'gebouw',
        wijk: 'TU/e',
        // complex: 'Driegebouwenplan',
        Philips: false,
        Strijp: undefined,
        TUe: true,
        versie: [{
            naam: [{ naam: 'Instituut voor Perceptie Onderzoek', afkorting: 'IPO-gebouw' }],
            plaats: {},
            maak: {
                tijd: 1985,
                ontwerper: ['OD 205'],
                project_url: undefined,
            },
            stijl: [],
            functie: [],
            hoogte: undefined,
        }],
        beschrijving: undefined,
    },
    FontysPTHS1: {
        type: 'gebouw',
        wijk: 'TU/e',
        Philips: false,
        Strijp: undefined,
        TUe: true,
        versie: [{
            naam: [{ naam: 'Nieuwe Leraren Opleiding', afkorting: undefined }],
            plaats: {},
            maak: {
                tijd: 1984,
                ontwerper: ['OD 205'],
                project_url: undefined,
            },
            stijl: [],
            functie: [],
            hoogte: undefined,
            complex: 'Driegebouwenplan',
        }, {
            naam: [{ naam: 'Fontys', afkorting: undefined }],
            plaats: {},
            maak: {
                tijd: undefined,
                ontwerper: [],
                project_url: undefined,
            },
            stijl: [],
            functie: [],
            hoogte: undefined,
        }],
        beschrijving: undefined,
    },
    Flux: {
        type: 'gebouw',
        wijk: 'TU/e',
        // complex: undefined,
        Philips: false,
        Strijp: undefined,
        TUe: true,
        versie: [{
            naam: [{ naam: 'Flux', afkorting: undefined, }],
            plaats: {},
            maak: {
                tijd: 2014,
                ontwerper: ['Architectuurstudio Herman Hertzberger'],
                project_url: 'https://www.ahh.nl/index.php/nl/projecten2/9-onderwijs/20-faculteit-technische-natuurkunde-en-electrical-engineering-flux-tu-eindhoven',
            },
            stijl: [],
            functie: [],
            hoogte: undefined,
        }],
        beschrijving: undefined,
    },
    Qubit: {
        type: 'gebouw',
        wijk: 'TU/e',
        // complex: undefined,
        Philips: false,
        Strijp: undefined,
        TUe: {
            naam: {
                oud: undefined,
                nieuw: 'Qubit',
            },
            gebruik: { faculteit: 'Technische Natuurkunde', afdeling: 'Coherence and Quantum Technology' },
        },
        versie: [{
            naam: [{ naam: 'Qubit', afkorting: undefined, }],
            plaats: {},
            maak: {
                tijd: 2023,
                ontwerper: ['diederendirrix'],
                project_url: 'https://www.diederendirrix.nl/nl/projecten/qubit-tu-e/'
            },
            stijl: [],
            functie: [],
            hoogte: undefined,
        }],
        beschrijving: undefined,
    },
    Cascade: {
        type: 'gebouw',
        wijk: 'TU/e',
        Philips: false,
        Strijp: undefined,
        TUe: {
            naam: {
                oud: undefined,
                nieuw: 'Cascade',
            },
            gebruik: undefined,
        },
        versie: [{
            naam: ['Cascade'],
            plaats: {},
            maak: {
                tijd: 1999,
                ontwerper: ['Rudy Uytenhaak'],
                project_url: 'https://www.uytenhaak.nl/project/eindhoven-cascade/',
            },
            functie: [],
            hoogte: undefined,
            stijl: [],
        }],
        beschrijving: _fns.multiline(`
            Een apart ontwerp en toch geslaagd. Ik vind het knap als iemand dat kan.
            `)
    },
    Cyclotron: {
        type: 'gebouw',
        wijk: 'TU/e',
        Philips: true, Strijp: undefined, TUe: true,
        versie: [{
            naam: ['Cyclotron'],
            plaats: {},
            maak: {
                tijd: 2003,
                ontwerper: ['Erik Knippers'],
                project_url: 'https://www.knippers.archi/new-page-39',
            },
            functie: [],
            hoogte: undefined,
            stijl: [],
        }],
        beschrijving: _fns.multiline(`
            Een cyclotron of deeltjesversneller is een instrument voor onderzoek naar kernfysica.
            Gift van het NatLab aan de hogeschool in 1966.

            In 2003 werd een nieuwbouw gezet.
            Het ontwerp ziet er technologisch en futuristisch uit.
            Het past goed bij het apparaat dat erin staat.
        `),
    },
    Ketelhuis: {
        type: 'gebouw',
        wijk: 'TU/e',
        Philips: false, Strijp: undefined, TUe: true,
        versie: [{
            naam: [{ naam: 'Ketelhuis', afkorting: undefined }],
            plaats: {},
            maak: {
                tijd: 1968,
                ontwerper: ['Samuel van Embden'],
                project_url: '',
            },
            functie: [],
            stijl: [],
            hoogte: undefined,
        }, {
            naam: [{ naam: 'Ceres', afkorting: undefined }],
            plaats: {},
            maak: {
                // bron: https://www.diederendirrix.nl/nl/projecten/ketelhuis-ceres/
                tijd: 2012,
                ontwerper: ['diederendirrix'],
                project_url: 'https://www.diederendirrix.nl/nl/projecten/ketelhuis-ceres/',
            },
            functie: [],
            stijl: [],
            hoogte: undefined,
        }],
        beschrijving: undefined,
    },
} as const

export default TUe as t.tStadsobjectMap<typeof TUe>