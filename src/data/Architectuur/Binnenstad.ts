import _fns from '../_fns'
import fns from '../_fns'
import * as t from './_types'

const Binnenstad = {
    CentraalStation: {
        type: 'gebouw',
        wijk: 'Binnenstad',
        Philips: false, Strijp: undefined, TUe: false,
        // bron: https://www.eindhovenfotos.nl/2/ns_station_eindhoven.html
        versie: [{
            naam: ['Centraal Station Eindhoven'],
            plaats: [{
                adres: {
                    straat: 'Stationsplein',
                    huisnummer: undefined,
                },
            }],
            hoogte: 25,
            maak: {
                tijd: 1956,
                ontwerper: ['Koen van der Gaast'],
                project_url: undefined,
            },
            functie: ['station'],
            stijl: ['klassiek modernisme'],
        }],
        beschrijving: undefined,
    } as t.tGebouw,
    CentraalStationStationspassage: {
        type: 'gebouw',
        wijk: 'Binnenstad',
        Philips: false, Strijp: undefined, TUe: false,
        versie: [{
            naam: ['Passage Centraal Station'],
            hoogte: undefined,
            maak: {
                // https://architectenweb.nl/nieuws/artikel.aspx?id=42180
                tijd: 2017,
                ontwerper: ['Arcadis'],
                project_url: 'https://www.arcadis.com/nl-be/projects/europe/netherlands/het-licht-van-eindhoven-cs-schijnt-op-de-spoorzone',
            },
            plaats: [{ object: 'CentraalStation' }],
            stijl: ['neo-futurisme'],
            functie: ['station'],
        }],
        beschrijving: undefined,
    } as t.tGebouw,
    CentraalStationVogeltrek: {
        type: 'kunstwerk',
        wijk: 'Binnenstad',
        Philips: false, Strijp: undefined, TUe: false,
        versie: [{
            naam: ['Vogeltrek'],
            maak: {
                ontwerper: ['Lex Horn'],
                // bron tijd: https://nl.wikipedia.org/wiki/Station_Eindhoven_Centraal
                tijd: 1955,
                project_url: undefined,
            },
            plaats: [{ object: 'Centraal Station' }],
            stijl: ['figuratief modernisme'],
        }],
        beschrijving: 'Ze symboliseren de drang van de mens om te reizen.',
    } as t.tKunstwerk,
    CentraalStationReliefWestzijde: {
        type: 'kunstwerk',
        wijk: 'Binnenstad',
        Philips: false, Strijp: undefined, TUe: false,
        versie: [{
            naam: ['Ik kom... ik ga'],
            maak: {
                // https://www.architectuurcentrumeindhoven.nl/archief/spoorwegicoon-achtergrondartikel-omd-2016/
                ontwerper: ['Willy Mignot'],
                tijd: 1957,
                project_url: undefined,
            },
            plaats: [{ object: 'Centraal Station' }],
            stijl: ['figuratief modernisme'],
        }],
        beschrijving: 'Aan de inkom staat: Ik kom | Aan de uitgang: Ik ga',
    } as t.tKunstwerk,
    Vestdijktunnel: {
        type: 'weg', wijk: 'Binnenstad',
        Philips: false, Strijp: undefined, TUe: false,
        versie: [{
            naam: ['Vestdijktunnel'],
            maak: {
                tijd: 1952,
                // bron ontwerper: https://www.architectuurcentrumeindhoven.nl/archief/spoorwegicoon-achtergrondartikel-omd-2016/
                ontwerper: ['Sybolt van Ravesteyn'],
                project_url: undefined,
            },
            plaats: [],
            stijl: [],
        }],
        beschrijving: undefined,
    } as t.tWeg,
    Vestdijktunnel_Handhoven: {
        type: 'kunstwerk', wijk: 'Binnenstad',
        Philips: false, Strijp: undefined, TUe: false,
        versie: [{
            naam: ['Vestdijktunnel'],
            maak: {
                tijd: 2020,
                ontwerper: ['Studio Giftig'],
                project_url: 'https://studiogiftig.nl/portfolio_page/handhoven/',
            },
            plaats: {
                object: 'Vestdijktunnel',
            },
            stijl: [],
        }],
        beschrijving: undefined,
    } as t.tKunstwerk,
    Vestdijktunnel_DeNijverheidVanEindhoven: {
        // https://www.spoorbeeld.nl/databank/nijverheid-van-eindhoven
        type: 'kunstwerk', wijk: 'Binnenstad',
        Philips: false, Strijp: undefined, TUe: false,
        versie: [{
            naam: ['De Nijverheid van Eindhoven'],
            maak: {
                tijd: 1953,
                ontwerper: ['Joop Hekman'],
                project_url: undefined,
            },
            plaats: [{ object: 'Vestdijktunnel' }],
            stijl: ['figuratief modernisme'],
        }],
        beschrijving: undefined,
    } as t.tKunstwerk,
    Vestdijktunnel_DeNijverheidVanEindhoven_HetVerkeer: {
        type: 'kunstwerk', wijk: 'Binnenstad',
        Philips: false, Strijp: undefined, TUe: false,
        versie: [{
            naam: ['Het Verkeer'],
            maak: {
                tijd: 1953,
                ontwerper: ['Joop Hekman'],
                project_url: undefined,
            },
            plaats: [{ object: 'DeNijverheidVanEindhoven', }],
            stijl: ['figuratief modernisme'],
        }],
        beschrijving: 'Een vrouw met een wiel',
    } as t.tKunstwerk,
    Vestdijktunnel_DeNijverheidVanEindhoven_HetJongeBloeiendeEindhoven: {
        type: 'kunstwerk', wijk: 'Binnenstad',
        Philips: false, Strijp: undefined, TUe: false,
        versie: [{
            naam: ['Het Jonge Bloeiende Eindhoven'],
            maak: {
                tijd: 1953,
                ontwerper: ['Joop Hekman'],
                project_url: undefined,
            },
            plaats: [{ object: 'DeNijverheidVanEindhoven',}],
            stijl: ['figuratief modernisme'],
        }],
        beschrijving: 'Een moeder met twee kinderen',
    } as t.tKunstwerk,
    Vestdijktunnel_DeNijverheidVanEindhoven_DeHandel: {
        type: 'kunstwerk', wijk: 'Binnenstad',
        Philips: false, Strijp: undefined, TUe: false,
        versie: [{
            naam: ['De Handel'],
            maak: {
                tijd: 1953,
                ontwerper: ['Joop Hekman'],
                project_url: undefined,
            },
            plaats: [{ object: 'DeNijverheidVanEindhoven', }],
            stijl: ['figuratief modernisme'],
        }],
        beschrijving: 'Mercurius met zijn gevleugelde helm en slangenstaf',
    } as t.tKunstwerk,
    Vestdijktunnel_DeNijverheidVanEindhoven_HetGeluid: {
        type: 'kunstwerk', wijk: 'Binnenstad',
        Philips: false, Strijp: undefined, TUe: false,
        versie: [{
            naam: ['Het Geluid'],
            maak: {
                tijd: 1953,
                ontwerper: ['Joop Hekman'],
                project_url: undefined,
            },
            plaats: [{ object: 'DeNijverheidVanEindhoven', }],
            stijl: ['figuratief modernisme'],
        }],
        beschrijving: 'Een vrouw met een schelp aan haar oor',
    } as t.tKunstwerk,
    Vestdijktunnel_DeNijverheidVanEindhoven_DeTabak: {
        type: 'kunstwerk', wijk: 'Binnenstad',
        Philips: false, Strijp: undefined, TUe: false,
        versie: [{
            naam: ['De Tabak'],
            maak: {
                tijd: 1953,
                ontwerper: ['Joop Hekman'],
                project_url: undefined,
            },
            plaats: [{ object: 'DeNijverheidVanEindhoven', }],
            stijl: ['figuratief modernisme'],
        }],
        beschrijving: 'Een man gekleed in lendendoek, staand naast een tabaksplant',
    } as t.tKunstwerk,
    Vestdijktunnel_DeNijverheidVanEindhoven_DeTextiel: {
        type: 'kunstwerk', wijk: 'Binnenstad',
        Philips: false, Strijp: undefined, TUe: false,
        versie: [{
            naam: ['De Textiel'],
            maak: {
                tijd: 1953,
                ontwerper: ['Joop Hekman'],
                project_url: undefined,
            },
            plaats: [{ object: 'DeNijverheidVanEindhoven', }],
            stijl: ['figuratief modernisme'],
        }],
        beschrijving: 'Een vrouw met een lap textiel in haar hand',
    } as t.tKunstwerk,
    DeBijenkorf: {
        type: 'gebouw', wijk: 'Binnenstad',
        Philips: false, Strijp: undefined, TUe: false,
        versie: [{
            naam: ['De Bijenkorf'],
            maak: {
                tijd: 1969,
                ontwerper: ['Gio Ponti'],
                project_url: undefined,
            },
            plaats: [{
                adres: {
                    straat: 'Piazza',
                    huisnummer: 1,
                },
            }],
            hoogte: undefined,
            stijl: ['origineel modernisme'],
            functie: ['winkel']
        }],
        beschrijving: undefined,
    } as t.tGebouw,
    BeursgebouwEnKantoren: {
        type: 'gebouw', wijk: 'Binnenstad',
        Philips: false, Strijp: undefined, TUe: false,
        versie: [{
            naam: ['Beursgebouw en kantoren'],
            maak: {
                tijd: 1993,
                ontwerper: ['OD205', 'Dirrix van Wylick'],
                project_url: undefined,
            },
            plaats: [{
                adres: {
                    groep: true,
                    straat: 'Lardinoisstraat',
                    even: undefined,
                    huisnummer: [1, 2],
                },
            }],
            hoogte: undefined,
            stijl: ['international style'],
            functie: ['kantoor'],
        }],
        beschrijving: undefined,
    } as t.tGebouw,
    TheStudentHotel: {
        type: 'gebouw', wijk: 'Binnenstad',
        Philips: false, Strijp: undefined, TUe: false,
        versie: [{
            naam: ['The Student Hotel'],
            maak: {
                tijd: 2016,
                ontwerper: ['OZ', 'Cie.'],
                project_url: undefined,
            },
            plaats: [{
                adres: {
                    straat: 'Stationsplein',
                    huisnummer: 1,
                },
            }],
            hoogte: 80,
            stijl: ['post-post-modernisme'],
            functie: ['hotel']
        }],
        beschrijving: undefined,
    } as t.tGebouw,
    KennedyBusinessCentre: {
        type: 'gebouw', wijk: 'Binnenstad',
        Philips: false, Strijp: undefined, TUe: false,
        versie: [{
            naam: ['Kennedy Business Centre'],
            maak: {
                tijd: 2003,
                ontwerper: ['Van Aken'],
                project_url: undefined,
            },
            plaats:[{
                adres: {
                    straat: 'Kennedyplein',
                    huisnummer: undefined,
                }
            }],
            hoogte: 83,
            stijl: ['international style'],
            functie: ['kantoor'],
        }],
        beschrijving: undefined,
    } as t.tGebouw,
    TheBlob: {
        type: 'gebouw', wijk: 'Binnenstad',
        Philips: false, Strijp: undefined, TUe: false,
        versie: [{
            naam: ['The Blob'],
            maak: {
                tijd: 2010,
                ontwerper: ['Studio Fuksas'],
                project_url: undefined,
            },
            plaats: [{
                adres: {
                    straat: 'Nieuwe Emmasingel',
                    huisnummer: 2,
                },
            }],
            hoogte: undefined,
            stijl: ['blobitectuur'],
            functie: ['winkel', 'reca'],
        }],
        beschrijving: fns.multiline(`De lichttoren is het embleem van Eindhoven.
            Een kenmerkend gebouw waarmee Philips zijn positie in de stad duidelijk maakte.
            Het was zichtbaar bij het buitenstappen van het Centraal Station.
            
            De architect had dan ook de volgende voorwaarde gekregen: zorg dat dit zicht bewaard blijft.
            Daar trok hij zich niets van aan. Hij was een bekend architect, dus hij hoefde dat niet.
            Dan hopen dat hij er iets voor zet dat op zijn minst de moeite waard is om naar te kijken.
            Wat zette hij ervoor? Een heuse "blob". Een wat?
            Het artistiek proces dat achter deze bijzondere vorm steekt: Hij nam een homp klei. Hij sloeg er een paar deuken in. De basis van zijn ontwerp was klaar.
            Het wordt met trots uitgelegd op de site van toerisme Eindhoven. Het staat onder de titel "7x Architectonische hoogstandjes"! :-)

            De mensheid is toch wel bijzonder dom geworden. Als men genoeg autoriteit heeft komt men overal mee weg.
            Ik voeg er eerlijk aan toe: zoek de architect maar op: andere gebouwen van zijn bureau zijn heel indrukwekkend. Deze blob blijft wel maar een blob.
            
            Dit soort architectuur heeft zelfs een naam die haar onnozelheid accuraat vat: blobitectuur.
            `),
    } as t.tGebouw,
    Admirant: {
        type: 'gebouw', wijk: 'Binnenstad',
        Philips: false, Strijp: undefined, TUe: false,
        versie : [{
            naam: ['De Admirant'],
            maak: {
                tijd: 2006,
                ontwerper: ['Dam en partners'],
                project_url: undefined,
            },
            plaats: [{
                adres: {
                    straat: 'Emmasingel',
                    huisnummer: 29,
                }
            }],
            stijl: [],
            functie: ['kantoor', 'woning'],
            hoogte: undefined,
        }],
        beschrijving: undefined,
    } as t.tGebouw,
    NieuweEmmasingelWindluifel: {
        type: 'luifel', wijk: 'Binnenstad',
        Philips: false, Strijp: undefined, TUe: false,
        versie: [{
            naam: ['Windluifel'],
            maak: {
                tijd: 2016,
                ontwerper: ['Attika'],
                project_url: undefined,
            },
            plaats: [{
                straat: 'Nieuwe Emmasingel',
            }],
            stijl: ['neo-modernisme']
        }],
        beschrijving: 'Windluifel',
    } as t.tKunstwerk,
    Heuvel: {
        type: 'gebouw', wijk: 'Binnenstad',
        Philips: false, Strijp: undefined, TUe: false,
        versie: [{
            naam: ['Heuvel'],
            plaats: [{
                adres: {
                    straat: 'Markt',
                    huisnummer: undefined,
                },
            }],
            hoogte: undefined,
            maak: {
                project_url: undefined,
                tijd: 1992,
                ontwerper: ['Walter Brune'],
            },
            stijl: ['post-modernisme'],
            functie: ['winkel'],
        }],
        beschrijving: _fns.multiline(`
            Complex met winkelcentrum Heuvel en concertzaal Muziekgebouw.
            Ik vind het een schoon gebouw. Er zitten vele details in.
            Binnen is het vernieuwd. Het is minder geslaagd dan het oorspronkelijke ontwerp.
            `),
    } as t.tGebouw,
    TunnelOfSillyWalks: {
        type: 'kunstwerk',
        wijk: 'Binnenstad',
        Philips: false, Strijp: undefined, TUe: false,
        versie: [{
            naam: ['Silly Walks'],
            maak: {
                tijd: 2016,
                ontwerper: ['Studio Giftig'],
                project_url: 'https://studiogiftig.nl/portfolio_page/silly-walk-eindhoven/',
            },
            plaats: [{ straat: 'Dommeltunnel' }],
            stijl: [],
        }],
        beschrijving: undefined,
    } as t.tKunstwerk,
    DeLageLanden: {
        type: 'gebouw',
        wijk: 'Binnenstad',
        Philips: false, Strijp: undefined, TUe: false,
        versie: [{
            naam: ['De Lage Landen'],
            maak: {
                // https://indd.adobe.com/view/f58bb4f8-0e91-4c1b-80f4-06f4aae09914
                tijd: 1999,
                ontwerper: ['De Bever architecten'],
                project_url: undefined,
            },
            plaats: [{
                adres: {
                    straat: 'Vestdijk',
                    even: false,
                    huisnummer: [51, 61],
                    groep: true,
                }
            }],
            hoogte: undefined,
            stijl: ['post-modernisme'],
            functie: ['kantoor'],
        }],
        beschrijving: undefined,
    } as t.tGebouw,
    Augustijnenkerk: {
        type: 'gebouw',
        wijk: 'Binnenstad',
        Philips: false, Strijp: undefined, TUe: false,
        versie: [{
            naam: ['Augustijnenkerk'],
            maak: {
                tijd: 1898,
                // bron: https://nl.wikipedia.org/wiki/Jos_Hegener
                // bron: https://nl.wikipedia.org/wiki/Peter_Bekkers
                ontwerper: ['Peter Bekkers', 'Jos Hgener'],
                project_url: undefined,
            },
            plaats: [{
                adres: {
                    straat: 'Tramstraat',
                    huisnummer: 37,
                }
            }],
            hoogte: 66,
            stijl: ['neogothiek'],
            functie: ['kerk'],
        }, {
            naam: ['DOMUSDELA'],
            maak: {
                tijd: 2006,
                ontwerper: [],
                project_url: undefined,
            },
            plaats: [],
            hoogte: undefined,
            stijl: [],
            functie: ['evenementen'],
        }],
        beschrijving: undefined,
    } as t.tGebouw,
    Vestedatoren: {
        type: 'gebouw', wijk: 'Binnenstad',
        Philips: false, Strijp: undefined, TUe: false,
        versie: [{
            naam: ['Vestedatoren'],
            maak: {
                tijd: 2006,
                ontwerper: ['Jo Coenen'],
                project_url: 'https://jocoenen.com/cv/pages/vestedaTower_archi/index.html',
            },
            hoogte: 90,
            plaats: {
                adres: [{
                    straat: 'Vestdijk',
                    huisnummer: 68,
                }]
            },
            stijl: ['origineel modernisme'],
            functie: ['woning'],
        }],
        beschrijving: undefined,
    } as t.tGebouw,
    Medina: {
        type: 'gebouw', wijk: 'Binnenstad',
        Philips: false, Strijp: undefined, TUe: false,
        versie: [{
            naam: ['Medina'],
            maak: {
                ontwerper: ['Jo Coenen', 'Neave Brown'],
                tijd: 1999,
                project_url: undefined,
            },
            hoogte: undefined,
            plaats: {
                adres: undefined,
            },
            functie: ['woning'],
            stijl: ['origineel modernisme'],
        }],
        beschrijving: undefined,
    } as t.tGebouw,
    Stadhuis: {
        type: 'gebouw', wijk: 'Binnenstad',
        Philips: false, Strijp: undefined, TUe: false,
        versie: [{
            naam: ['Stadhuis'],
            maak: {
                tijd: 1969,
                ontwerper: ['Jan van der Laan'],
                project_url: undefined,
            },
            hoogte: 50,
            plaats: {
                adres: {
                    straat: 'Stadhuisplein',
                    huisnummer: 1,
                },
            },
            functie: ['bestuur'],
            stijl: ['modernisme'],
        }],
        beschrijving: undefined,
    } as t.tGebouw,
    Communicatie: {
        // bron: https://eindhoven.kunstwacht.nl/kunstwerken/bekijk/2778-communicatie
        type: 'kunstwerk', wijk: 'Binnenstad',
        Philips: false, Strijp: undefined, TUe: false,
        versie: [{
            naam: ['Communicatie'],
            maak: {
                tijd: 1981,
                ontwerper: ['Wessel Couzijn'],
                project_url: undefined,
            },
            stijl: ['minimalisme'],
            plaats: {
                straat: ['Oude Stadsgracht'],
            },
        }],
        beschrijving: undefined,
    } as t.tKunstwerk,
    Designhuis: {
        type: 'gebouw', wijk: 'Binnenstad',
        Philips: false, Strijp: undefined, TUe: false,
        versie: [{
            naam: ['Designhuis'],
            maak: {
                tijd: 1964,
                ontwerper: ['Jo Krüger'],
                project_url: undefined,
            },
            stijl: ['traditioneel modernisme'],
            functie: ['museum'],
            plaats: {
                adres: [{
                    straat: 'Stadhuisplein',
                    huisnummer: 3,
                }],
            },
            hoogte: undefined,
        }],
        beschrijving: undefined,
    } as t.tGebouw,
    VanAbbeMuseum: {
        type: 'gebouw', wijk: 'Binnenstad',
        Philips: false, Strijp: undefined, TUe: false,
        versie: [{
            naam: ['Van_Abbe-museum'],
            maak: {
                tijd: 1933,
                ontwerper: ['Alexander Jacobus Kropholler'],
                project_url: undefined,
            },
            stijl: ['traditionalisme'],
            functie: ['museum'],
            hoogte: undefined,
            plaats: {
                adres: [{
                    straat: 'Stratumsedijk',
                    huisnummer: 2,
                }]
            },
        }],
        beschrijving: undefined,
    } as t.tGebouw,
    SintCatharinakerk: {
        type: 'gebouw', wijk: 'Binnenstad',
        Philips: false, Strijp: undefined, TUe: false,
        versie: [{
            naam: ['Sint-Catharinakerk'],
            maak: {
                tijd: 1867,
                ontwerper: ['Pierre Cuypers'],
                project_url: undefined,
            },
            hoogte: 73,
            stijl: ['neogothiek'],
            functie: ['kerk'],
            plaats: {
                adres: [{
                    straat: 'Catharinaplein',
                    huisnummer: 1,
                }],
            }
        }],
        beschrijving: undefined,
    } as t.tGebouw,
    SintCatarinakerk_DeApocalyps: {
        type: 'kunstwerk', wijk: 'Binnenstad',
        Philips: false, Strijp: undefined, TUe: false,
        versie: [{
            naam: ['De Apocalyps'],
            maak: {
                tijd: 1957,
                ontwerper: ['Hugo Brouwer'],
                project_url: undefined,
            },
            stijl: ['abstract figuratief'],
            plaats: [{
                object: 'SintCatarinakerk',
            }],
        }],
        beschrijving: undefined,
    } as t.tKunstwerk,
    SintCatarinakerk_DeApostolischeSuccessie: {
        type: 'kunstwerk', wijk: 'Binnenstad',
        Philips: false, Strijp: undefined, TUe: false,
        versie: [{
            naam: ['De apostolische successie'],
            maak: {
                tijd: 1957,
                ontwerper: ['Hugo Brouwer'],
                project_url: undefined,
            },
            stijl: ['abstract figuratief'],
            plaats: [{
                object: 'SintCatarinakerk',
            }],
        }],
        beschrijving: undefined,
    } as t.tKunstwerk,
    SintCatarinakerk_DeStamboomVanJesse: {
        type: 'kunstwerk', wijk: 'Binnenstad',
        Philips: false, Strijp: undefined, TUe: false,
        versie: [{
            naam: ['De stamboom van Jesse'],
            maak: {
                tijd: 1958,
                ontwerper: ['Hugo Brouwer'],
                project_url: undefined,
            },
            stijl: ['abstract figuratief'],
            plaats: [{
                object: 'SintCatarinakerk',
            }],
        }],
        beschrijving: undefined,
    } as t.tKunstwerk,
    SintCatarinakerk_HetVerbondMetNoachEnHetOfferVanAbraham: {
        type: 'kunstwerk', wijk: 'Binnenstad',
        Philips: false, Strijp: undefined, TUe: false,
        versie: [{
            naam: ['Het verbond met Noach en het offer van Abraham'],
            maak: {
                tijd: 1958,
                ontwerper: ['Hugo Brouwer'],
                project_url: undefined,
            },
            stijl: ['abstract figuratief'],
            plaats: [{
                object: 'SintCatarinakerk',
            }],
        }],
        beschrijving: undefined,
    } as t.tKunstwerk,
    SintCatarinakerk_DeZondeval: {
        type: 'kunstwerk', wijk: 'Binnenstad',
        Philips: false, Strijp: undefined, TUe: false,
        versie: [{
            naam: ['De Zondeval'],
            maak: {
                tijd: 1958,
                ontwerper: ['Hugo Brouwer'],
                project_url: undefined,
            },
            stijl: ['abstract figuratief'],
            plaats: [{
                object: 'SintCatarinakerk',
            }],
        }],
        beschrijving: undefined,
    } as t.tKunstwerk,
    Dynamo: {
        type: 'gebouw', wijk: 'Binnenstad',
        Philips: false, Strijp: undefined, TUe: false,
        versie: [{
            naam: ['Dynamo'],
            maak: {
                tijd: 2005,
                ontwerper: ['diederendirrix'],
                project_url: 'https://www.diederendirrix.nl/en/projecten/dynamo-2/',
            },
            stijl: ['origineel modern'],
            functie: ['optredens', 'evenementen'],
            hoogte: undefined,
            plaats: {
                adres: {
                    straat: 'Catharinaplein',
                    huisnummer: 21,
                }
            }
        }],
        beschrijving: _fns.multiline(`
            Een cultuurcentrum voor jongeren.`),
    } as t.tGebouw,
    DeMarkt: {
        type: 'gebouw', wijk: 'Binnenstad',
        Philips: false, Strijp: undefined, TUe: false,
        versie: [{
            naam: [],
            maak: {
                tijd: undefined,
                ontwerper: [],
                project_url: undefined,
            },
            hoogte: undefined,
            functie: [],
            stijl: [],
            plaats: {
                adres: {
                    straat: 'Markt',
                    huisnummer: { even: false, reeks: [15, 17] },
                },
            }
        }, {
            naam: ['De Markt'],
            maak: {
                tijd: 2017,
                ontwerper: ['Bekke & Partners'],
                project_url: undefined,
            },
            hoogte: undefined,
            functie: [],
            stijl: [],
            plaats: {},
        }],
        beschrijving: undefined,
    } as t.tGebouw,
    /*
    Catharinaplein: {
        type: 'weg', wijk: 'Binnenstad',
        Philips: false, Strijp: undefined, TUe: false,
        versie: [{
            naam: ['Catharinaplein'],
            maak: {
                tijd: undefined,
                ontwerper: [],
                project_url: undefined,
            },
            plaats: [],
        }],
        beschrijving: undefined,
    } */
} as const

export default Binnenstad as t.tStadsobjectMap<typeof Binnenstad>