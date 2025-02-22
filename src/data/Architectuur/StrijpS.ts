import { M } from '../../SvgPathCommands.tsx'
import _fns from '../_fns.ts'
import * as t from "./_types"

const StrijpS = {
  StrijpS: {
    type: 'wijk',
    wijk: 'Strijp S',
    Philips: true, Strijp: 'S', TUe: false,
    versie: [{
      naam: ['Strijp'],
      maak: {
        tijd: 1923,
        ontwerper: ['Dirk Roosenburg'],
        project_url: undefined,
      },
      stijl: [],
    }],
    beschrijving: _fns.multiline(`
      Strijp S, het eerste van de reeks industrieterreinen van het gebied Strijp waar Philips uitgroeide tot wereldwijd electronica bedrijf.
      Strijp, de naam lijkt op streep of strip, is een reeks aaneengesloten industrieterreinen in het westen van Eindhoven.
      
      De wijken heten Strijp S, Strijp T en Strijp R. In de meest ambitieuze plannen van Philips zouden daarnaast Strijp Y en Strijp P volgen.
      Deze laatste 2 zijn er nooit gekomen.

      Deze wijken waren enkel toegankelijk voor Philips-medewerkers.
      Het gebied werd genoemd met de naam "De Verboden Stad".

      Ondertussen is Philips er vertrokken.
      De productie werd helaas verhuis naar lage-loon-landen.

      De Verboden Stad heeft zich geopend. Ze is omgebouwd tot een aangename en schone woon- en werkwijk.
      `)
  } as t.tWijk,
  NatLab: {
    type: 'gebouw',
    wijk: 'Strijp S',
    Philips: true, Strijp: 'S', TUe: false,
    versie: [{
      naam: [{ naam: 'Philips Natuurkundig Laboratorium', afkorting: 'NatLab', }],
      maak: {
        tijd: 1923,
        ontwerper: ['Dirk Roosenburg'],
        project_url: undefined,
      },
      plaats: [{
        adres: {
          straat: 'Kastanjelaan',
          huisnummer: 500,
        }
      }],
      hoogte: undefined,
      functie: ['onderzoek'],
      stijl: [],
    }],
    beschrijving: _fns.multiline(`
      Het bekende uitvinderslaboratorium van Philips.

      Zijn geschiedenis start in 1923.
      Hier werden uitvindingen gedaan i.v.m. radio en televisie.
      Na de gloeilamp waren radio's het tweede grote succes van het bedrijf.
      Met de ontwikkeling van televisie was Philips laat. Ze zetten in op de huis-video-projector.
      Dit bleek eind jaren 30 de foute inschatting te zijn geweest. Men draaide het roer om.
      Na de tweede wereldoorlog groeide het laboratorium sterk. Op haar piek werkte hier 2400 mensen.
      In de jaren 50 werd hier een van de eerste synthesizers uitgevonden.
      Het management oordeelde dat de electronische klanken onverkoopbaar waren.
      In 1963 werd het laboratorium verplaatst naar buiten de stad.
      In de jaren 80 vond Philips in het NatLab in samenwerking met de wetenschappers van het Japanse Sony de CD uit.
      Het laboratorium kende een enorme vrijheid om te experimenteren. Hierdoor werd het commerciele over het hoofd gezien.
      Na de jaren 80 werd het laboratorium sterk ingekrompen.
      Meer en meer onderzoek werd gedelocaliseerd naar het verre oosten.
      Op de plek buiten de stad ontwikkelde zich de Eindhovense High-Tech Campus.
      Het bekendste Eindhovense bedrijf dat hier ontstond, is ASML.
      Dit bedrijf werd mede-opgericht door Philips en is tegenwoordig een van de grootste chip-producenten ter wereld.
      `),
  } as t.tGebouw,
  Torenallee: {
    type: 'weg',
    wijk: 'Strijp S',
    Strijp: 'S', TUe: false, Philips: true,
    versie: [{
      naam: [{ naam: 'Torenallee', afkorting: undefined, }],
      maak: {
        tijd: 2013,
        ontwerper: ['West 8'],
        project_url: 'https://www.west8.com/projects/strijp-s/'
      },
      plaats: [],
      stijl: [],
    }],
    beschrijving: _fns.multiline(`
      Dit plein is het centrum van de wijk Strijp S.

      Kenmerkend zijn de boomstammen met de speciaal gekweekte V-vorm.
      `),
  } as t.tWeg,
  Veemgebouw: {
    type: 'gebouw',
    wijk: 'Strijp S',
    Philips: true, Strijp: 'S', TUe: false,
    versie: [{
      naam: ['Veemgebouw', { naam: undefined, afkorting: 'SDM', }],
      maak: {
        tijd: 1942,
        ontwerper: ['Philips Ingenieursbureau'],
        project_url: undefined,
      },
      hoogte: undefined,
      plaats: [
        { complex: 'Hoge Rug' },
        { adres: {
          straat: 'Torenallee',
          huisnummer: 80,
        }
      }],
      functie: ['fabriek'],
      stijl: ['functioneel'],
    }, {
      naam: ['Veemgebouw'],
      maak: {
        tijd: 2022,
        ontwerper: ['Caruso St. John'],
        project_url: 'https://carusostjohn.com/projects/strijp-s/',
      },
      hoogte: undefined,
      plaats: [],
      functie: ['reca', 'museum', 'entertainment'],
      stijl: ['post-post-modernisme'],
    }],
    beschrijving: _fns.multiline(`
      Een veem is een opslagplaats voor goederen, normaalgezien van een ander bedrijf.

      Het gebouw werd in 1942, tijdens de tweede wereldoorlog gebouwd.
      Het gebouw diende als opslagplaats voor de producten uit de andere fabrieken.
      Opvallend vind ik de ronde hoeken.
      

      In 2022 verbouwde architectenbureau Caruso - St. John het pand.
      De appartementen bovenop en de gele deuren zijn toevoegsels van hen.
      Deze moderne elementen passen goed in het oude gebouw, vind ik.
    `),
  } as t.tGebouw,
  ANTON: {
    type: 'gebouw',
    wijk: 'Strijp S',
    Philips: true, Strijp: 'S', TUe: false,
    versie: [{
      naam: [{ naam: undefined, afkorting: 'SBP', }],
      maak: {
        ontwerper: ['Philips Ingenieursbureau'],
        tijd: 1927,
        project_url: undefined,
      },
      hoogte: undefined,
      plaats: [{
        complex: 'Hoge Rug',
      }, {
        adres: {
          groep: true,
          straat: 'Torenallee',
          even: true,
          huisnummer: [52, 72],
        },
      }, {
        adres: {
          groep: true,
          straat: 'Leidingenstraat',
          even: false,
          huisnummer: [29, 45],
        }
      }],
      functie: ['fabriek'],
      stijl: ['functioneel']
    }, {
      naam: [{ naam: 'ANTON', afkorting: undefined, }],
      maak: {
        tijd: 2013,
        ontwerper: ['diederendirrix',],
        project_url: 'https://www.diederendirrix.nl/nl/projecten/gebouw-anton/',
      },
      hoogte: undefined,
      plaats: [],
      functie: ['woning', 'kantoor', 'reca', 'winkel'],
      stijl: [],
    }],
    beschrijving: `
    Dit voormalige fabrieksgebouw dateert uit 1927.
    Het gebouw ANTON staat broederlijk naast het gebouw GERARD.
    De gebroeders Anton en Gerard waren de zonen van Frederik Philips.
    Gerard heeft het bedrijf opgericht samen met zijn vader in 1891.
    Gloeilampen waren hun business.
    Beide broers hebben Philips een tijd geleid.
    `,
  } as t.tGebouw,
  Gerard: {
    type: 'gebouw',
    wijk: 'Strijp S',
    Philips: true,
    Strijp: 'S',
    TUe: false,
    versie: [{
      naam: [{ naam: undefined, afkorting: 'SAN', }],
      maak: {
        tijd: 1927,
        // bron: https://rijksmonumenten.nl/monument/518771/philipsgebouw-sksansbp/eindhoven/
        // A.I.J. de Broekert en J.R. Bouten
        ontwerper: ['Philips Ingenieursbureau'],
        project_url: undefined,
      },
      hoogte: undefined,
      plaats: [
        { complex: 'Hoge Rug', },
        { adres: {
            groep: true,
            straat: 'Torenallee',
            even: true,
            huisnummer: [36, 56],
          }
        }, {
          adres: { 
            groep: true,
            straat: 'Leidingenstraat',
            even: false,
            huisnummer: [17, 27],
        }
      }],
      functie: ['fabriek'],
      stijl: ['functioneel'],
    }, {
      naam: [{ naam: 'GERARD', afkorting: undefined, }],
      maak: {
        tijd: 2013,
        ontwerper: ['Jo Coenen & Co'],
        project_url: 'https://www.coenensaettele.com/san-gerard-strijp-s/'
      },
      hoogte: undefined,
      plaats: [],
      functie: ['woning', 'reca', 'winkel', 'kantoor'],
      stijl: [],
    }],
    beschrijving: _fns.multiline(`
    Dit voormalige fabrieks gebouw dateert uit 1927.
    Het gebouw GERARD staat broederlijk naast het gebouw ANTON.
    De gebroeders Gerard en Anton waren de zonen van Frederik Philips.
    Gerard heeft het bedrijf opgericht samen met zijn vader in 1891.
    Gloeilampen waren hun business.
    Beide broers hebben Philips een tijd geleid.
    `),
  } as t.tGebouw,
  Apparatenfabriek: {
    type: 'gebouw',
    wijk: 'Strijp S',
    Philips: {
      naam: {
        oud: {
          naam: 'Apparatenfabriek',
          afkorting: 'SK',
        },
        nieuw: 'Apparatenfabriek',
      }
    }, Strijp: 'S', TUe: false,
    versie: [{
      naam: [{ naam: 'Apparatenfabriek', afkorting: 'SK', }],
      maak: {
        tijd: 1928,
        ontwerper: [],
        project_url: undefined,
      },
      hoogte: undefined,
      plaats: [
        { complex: 'De Hoge Rug' },
        {
          adres: {
            straat: 'Torenallee',
            huisnummer: 24,
          },
      }],
      stijl: ['functioneel'],
      functie: [],
    }, {
      naam: [],
      maak: {
        tijd: undefined,
        ontwerper: [],
        project_url: undefined,
      },
      hoogte: undefined,
      plaats: [],
      stijl: [],
      functie: ['kantoor'],
    }],
    // https://www.driehoekstrijps.nl/apparatenfabriek/geschiedenis-apparatenfabriek
    beschrijving: _fns.multiline(`
      In 1927 en 1928 verrezen in drie nieuwe grote fabrieksgebouwen op Strijp-S. Ze staan bekend als de Hoge Rug.
      De eerste twee dragen nu de naam ANTON en GERARD, naar de broers die het bedrijf geleid hebben.
      Dit gebouw, de Apparatenfabriek werd gebouwd als radio-apparatenfabriek.
      Hier werden de eerste radio's van Phillips geproduceerd en wat later de televisies.
      Tijdens de Tweede Wereldoorlog kreeg de Hoge Rug het flink te verduren.
      In december 1942 voerden de Britten een precisiebombardement uit op het complex. De radio- en radaronderdelen werden door de nazi's gebruikt bij de oorlogsvoering.
      Twee jaar later, één dag na de bevrijding van Eindhoven, lieten ook de Duitsers een bom op het terrein vallen.
      De gebouwen van de Hoge Rug zijn gebouwd met een functionalistische architectuur.
      Naast functionaliteit moesten de hoge panden ook de uitstraling hebben van een wereldspeler die zich kon meten met de fabrieken van Phillips-concurrent General Electric.
      General Electric was het bedrijf van hun bekendste concurrent: Thomas Edison.

      Een weetje:
      De geboorteplaats van General Electric is een gemeente die ondertussen de naam Edison draagt. Ze ligt in de staat New Jersey, vlak bij de stad New York.
      Philips is er niet in geslaagd de naam Eindhoven haar naam te laten dragen.
      Als men de hoeveelheid van aan Philips-gerelateerde gebouwen en projecten ontdekt, had de naam niet ongepast geweest.
    `),
  } as t.tGebouw,
  Glasgebouw: {
    type: 'gebouw',
    wijk: 'Strijp S',
    Strijp: 'S', Philips: {
      naam: {
        oud: {
          naam: 'Glasgebouw',
          afkorting: 'SWA',
        },
        nieuw: 'Glasgebouw',
      },
    }, TUe: false,
    versie: [{
      naam: [{ naam: 'Glasgebouw', afkorting: 'SWA', }],
      maak: {
        tijd: 1948,
        ontwerper: ['Philips Ingenieursbureau'],
        project_url: undefined,
      },
      hoogte: undefined,
      plaats: [{
        adres: {
          straat: 'Torenallee',
          huisnummer: 45,
        },
      }],
      functie: ['fabriek'],
      stijl: ['functioneel'],
    }, {
      naam: [],
      maak: {
        tijd: undefined,
        ontwerper: [],
        project_url: undefined,
      },
      hoogte: undefined,
      plaats: [],
      stijl: [],
      functie: ['kantoor'],
    }],
    beschrijving: _fns.multiline(`
      Na de tweede wereldoorlog werd dit gebouw gebruikt voor u raadt al wel welk materiaal. :-)
      `),
  } as t.tGebouw,
  Microlab: {
    type: 'gebouw',
    wijk: 'Strijp S',
    Philips: {
      naam: {
        oud: {
          naam: undefined,
          afkorting: 'SFH',
        },
        nieuw: 'Microlab'
      }
    }, Strijp: 'S', TUe: false,
    versie: [{
      naam: [{ naam: undefined, afkorting: 'SFH', }],
      maak: {
        tijd: undefined,
        ontwerper: [],
        project_url: undefined,
      },
      hoogte: undefined,
      plaats: [{
        adres: {
          straat: 'Kastanjelaan',
          huisnummer: 400,
        },
      }],
      stijl: ['functioneel'],
      functie: ['fabriek'],
    }, {
      naam: [{ naam: 'Microlab', afkorting: undefined, }],
      maak: {
        tijd: 2016,
        ontwerper: [],
        project_url: undefined,
      },
      hoogte: undefined,
      plaats: [],
      stijl: [],
      functie: ['kantoor'],
    }],
    beschrijving: _fns.multiline(`
      Het gebouw heette in de Philips-tijd het SFH-gebouw.
      Nu wordt het gebouw verhuurd als kantoorruimte.
      Het draagt de naam Microlab.
    `)
  } as t.tGebouw,
  VideoLab: {
    type: 'gebouw',
    wijk: 'Strijp S',
    Philips: {
      naam: {
        oud: {
          naam: undefined,
          afkorting: 'SFJ',
        },
        nieuw: 'Videolab',
      },
    }, Strijp: 'S', TUe: false,
    versie: [{
      naam: [{ naam: undefined, afkorting: 'SFJ', }],
      maak: {
        tijd: undefined,
        ontwerper: [],
        project_url: undefined,
      },
      hoogte: undefined,
      plaats: [{
        adres: {
          straat: 'Torenallee',
          huisnummer: 20,
        },
      }],
      functie: ['fabriek'],
      stijl: ['functioneel'],
    }, {
      naam: [{ naam: 'VideoLab', afkorting: undefined, }],
      maak: {
        tijd: undefined,
        ontwerper: [],
        project_url: undefined,
      },
      hoogte: undefined,
      plaats: [],
      functie: ['kantoor'],
      stijl: [],
    }],
    beschrijving: undefined,
  } as t.tGebouw,
  Testbeeld: {
    type: 'kunstwerk',
    wijk: 'Strijp S',
    Philips: true, Strijp: 'S', TUe: false,
    versie: [{
      naam: [],
      maak: {
        tijd: 2021,
        ontwerper: ['Markus Genesius (Wow123)'],
        project_url: undefined,
      },
      plaats: [{ gebouw: 'VideoLab', }],
      stijl: [],
    }],
    beschrijving: _fns.multiline(`
      De muurschildering is geinsipireerd op een testbeeld.
      Dit werd ontworpen door de ingenieur Finn Fendil voor Philips in 1967.
      Het testbeeld draagt de naam "PM5544 19".
      De schildering werd aangebracht door de Duitse graffiti-schilder Markus Genesius.
      `)
  },
  Klokgebouw: {
    type: 'gebouw',
    wijk: 'Strijp S',
    Strijp: 'S',
    Philips: {
      naam: {
        oud: {
          naam: 'Klokgebouw',
          afkorting: undefined
        },
        nieuw: 'Klokgebouw',
      }
    },
    TUe: false,
    versie: [{
      naam: ['Klokgebouw'],
      maak: {
        ontwerper: ['Philips Ingenieursbureau'],
        tijd: 1928,
        project_url: undefined,
      },
      hoogte: 60,
      plaats: [{
        adres: {
          straat: 'Philitelaan',
          huisnummer: undefined,
        },
      }],
      functie: ['fabriek'],
      stijl: ['functioneel'],
    }],
    beschrijving: _fns.multiline(`
      Hier maakte Philips Philite. Philite is Philips' naam voor bakeliet.
      De naam bakeliet was immers een merknaam van de Belgische firma Bakelite.
      `),
  },
  Lighthouse: {
    type: 'gebouw',
    wijk: 'Strijp S',
    Strijp: 'S',
    Philips: false,
    TUe: false,
    versie: [{
      naam: ['Lighthouse'],
      maak: {
        tijd: 'bezig',
        ontwerper: ['De Zwarte Hond'],
        project_url: 'https://dezwartehond.nl/projecten/toren-niko-2/',
      },
      hoogte: 109,
      plaats:  [{
        adres: {
          straat: 'Philitelaan',
          huisnummer: undefined
        },
      }],
      stijl: ['internationale stijl'],
      functie: [],
    }],
    beschrijving: undefined,
  },
  // bron hoogte: https://www.trudo.nl/haasje-over-strijp-s
  HaasjeOver: {
    type: 'gebouw',
    wijk: 'Strijp S',
    Philips: false, Strijp: 'S', TUe: false,
    versie: [{
      naam: ['Haasje Over'],
      maak: {
        tijd: 2021,
        ontwerper: ['VMX Architects'],
        project_url: 'https://vmxarchitects.nl/architecture-urbanism/haasje-over',
      },
      hoogte: 70,
      plaats: [{
        adres: {
          straat: 'Veemstraat',
          huisnummer: 5,
        },
      }],
      functie: [],
      stijl: ['origineel modernisme'],
    }],
    beschrijving: undefined,
  },
  Ketelhuis: {
    type: 'gebouw', wijk: 'Strijp S',
    Philips: {
      naam: {
        oud: {
          naam: 'Ketelhuis',
          afkorting: 'SAZ',
        },
        nieuw: 'Ketelhuis',
      },
    }, Strijp: 'S', TUe: false,
    versie: [{
      naam: [{ naam: 'Ketelhuis', afkorting: 'SAZ' }],
      maak: {
        tijd: 1928,
        ontwerper: [],
        project_url: undefined,
      },
      hoogte: undefined,
      functie: ['fabriek'],
      stijl: ['functioneel'],
      plaats: {
        adres: {
          straat: 'Ketelhuisplein',
          huisnummer: 1,
        }
      }
    }],
    beschrijving: `
    In dit gebouw werd de electriciteit en perslucht voor Philips opgewekt.
    `
  } as t.tGebouw,
  // bron: https://eindhoven.kunstwacht.nl/kunstwerken/bekijk/7065-wandmozaiek-
  Ketelhuis_VormingCreatieEnVerkoopkunde: {
    type: 'kunstwerk', wijk: 'Strijp S',
    kunstvorm: 'mozaiek',
    Philips: false, Strijp: 'S', TUe: false,
    versie: [{
      naam: ['Vorming, creatie en verkoopkunde'],
      maak: {
        tijd: 1963,
        ontwerper: ['Gé Verhulst (Gerrit Verhulst)'],
        project_url: undefined,
      },
      plaats: {
        object: 'Ketelhuis',
      },
      stijl: ['figuratief modernisme']
    }],
    beschrijving: _fns.multiline(`
      Deze mozaiek is ontworpen voor het van_der_Put-lyceum, ook in Eindhoven.

      De school werd in 2019 gesloopt. De mozaiek is aan het Ketelhuis gehangen.
      `),
  },
  // bron hoogte: https://nl.wikipedia.org/wiki/Trudo_Toren
  VerticaalBos: {
    type: 'gebouw',
    wijk: 'Strijp S',
    Philips: false, Strijp: 'S', TUe: false,
    versie: [{
      naam: ['Vertical Forest'],
      hoogte: 70,
      maak: {
        ontwerper: ['Stefano Boeri'],
        tijd: 2021,
        project_url: 'https://www.stefanoboeriarchitetti.net/en/project/trudo-vertical-forest/',
      },
      plaats: [{
        adres: {
          straat: 'Philitelaan',
          huisnummer: 2,
        },
      }],
      stijl: ['origineel modernisme'],
      functie: [],
    }],
    beschrijving: _fns.multiline(`
      Dit hoogbouwbos is van de Italiaanse architect Stefano Boeri.

      Zijn eerste verticale bos bouwde/plantte hij in zijn geboortestad Milaan.
      
      Sindsdien bouwde hij er meerdere.

      Ook Antwerpen heeft een toren van hem. Het is geen echt verticaal bos.
      Aan de buitengevels hangen geen bomen.
      Het gebouw heeft wel een boomplantsoen op een van de daken.
      `),
  } as t.tGebouw,
  Leidingstraat: {
    type: 'weg',
    wijk: 'Strijp S',
    Philips: true, Strijp: 'S', TUe: false,
    versie: [{
      naam: ['Leidingstraat'],
      maak: {
        tijd: undefined,
        ontwerper: [],
        project_url: undefined
      },
      plaats: [],
      stijl: [],
    }],
    beschrijving: _fns.multiline(`
      De leidingen tussen de fabrieken heeft men hier laten hangen.
      `),
  } as t.tWeg,
  DeGeluksvogels: {
    type: 'kunstwerk',
    wijk: 'Strijp S',
    Strijp: 'S',
    TUe: false,
    Philips: false,
    versie: [{
      naam: ['De Geluksvogels'],
      maak: {
        ontwerper: ['Hugo Vrijdag'],
        tijd: undefined,
        project_url: 'https://ateliervrijdag.nl/portfolio/vogelschommels-bij-de-ontdekfabriek'
      },
      plaats: [{ straat: 'Leidingstraat' }],
      stijl: [],
    }],
    beschrijving: _fns.multiline(`
      Aan de leidingen zijn enkele abstracte metalen vogels gehangen.
      Zij vliegen als het ware kinderen rond in mandjes die ze als schommels dragen.
      `),
  },
  // bron hoogte: https://nl.wikipedia.org/wiki/Lijst_van_hoogste_gebouwen_van_Eindhoven
  // bron architect: https://archello.com/nl/project/blok-59
  Blok59: {
    type: 'gebouw',
    wijk: 'Strijp S',
    Philips: false, Strijp: 'S', TUe: false,
    versie: [{
      naam: ['Blok 59'],
      maak: {
        tijd: 2018,
        ontwerper: ['diederendirrix'],
        project_url: 'https://www.diederendirrix.nl/nl/projecten/blok-59/',
      },
      hoogte: 70,
      plaats: [
        { complex: 'BLOK', },
        {
          adres: {
            straat: 'Philitelaan',
            huisnummer: 59,
          },
        }
      ],
      stijl: ['post-post-modernisme'],
      functie: ['woning'],
    }],
    beschrijving: undefined,
  },
  // bron architect: https://archello.com/nl/project/loftwonen-block-61
  Blok61: {
    type: 'gebouw',
    wijk: 'Strijp S',
    Strijp: 'S',
    TUe: false,
    Philips: false,
    versie: [{
      naam: ['Blok 61'],
      maak: {
        tijd: 2017,
        ontwerper: ['architect|en|en'],
        project_url: 'https://architecten-en-en.nl/project/loftwonen-strijp-s/'
      },
      hoogte: undefined,
      plaats: [
        { complex: 'BLOK', },
        {
          adres: {
            straat: 'Philitelaan',
            huisnummer: 61,
          },
        }
      ],
      stijl: ['post-post-modernisme'],
      functie: ['woning'],
    }],
    beschrijving: undefined,
  },
  // bron maak.jaar: https://www.reynaers.nl/inspiratie/aluminium-referentie-projecten/ramen-blok-63-industriele-lofts-op-strijp-s-eindhoven
  Blok63: {
    type: 'gebouw',
    wijk: 'Strijp S',
    Philips: false, Strijp: 'S', TUe: false,
    versie: [{
      naam: ['Blok 63'],
      maak: {
        tijd: 2017,
        ontwerper: ['Pauwert Architectuur'],
        project_url: 'https://www.pauwert.nl/projecten/blok-63-eindhoven/',
      },
      hoogte: undefined,
      plaats: [{
        complex: 'BLOK',
      }, {
        adres: {
          straat: 'Philitelaan',
          huisnummer: 63,
        }
      }],
      stijl: ['post-post-modernisme'],
      functie: ['woning'],
    }],
    beschrijving: undefined,
  },
  Sixty5: {
    type: 'gebouw',
    wijk: 'Strijp S',
    Philips: false, Strijp: 'S', TUe: false,
    versie: [{
      naam: ['Sixty 5'],
      hoogte: 52,
      maak: {
        tijd: 2020,
        ontwerper: ['diederendirrix'],
        project_url: 'https://www.diederendirrix.nl/en/projecten/sixty5/',
      },
      plaats: [{
        adres: {
          straat: 'Philitelaan',
          huisnummer: 65,
        },
      }],
      functie: ['woning'],
      stijl: ['post-post-modernisme']
    }],
    beschrijving: undefined,
  },
  // bron maak.tijd, maak.ontwerper: https://www.kenkarchitecten.nl/lux-tower-strijp-s-eindhoven.html
  // bron hoogte: https://www.skyscrapercity.com/threads/eindhoven-sixty5-en-lux-52m-59m-opgeleverd.2152808/
  LUX: {
    type: 'gebouw',
    wijk: 'Strijp S',
    Strijp: 'S',
    Philips: false,
    TUe: false,
    versie: [{
      naam: ['LUX'],
      maak: {
        tijd: 2021,
        ontwerper: ['KENK architecten'],
        project_url: 'https://www.kenkarchitecten.nl/lux-tower-strijp-s-eindhoven.html',
      },
      hoogte: 59,
      plaats: [{
        adres: {
          straat: 'Philitelaan',
          huisnummer: 67,
        }
      }],
      stijl: ['post-post-modernisme'],
      functie: ['woning'],
    }],
    beschrijving: undefined,
  },
  NEXT: {
    type: 'gebouw',
    wijk: 'Strijp S',
    Philips: false, Strijp: 'S', TUe: false,
    versie: [{
      naam: ['NEXT'],
      hoogte: 75,
      maak: {
        tijd: 2022,
        ontwerper: ['Binst'],
        project_url: 'https://www.binstarchitects.be/project/next/',
      },
      plaats: [{
        adres: {
          straat: 'Philitelaan',
          huisnummer: undefined,
        },
      }],
      stijl: ['post-post-modernisme'],
      functie: ['woning'],
    }],
    beschrijving: undefined,
  },
  Bold: {
    type: 'gebouw',
    wijk: 'Strijp S',
    Philips: false, Strijp: 'S', TUe: false,
    versie: [{
      naam: ['Bold'],
      maak: {
        tijd: 2022,
        ontwerper: ['Kraaijvanger Architects'],
        project_url: 'https://www.kraaijvanger.nl/nl/projecten/kantoorgebouw-strijp-s',
      },
      plaats: [{
        adres: {
          straat: 'Philitelaan',
          huisnummer: 73,
        },
      }],
      hoogte: undefined,
      functie: ['woning'],
      stijl: ['post-post-modernisme']
    }],
    beschrijving: undefined,
  },
  StrijpsBultje: {
    type: 'weg',
    wijk: 'Strijp S',
    Philips: false, Strijp: 'S', TUe: false,
    versie: [{
      naam: ['Strijps Bultje'],
      maak: {
        tijd: undefined,
        ontwerper: [],
        project_url: undefined,
      },
      plaats: [],
      stijl: ['functioneel'],
    }],
    beschrijving: 
    _fns.multiline(`
      Een lelijk viaduct met een leuke naam.
      `),
  } as t.tWeg,
} as const

export default StrijpS as t.tStadsobjectMap<typeof StrijpS>