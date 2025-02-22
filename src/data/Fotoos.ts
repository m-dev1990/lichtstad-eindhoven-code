import Architectuur from './Architectuur/_'
import Ratios from './Ratios'
import Dagen from './Dagen'
import * as t from './_types'

const Fotoos: t.tFoto[] = [{
    file: 'dag1/IMG_20240427_115439.jpg',
    ratio: Ratios.HGsmFull,
    day: Dagen[0],
    beschrijving: 'Onze UFO is geland. - Locatie: planeet Eindhoven - Tijd: 1966 - Het Evoluon',
    onderwerp: [{ object: Architectuur.HetVen.Evoluon }],
}, {
    file: 'dag1/IMG_20240427_115525.jpg',
    ratio: Ratios.H43,
    day: Dagen[0],
    beschrijving: 'Het Evoluon - Het landingsgestel (1)',
    onderwerp: [{ object: Architectuur.HetVen.Evoluon }],
}, {
    file: 'dag1/IMG_20240427_120154.jpg',
    ratio: Ratios.H43,
    day: Dagen[0],
    beschrijving: 'Het Evoluon - De deurklink - Schoon logo',
    onderwerp: [{ object: Architectuur.HetVen.Evoluon }],
}, {
    file: 'dag1/IMG_20240427_124906.jpg',
    ratio: Ratios.V43,
    day: Dagen[0],
    beschrijving: 'Het Evoluon - Van binnen naar buiten',
    onderwerp: [{ object: Architectuur.HetVen.Evoluon }],
}, {
    file: 'dag1/IMG_20240427_124935.jpg',
    ratio: Ratios.H43,
    day: Dagen[0],
    beschrijving: 'Het Evoluon - Van onder naar boven',
    onderwerp: [{ object: Architectuur.HetVen.Evoluon }],
}, {
    file: 'dag1/IMG_20240427_125706.jpg',
    ratio: Ratios.H43,
    day: Dagen[0],
    beschrijving: 'Het Evoluon - Van boven naar onder',
    onderwerp: [{ object: Architectuur.HetVen.Evoluon }],
},  {
    file: 'dag1/IMG_20240427_125735.jpg',
    ratio: Ratios.V43,
    day: Dagen[0],
    beschrijving: 'Het Evoluon - Hee kijk, die auto uit Back To The Future.',
    onderwerp: [{ object: Architectuur.HetVen.Evoluon }],
}, {
    file: 'dag1/IMG_20240427_130324.jpg',
    ratio: Ratios.H169,
    day: Dagen[0],
    beschrijving: 'Het Evoluon - Binnen',
    onderwerp: [{ object: Architectuur.HetVen.Evoluon }],
}, {
    file: 'dag1/IMG_20240427_135337.jpg',
    ratio: Ratios.V43,
    day: Dagen[0],
    beschrijving: 'Het Evoluon - Detail - De trap',
    onderwerp: [{ object: Architectuur.HetVen.Evoluon }],
}, {
    file: 'dag1/IMG_20240427_135754.jpg',
    ratio: Ratios.V43,
    day: Dagen[0],
    beschrijving: 'Het Evoluon - Buiten',
    onderwerp: [{ object: Architectuur.HetVen.Evoluon }],
}, {
    file: 'dag1/IMG_20240427_140033.jpg',
    ratio: Ratios.HGsmFull,
    day: Dagen[0],
    beschrijving: 'Het Evoluon - Rond de vijver',
    onderwerp: [{ object: Architectuur.HetVen.Evoluon }],
}, {
    file: 'dag1/IMG_20240427_140428.jpg',
    ratio: Ratios.H43,
    day: Dagen[0],
    beschrijving: 'Het Evoluon - Het landingsgestel (2)',
    onderwerp: [{ object: Architectuur.HetVen.Evoluon }],
},  {
    file: 'dag1/IMG_20240427_143351.jpg',
    ratio: Ratios.H43,
    day: Dagen[0],
    beschrijving: 'Het Evoluon - Detail: Kapiteel',
    onderwerp: [{ object: Architectuur.HetVen.Evoluon }],
}, {
    file: 'dag2/DSC00782.JPG',
    ratio: Ratios.H,
    day: Dagen[1],
    beschrijving: 'Art_deco-deuren - Schootsestraat',
    onderwerp: [],
}, {
    file: 'dag2/DSC00785.JPG',
    ratio: Ratios.V,
    day: Dagen[1],
    beschrijving: 'Compositie - Schootsestraat',
    onderwerp: [],
}, {
    file: 'dag2/DSC00791.JPG',
    ratio: Ratios.H,
    day: Dagen[1],
    beschrijving: 'Kruispunt Schootsestraat - Kastanjelaan - Cederlaan',
    onderwerp: [],
}, {
    file: 'dag2/DSC00796.JPG',
    ratio: Ratios.V,
    day: Dagen[1],
    beschrijving: 'Studentenhuisvesting Cederlaan 20 - Kleurrijk, maar niet schoon',
    onderwerp: [{ object: Architectuur.Schoot.Cederlaan20 }],
}, {
    file: 'dag2/DSC00810.JPG',
    ratio: Ratios.H,
    day: Dagen[1],
    beschrijving: 'Studentenhuisvesting Cederlaan 20 - Kleurrijk, maar lelijk dus',
    onderwerp: [{ object: Architectuur.Schoot.Cederlaan20 }],
}, {
    file: 'dag2/DSC00816.JPG',
    ratio: Ratios.H,
    day: Dagen[1],
    beschrijving: 'Kruispunt Schootsestraat - Kastanjelaan - Cederlaan',
    onderwerp: [],
}, {
    file: 'dag2/DSC01100.JPG',
    ratio: Ratios.V,
    day: Dagen[1],
    beschrijving: 'NatLab - Het bekende uitvinderslaboratorium van Philips',
    onderwerp: [{ object: Architectuur.StrijpS.NatLab }],
}, {
    file: 'dag2/DSC00827.JPG',
    ratio: Ratios.V,
    day: Dagen[1],
    beschrijving: 'Strijp S - Een oude fabriekswijk van Philips, gereconverteerd tot woon- en werkwijk - ANTON',
    onderwerp: [{ object: Architectuur.StrijpS.ANTON }],
}, {
    file: 'dag2/DSC00831.JPG',
    ratio: Ratios.V,
    day: Dagen[1],
    beschrijving: 'Strijp S - Veemgebouw, ANTON en Haasje Over',
    onderwerp: [
        { object: Architectuur.StrijpS.Veemgebouw },
        { object: Architectuur.StrijpS.ANTON },
        { object: Architectuur.StrijpS.HaasjeOver },
    ],
}, {
    file: 'dag2/DSC00834.JPG',
    ratio: Ratios.H,
    day: Dagen[1],
    beschrijving: 'Strijp S - Veemgebouw, ANTON en Haasje Over',
    onderwerp: [
        { object: Architectuur.StrijpS.Veemgebouw },
        { object: Architectuur.StrijpS.ANTON },
        { object: Architectuur.StrijpS.HaasjeOver },
    ],
}, {
    file: 'dag2/DSC00836.JPG',
    ratio: Ratios.H,
    day: Dagen[1],
    beschrijving: 'Strijp S - Torenallee',
    onderwerp: [{ object: Architectuur.StrijpS.Torenallee }],
}, {
    file: 'dag2/DSC00832.JPG',
    ratio: Ratios.H,
    day: Dagen[1],
    beschrijving: 'Strijp S - Veemgebouw',
    onderwerp: [{ object: Architectuur.StrijpS.Veemgebouw }],
}, {
    file: 'dag3/DSC01154.JPG',
    ratio: Ratios.H,
    day: Dagen[2],
    beschrijving: 'Strijp S - Veemgebouw - Ingang',
    onderwerp: [{ object: Architectuur.StrijpS.Veemgebouw }],
}, {
    file: 'dag3/DSC01147.JPG',
    ratio: Ratios.V,
    day: Dagen[2],
    beschrijving: 'Strijp S - ANTON',
    onderwerp: [{ object: Architectuur.StrijpS.ANTON }],
}, {
    file: 'dag3/DSC01150.JPG',
    ratio: Ratios.H,
    day: Dagen[2],
    beschrijving: 'Strijp S - ANTON',
    onderwerp: [{ object: Architectuur.StrijpS.ANTON }],
}, {
    file: 'dag2/DSC01099.JPG',
    ratio: Ratios.H,
    day: Dagen[1],
    beschrijving: 'Strijp S - Apparatenfabriek',
    onderwerp: [
        { object: Architectuur.StrijpS.Apparatenfabriek },
        { object: Architectuur.StrijpS.VerticaalBos },
        { object: Architectuur.StrijpS.Blok59 },
    ],
}, {
    file: 'dag3/DSC01121 [uitsnede].JPG',
    ratio: Ratios.V,
    day: Dagen[2],
    beschrijving: 'Strijp S - Binnenkijken in de Apparatenfabriek',
    onderwerp: [{ object: Architectuur.StrijpS.Apparatenfabriek }],
}, {
    file: 'dag3/DSC01126 [uitsnede].JPG',
    ratio: Ratios.V,
    day: Dagen[2],
    beschrijving: 'Strijp S - Schommels De Geluksvogels',
    onderwerp: [{ object: Architectuur.StrijpS.DeGeluksvogels }],
}, {
    file: 'dag2/DSC00860.JPG',
    ratio: Ratios.H,
    day: Dagen[1],
    beschrijving: 'Strijp S - Mozaïek "Vorming, creatie en verkoopkunde" tegen de muur van het Ketelhuis',
    onderwerp: [{ object: Architectuur.StrijpS.Ketelhuis_VormingCreatieEnVerkoopkunde }]
}, {
    file: 'dag2/DSC00861.JPG',
    ratio: Ratios.H,
    day: Dagen[1],
    beschrijving: 'Strijp S - Terras van het Ketelhuis met torens op de achtergrond',
    onderwerp: [
        { object: Architectuur.StrijpS.Blok59 },
        { object: Architectuur.StrijpS.Blok61 },
        { object: Architectuur.StrijpS.Blok63 },
        { object: Architectuur.StrijpS.Sixty5 },
        { object: Architectuur.StrijpS.NEXT },
        { object: Architectuur.StrijpS.VerticaalBos },
    ],
}, {
    file: 'dag3/DSC01134.JPG',
    ratio: Ratios.H,
    day: Dagen[2],
    beschrijving: 'Strijp S - Verticaal Bos van tussen de leidingen',
    onderwerp: [{ object: Architectuur.StrijpS.VerticaalBos }, { object: Architectuur.StrijpS.Leidingstraat }],
}, {
    file: 'dag3/DSC01116.JPG',
    ratio: Ratios.V,
    day: Dagen[2],
    beschrijving: 'Strijp S - Verticaal Bos (Bosco Verticale)',
    onderwerp: [{ object: Architectuur.StrijpS.VerticaalBos }],
}, {
    file: 'dag2/DSC00859.JPG',
    ratio: Ratios.H,
    day: Dagen[1],
    beschrijving: 'Strijp S - Verticaal Bos (Bosco Verticale)',
    onderwerp: [{ object: Architectuur.StrijpS.VerticaalBos }],
}, {
    file: 'dag3/DSC01137.JPG',
    ratio: Ratios.H,
    day: Dagen[2],
    beschrijving: 'Strijp S - Verticaal bos (Bosco Verticale) van onderaf',
    onderwerp: [{ object: Architectuur.StrijpS.VerticaalBos }],
}, {
    file: 'dag3/DSC01109.JPG',
    ratio: Ratios.V,
    day: Dagen[2],
    beschrijving: 'Glasgebouw',
    onderwerp: [{ object: Architectuur.StrijpS.Glasgebouw }],
}, {
    file: 'dag2/DSC01096.JPG',
    ratio: Ratios.V,
    day: Dagen[1],
    beschrijving: 'Microlab en Videolab erachter',
    onderwerp: [
        { object: Architectuur.StrijpS.Microlab },
        { object: Architectuur.StrijpS.VideoLab },
    ],
}, {
    file: 'dag3/DSC01113uitsnede.JPG',
    ratio: Ratios.V,
    day: Dagen[2],
    beschrijving: 'Strijp S - Straatkunst geinspireerd op het testbeeld ontworpen voor Philips-televisies tegen de gevel van het VideoLab',
    onderwerp: [
        { object: Architectuur.StrijpS.VideoLab },
        { object: Architectuur.StrijpS.Testbeeld },
    ],
}, {
    file: 'dag3/DSC01114.JPG',
    ratio: Ratios.H,
    day: Dagen[2],
    beschrijving: 'Strijp S - Straatkunst geinspireerd op het testbeeld ontworpen voor Philips-televisies tegen de gevel van het VideoLab',
    onderwerp: [
        { object: Architectuur.StrijpS.VideoLab },
        { object: Architectuur.StrijpS.Testbeeld },
    ],
}, {
    file: 'dag2/DSC00865.JPG',
    ratio: Ratios.V,
    day: Dagen[1],
    beschrijving: 'Strijp S - Lighthouse in opbouw',
    onderwerp: [
        { object: Architectuur.StrijpS.Lighthouse },
    ],
}, {
    file: 'dag2/DSC00876.JPG',
    ratio: Ratios.H,
    day: Dagen[1],
    beschrijving: 'Strijp S - Klokgebouw',
    onderwerp: [{ object: Architectuur.StrijpS.Klokgebouw },],
}, {
    file: 'dag2/DSC00882.JPG',
    ratio: Ratios.H,
    day: Dagen[1],
    beschrijving: 'Strijp S - Lighthouse in opbouw van tussen het groen in het Gloeilampplantsoen',
    onderwerp: [
        { object: Architectuur.StrijpS.Lighthouse },
        { object: Architectuur.StrijpT.Gloeilampplantsoen },
    ],
}, {
    file: 'dag2/DSC00843.JPG',
    ratio: Ratios.H,
    day: Dagen[1],
    beschrijving: 'Strijps Bultje met de fabrieken van Strijp T op de achtergrond',
    onderwerp: [{ object: Architectuur.StrijpS.StrijpsBultje }],
}, {
    file: 'dag2/DSC00891.JPG',
    ratio: Ratios.H,
    day: Dagen[1],
    beschrijving: 'Naar het centrum -> De passage van het Centraal Station',
    onderwerp: [{ object: Architectuur.Binnenstad.CentraalStationStationspassage, }],
}, {
    file: 'dag2/DSC00910.JPG',
    ratio: Ratios.V,
    day: Dagen[1],
    beschrijving: 'Centraal Station - De toren',
    onderwerp: [
        { object: Architectuur.Binnenstad.CentraalStation },
    ],
}, {
    file: 'dag2/DSC00913.JPG',
    ratio: Ratios.V,
    day: Dagen[1],
    beschrijving: 'Centraal Station - Zijdelings',
    onderwerp: [
        { object: Architectuur.Binnenstad.CentraalStation },
    ],
},  {
    file: 'dag2/DSC00940.JPG',
    ratio: Ratios.H,
    day: Dagen[1],
    beschrijving: 'Centraal Station - Van voren',
    onderwerp: [
        { object: Architectuur.Binnenstad.CentraalStation,
            // onderdeel: [Architectuur.Binnenstad.CentraalStationHalGlasramenOostzijde]
        },
        { object: Architectuur.Binnenstad.KennedyBusinessCentre },
    ],
}, {
    file: 'dag2/DSC00918.JPG',
    ratio: Ratios.H,
    day: Dagen[1],
    beschrijving: 'Centraal Station - Detail - Reliëf aan de ingang: Ik kom... ik ga',
    onderwerp: [{ object: Architectuur.Binnenstad.CentraalStationReliefWestzijde }],
}, {
    file: 'dag2/DSC00930.JPG',
    ratio: Ratios.H,
    day: Dagen[1],
    beschrijving: 'Centraal Station - Detail - Glasramen in de centrale hal: Vogeltrek',
    onderwerp: [{
        object: Architectuur.Binnenstad.CentraalStationVogeltrek,
    }],
}, {
    file: 'dag2/DSC00916.JPG',
    ratio: Ratios.H,
    day: Dagen[1],
    beschrijving: 'In het centrum - De Bijenkorf',
    onderwerp: [{ object: Architectuur.Binnenstad.DeBijenkorf }],
}, {
    file: 'dag2/DSC00917.JPG',
    ratio: Ratios.V,
    day: Dagen[1],
    beschrijving: 'In het centrum - The Student Hotel',
    onderwerp: [{ object: Architectuur.Binnenstad.TheStudentHotel }],
}, {
    file: 'dag2/DSC00948.JPG',
    ratio: Ratios.V,
    day: Dagen[1],
    beschrijving: 'In het centrum - "The Blob" met daarachter de Lichttoren',
    onderwerp: [
        { object: Architectuur.Binnenstad.TheBlob },
        { object: Architectuur.DeWitteDame.Lichttoren },
    ],
}, {
    file: 'dag2/DSC00953.JPG',
    ratio: Ratios.V,
    day: Dagen[1],
    beschrijving: 'In het centrum - Lichttoren',
    onderwerp: [
        { object: Architectuur.DeWitteDame.Lichttoren },
    ],
}, {
    file: 'dag2/DSC00967.JPG',
    ratio: Ratios.V,
    day: Dagen[1],
    beschrijving: 'In het centrum - De Admirant',
    onderwerp: [
        { object: Architectuur.Binnenstad.Admirant },
    ],
},  {
    file: 'dag4/DSC01641.JPG',
    ratio: Ratios.V,
    day: Dagen[3],
    beschrijving:  'In het centrum - De Admirant',
    onderwerp: [
        { object: Architectuur.Binnenstad.Admirant },
    ],
}, {
    file: 'dag2/DSC00989.JPG',
    ratio: Ratios.H,
    day: Dagen[1],
    beschrijving: 'In het centrum - Windluifel over de Nieuwe Emmasingel',
    onderwerp: [
        { object: Architectuur.Binnenstad.NieuweEmmasingelWindluifel },
    ],
}, {
    file: 'dag2/DSC00997.JPG',
    ratio: Ratios.V,
    day: Dagen[1],
    beschrijving: 'In het centrum - Heuvel',
    onderwerp: [
        { object: Architectuur.Binnenstad.Heuvel },
    ],
}, {
    file: 'dag2/DSC01000.JPG',
    ratio: Ratios.V,
    day: Dagen[1],
    beschrijving: 'In het centrum - Heuvel',
    onderwerp: [
        { object: Architectuur.Binnenstad.Heuvel },
    ],
}, {
    file: 'dag2/DSC01005.JPG',
    ratio: Ratios.H,
    day: Dagen[1],
    beschrijving: 'In het centrum - Heuvel',
    onderwerp: [
        { object: Architectuur.Binnenstad.Heuvel },
    ],
}, {
    file: 'dag2/DSC01010.JPG',
    ratio: Ratios.H,
    day: Dagen[1],
    beschrijving: 'In het centrum - Heuvel',
    onderwerp: [
        { object: Architectuur.Binnenstad.Heuvel },
    ],
}, {
    file: 'dag4/DSC01636.JPG',
    ratio: Ratios.H,
    day: Dagen[3],
    beschrijving:  'In het centrum - Heuvel',
    onderwerp: [
        { object: Architectuur.Binnenstad.Heuvel },
    ],
}, {
    file: 'dag4/DSC01638.JPG',
    ratio: Ratios.V,
    day: Dagen[3],
    beschrijving:  'In het centrum - Heuvel',
    onderwerp: [
        { object: Architectuur.Binnenstad.Heuvel },
    ],
}, {
    file: 'dag4/DSC01639.JPG',
    ratio: Ratios.V,
    day: Dagen[3],
    beschrijving:  'In het centrum - Heuvel',
    onderwerp: [
        { object: Architectuur.Binnenstad.Heuvel },
    ],
}, {
    file: 'dag4/DSC01646.JPG',
    ratio: Ratios.H,
    day: Dagen[3],
    beschrijving:  'In het centrum - Heuvel',
    onderwerp: [
        { object: Architectuur.Binnenstad.Heuvel },
    ],
}, {
    file: 'dag4/DSC01648.JPG',
    ratio: Ratios.V,
    day: Dagen[3],
    beschrijving:  'In het centrum - Heuvel',
    onderwerp: [
        { object: Architectuur.Binnenstad.Heuvel },
    ],
}, {
    file: 'dag4/DSC01653.JPG',
    ratio: Ratios.H,
    day: Dagen[3],
    beschrijving:  'In het centrum - Heuvel',
    onderwerp: [
        { object: Architectuur.Binnenstad.Heuvel },
    ],
}, {
    file: 'dag4/DSC01649.JPG',
    ratio: Ratios.H,
    day: Dagen[3],
    beschrijving:  'In het centrum - Een tropisch eiland',
    onderwerp: [
        { object: Architectuur.Binnenstad.DeMarkt }
    ],
}, {
    file: 'dag4/DSC01631.JPG',
    ratio: Ratios.H,
    day: Dagen[3],
    beschrijving:  'In het centrum - Dynamo',
    onderwerp: [
        { object: Architectuur.Binnenstad.Dynamo },
    ],
}, {
    file: 'dag2/DSC01020.JPG',
    ratio: Ratios.H,
    day: Dagen[1],
    beschrijving: 'In het centrum - Catharinaplein',
    onderwerp: [
        // { object: Architectuur.Binnenstad.Catharinaplein },
    ],
}, {
    file: 'dag4/DSC01621.JPG',
    ratio: Ratios.V,
    day: Dagen[3],
    beschrijving:  'Sint-Catharinakerk - Glasraam De Apocalyps',
    onderwerp: [
        { object: Architectuur.Binnenstad.SintCatarinakerk_DeApocalyps }
    ],
}, {
    file: 'dag4/DSC01624.JPG',
    ratio: Ratios.V,
    day: Dagen[3],
    beschrijving:  'Sint-Catharinakerk - Glasraam De Apostolische Successie',
    onderwerp: [
        { object: Architectuur.Binnenstad.SintCatarinakerk_DeApostolischeSuccessie }
    ],
}, {
    file: 'dag4/DSC01625.JPG',
    ratio: Ratios.V,
    day: Dagen[3],
    beschrijving:  'Sint-Catharinakerk - Glasraam De Stamboom van Jesse',
    onderwerp: [
        { object: Architectuur.Binnenstad.SintCatarinakerk_DeStamboomVanJesse }
    ],
}, {
    file: 'dag4/DSC01626.JPG',
    ratio: Ratios.V,
    day: Dagen[3],
    beschrijving:  'Sint-Catharinakerk - Glasraam Het Verbond met Noach en het offer van Abraham',
    onderwerp: [
        { object: Architectuur.Binnenstad.SintCatarinakerk_HetVerbondMetNoachEnHetOfferVanAbraham }
    ],
}, {
    file: 'dag4/DSC01628.JPG',
    ratio: Ratios.V,
    day: Dagen[3],
    beschrijving:  'Sint-Catharinakerk - Glasraam De Zondeval',
    onderwerp: [
        { object: Architectuur.Binnenstad.SintCatarinakerk_DeZondeval },
    ],
}, {
    file: 'dag2/DSC01025.JPG',
    ratio: Ratios.V,
    day: Dagen[1],
    beschrijving: 'In het centrum - Een onbekend steegje.',
    onderwerp: [],
}, {
    file: 'dag2/DSC01027.JPG',
    ratio: Ratios.V,
    day: Dagen[1],
    beschrijving: 'Kruispunt Hoogstraat - Willem de Zwijgerstraat',
    onderwerp: []
}, {
    file: 'dag2/DSC01030.JPG',
    ratio: Ratios.H,
    day: Dagen[1],
    beschrijving: 'Huizenrij aan Mauritsstraat',
    onderwerp: []
}, {
    file: 'dag2/DSC01034.JPG',
    ratio: Ratios.H,
    day: Dagen[1],
    beschrijving: 'Oranjestraat 2',
    onderwerp: [
        // { object: Architectuur.DeBergen.Oranjestraat2 }
    ]
}, {
    file: 'dag2/DSC01037.JPG',
    ratio: Ratios.V,
    day: Dagen[1],
    beschrijving: 'Vonderweg 66',
    onderwerp: [{ object: Architectuur.Vonderkwartier.Vonderweg66 }]
}, {
    file: 'dag2/DSC01040.JPG',
    ratio: Ratios.V,
    day: Dagen[1],
    beschrijving: 'Lodewijk Napoleonplein 19',
    onderwerp: [
        { object: Architectuur.Vonderkwartier.LodewijkNapoleonplein19, },
    ],
}, {
    file: 'dag2/DSC01044.JPG',
    ratio: Ratios.V,
    day: Dagen[1],
    beschrijving: 'Vonderhof',
    onderwerp: [
        // { object: Architectuur.Vonderkwartier.Vonderhof }
    ]
}, {
    file: 'dag2/DSC00956.JPG',
    ratio: Ratios.V,
    day: Dagen[1],
    beschrijving: 'PSV-stadion - Philips Sport Vereniging',
    onderwerp: [
        { object: Architectuur.Philipsdorp.PSVStadion },
    ],
}, {
    file: 'dag2/DSC01045.JPG',
    ratio: Ratios.H,
    day: Dagen[1],
    beschrijving: 'PSV-stadion',
    onderwerp: [{ object: Architectuur.Philipsdorp.PSVStadion }]
}, {
    file: 'dag2/DSC01054.JPG',
    ratio: Ratios.V,
    day: Dagen[1],
    beschrijving: 'Philipsdorp - Henriettestraat',
    onderwerp: [
        { object: Architectuur.Philipsdorp.Philipsdorp },
        // { object: Architectuur.Philipsdorp.PhilipsdorpHenriettestraat }
    ]
}, {
    file: 'dag2/DSC01062.JPG',
    ratio: Ratios.H,
    day: Dagen[1],
    beschrijving: 'Philipsdorp - Johannastraat',
    onderwerp: [
        { object: Architectuur.Philipsdorp.Philipsdorp },
        // { object: Architectuur.Philipsdorp.PhilipsdorpJohannastraat }
    ]
}, {
    file: 'dag2/DSC01065.JPG',
    ratio: Ratios.V,
    day: Dagen[1],
    beschrijving: 'Philipsdorp - Hubertastraat met dreigend insectachtig alien monster',
    onderwerp: [
        { object: Architectuur.Philipsdorp.Philipsdorp },
        // { object: Architectuur.Philipsdorp.PhilipsdorpHubertastraat },
        { object: Architectuur.Philipsdorp.PSVStadion },
    ]
}, {
    file: 'dag2/DSC01069.JPG',
    ratio: Ratios.H,
    day: Dagen[1],
    beschrijving: 'Philipsdorp - Hubertastraat met dreigend insectachtig alien monster',
    onderwerp: [
        { object: Architectuur.Philipsdorp.Philipsdorp },
        // { object: Architectuur.Philipsdorp.PhilipsdorpHubertastraat },
        { object: Architectuur.Philipsdorp.PSVStadion },
    ],
}, {
    file: 'dag2/DSC01078.JPG',
    ratio: Ratios.V,
    day: Dagen[1],
    beschrijving: 'PSV-stadion',
    onderwerp: [{ object: Architectuur.Philipsdorp.PSVStadion }],
}, {
    file: 'dag2/DSC01079.JPG',
    ratio: Ratios.H,
    day: Dagen[1],
    beschrijving: 'Hartje Eindhoven',
    onderwerp: [{ object: Architectuur.Philipsdorp.HartjeEindhoven }],
}, {
    file: 'dag2/DSC01084.JPG',
    ratio: Ratios.V,
    day: Dagen[1],
    beschrijving: 'Philips Bedrijfsschool',
    onderwerp: [{ object: Architectuur.Schoot.PhilipsBedrijfsschool }],
}, {
    file: 'dag2/DSC01094.JPG',
    ratio: Ratios.V,
    day: Dagen[1],
    beschrijving: 'Philips Bedrijfsschool',
    onderwerp: [
        { object: Architectuur.Schoot.PhilipsBedrijfsschool },
    ],
}, {
    file: 'dag2/DSC01089.JPG',
    ratio: Ratios.V,
    day: Dagen[1],
    beschrijving: 'Philips Bedrijfsschool & fontein Panta Rhei',
    onderwerp: [
        { object: Architectuur.Schoot.PhilipsBedrijfsschool },
        { object: Architectuur.Schoot.PantaRhei },
    ],
}, {
    file: 'dag3/DSC01406.JPG',
    ratio: Ratios.H,
    day: Dagen[2],
    beschrijving: 'Fontein Panta Rhei',
    onderwerp: [
        { object: Architectuur.Schoot.PantaRhei },
        { object: Architectuur.Philipsdorp.Philipsdorp },
    ],
}, {
    file: 'dag3/DSC01400.JPG',
    ratio: Ratios.V,
    day: Dagen[2],
    beschrijving: 'Fontein Panta Rhei',
    onderwerp: [
        { object: Architectuur.Schoot.PantaRhei },
        { object: Architectuur.Schoot.PhilipsBedrijfsschool },
    ],
}, {
    file: 'dag3/DSC01157.JPG',
    ratio: Ratios.H,
    day: Dagen[2],
    beschrijving: 'Drents Dorp',
    onderwerp: [{ object: Architectuur.DrentsDorp.DrentsDorp }],
}, {
    file: 'dag3/DSC01165.JPG',
    ratio: Ratios.V,
    day: Dagen[2],
    beschrijving: 'Drents Dorp - Koenraadlaan',
    onderwerp: [{ object: Architectuur.DrentsDorp.DrentsDorp }],
}, {
    file: 'dag3/DSC01200.JPG',
    ratio: Ratios.H,
    day: Dagen[2],
    beschrijving: 'Drents Dorp - Needestraat',
    onderwerp: [{ object: Architectuur.DrentsDorp.DrentsDorp }],
}, {
    file: 'dag3/DSC01203.JPG',
    ratio: Ratios.V,
    day: Dagen[2],
    beschrijving: 'Drents Dorp - Needestraat',
    onderwerp: [{ object: Architectuur.DrentsDorp.DrentsDorp }],
}, {
    file: 'dag3/DSC01205.JPG',
    ratio: Ratios.H,
    day: Dagen[2],
    beschrijving: 'Drents Dorp - Halvemaanstraat',
    onderwerp: [{ object: Architectuur.DrentsDorp.DrentsDorp }],
}, {
    file: 'dag3/DSC01179.JPG',
    ratio: Ratios.H,
    day: Dagen[2],
    beschrijving: 'Nieuw Drents Dorp',
    onderwerp: [{ object: Architectuur.DrentsDorp.NieuwDrentsDorp }],
}, {
    file: 'dag3/DSC01190.JPG',
    ratio: Ratios.V,
    day: Dagen[2],
    beschrijving: 'Nieuw Drents Dorp - Lochemstraat',
    onderwerp: [{ object: Architectuur.DrentsDorp.NieuwDrentsDorp }],
}, {
    file: 'dag3/DSC01192.JPG',
    ratio: Ratios.H,
    day: Dagen[2],
    beschrijving: 'Nieuw Drents Dorp - Needestraat',
    onderwerp: [{ object: Architectuur.DrentsDorp.NieuwDrentsDorp }],
}, {
    file: 'dag3/DSC01196.JPG',
    ratio: Ratios.H,
    day: Dagen[2],
    beschrijving: 'Nieuw Drents Dorp - Needestraat',
    onderwerp: [{ object: Architectuur.DrentsDorp.NieuwDrentsDorp }],
}, {
    file: 'dag3/DSC01163.JPG',
    ratio: Ratios.H,
    day: Dagen[2],
    beschrijving: 'Strijp R - Diodehof / Persglashof / Anodehof/ Beeldbuisring',
    onderwerp: [{ object: Architectuur.StrijpR.DiodehofPersglashofAnodehofBeeldbuisring }],
}, {
    file: 'dag3/DSC01168.JPG',
    ratio: Ratios.H,
    day: Dagen[2],
    beschrijving: 'Strijp R - Diodehof / Persglashof / Anodehof/ Beeldbuisring',
    onderwerp: [{ object: Architectuur.StrijpR.DiodehofPersglashofAnodehofBeeldbuisring }],
}, {
    file: 'dag3/DSC01186.JPG',
    ratio: Ratios.H,
    day: Dagen[2],
    beschrijving: 'Strijp R - Diodehof / Persglashof / Anodehof/ Beeldbuisring',
    onderwerp: [{ object: Architectuur.StrijpR.DiodehofPersglashofAnodehofBeeldbuisring }, { object: Architectuur.StrijpR.RFPortiersloge }],
}, {
    file: 'dag3/DSC01208.JPG',
    ratio: Ratios.V,
    day: Dagen[2],
    beschrijving: 'Strijp R - Diodehof / Persglashof / Anodehof/ Beeldbuisring',
    onderwerp: [{ object: Architectuur.StrijpR.DiodehofPersglashofAnodehofBeeldbuisring }],
}, {
    file: 'dag3/DSC01209.JPG',
    ratio: Ratios.V,
    day: Dagen[2],
    beschrijving: 'Strijp R - Studio Piet Hein Eek - Een Eindhovens ontwerper',
    onderwerp: [{ object: Architectuur.StrijpR.RKKeramiekfabriek }],
}, {
    file: 'dag3/DSC01211.JPG',
    ratio: Ratios.V,
    day: Dagen[2],
    beschrijving: 'Strijp R - Studio Piet Hein Eek - Namaak-vissen van gerecycleerde flessen - Beter dan plastic in echte vissen',
    onderwerp: [{ object: Architectuur.StrijpR.RKKeramiekfabriek }],
}, {
    file: 'dag3/DSC01225.JPG',
    ratio: Ratios.H,
    day: Dagen[2],
    beschrijving: 'Strijp R - Diodehof / Persglashof / Anodehof/ Beeldbuisring',
    onderwerp: [{ object: Architectuur.StrijpR.DiodehofPersglashofAnodehofBeeldbuisring }]
}, {
    file: 'dag3/DSC01226.JPG',
    ratio: Ratios.H,
    day: Dagen[2],
    beschrijving: 'Strijp R - RF Portiersloge',
    onderwerp: [{ object: Architectuur.StrijpR.RFPortiersloge }]
}, {
    file: 'dag3/DSC01230.JPG',
    ratio: Ratios.H,
    day: Dagen[2],
    beschrijving: 'Strijp R - RF Portiersloge',
    onderwerp: [{ object: Architectuur.StrijpR.RFPortiersloge }]
}, {
    file: 'dag3/DSC01231.JPG',
    ratio: Ratios.V,
    day: Dagen[2],
    beschrijving: 'Strijp R - RF Portiersloge',
    onderwerp: [{ object: Architectuur.StrijpR.RFPortiersloge }]
}, {
    file: 'dag3/DSC01250.JPG',
    ratio: Ratios.H,
    day: Dagen[2],
    beschrijving: 'Strijp R - Strowoningen',
    onderwerp: [{ object: Architectuur.StrijpR.Strowoningen_Strijp_R }]
}, {
    file: 'dag3/DSC01235.JPG',
    ratio: Ratios.H,
    day: Dagen[2],
    beschrijving: 'Strijp R - Urban Villas',
    onderwerp: [{ object: Architectuur.StrijpR.UrbanVillas }]
}, {
    file: 'dag3/DSC01242.JPG',
    ratio: Ratios.H,
    day: Dagen[2],
    beschrijving: 'Strijp R - Urban Villas',
    onderwerp: [{ object: Architectuur.StrijpR.UrbanVillas }]
}, {
    file: 'dag3/DSC01247.JPG',
    ratio: Ratios.H,
    day: Dagen[2],
    beschrijving: 'Strijp R - Veld 6',
    onderwerp: [{ object: Architectuur.StrijpR.Veld6 }]
},  {
    file: 'dag3/DSC01239.JPG',
    ratio: Ratios.V,
    day: Dagen[2],
    beschrijving: 'Strijp R - Beeldbuisring 17',
    onderwerp: [{ object: Architectuur.StrijpR.Beeldbuisring17 }]
}, {
    file: 'dag3/DSC01266.JPG',
    ratio: Ratios.H,
    day: Dagen[2],
    beschrijving: 'Strijp R - Beeldbuisring 17 en 19',
    onderwerp: [
        { object: Architectuur.StrijpR.Beeldbuisring17 },
        { object: Architectuur.StrijpR.Beeldbuisring19 }]
}, {
    file: 'dag3/DSC01269.JPG',
    ratio: Ratios.H,
    day: Dagen[2],
    beschrijving: 'Strijp R - Deflectiespoelstraat 88',
    onderwerp: [{ object: Architectuur.StrijpR.Deflectiespoelstraat88}],
}, {
    file: 'dag3/DSC01252.JPG',
    ratio: Ratios.H,
    day: Dagen[2],
    beschrijving: 'Strijp R - Elburglaan',
    onderwerp: []
}, {
    file: 'dag3/DSC01255.JPG',
    ratio: Ratios.H,
    day: Dagen[2],
    beschrijving: 'Strijp R - Elburglaan',
    onderwerp: []
}, {
    file: 'dag3/DSC01256.JPG',
    ratio: Ratios.V,
    day: Dagen[2],
    beschrijving: 'Strijp R - Elburglaan 35',
    onderwerp: [{ object: Architectuur.StrijpR.Elburglaan35 }]
}, {
    file: 'dag3/DSC01261.JPG',
    ratio: Ratios.H,
    day: Dagen[2],
    beschrijving: 'Strijp R - Elburglaan 35',
    onderwerp: [{ object: Architectuur.StrijpR.Elburglaan35 }]
}, {
    file: 'dag3/DSC01278.JPG',
    ratio: Ratios.H,
    day: Dagen[2],
    beschrijving: 'Strijp R - Villa Fifty/Fifty',
    onderwerp: [{ object: Architectuur.StrijpR.VillaFiftyFifty }]
}, {
    file: 'dag3/DSC01280.JPG',
    ratio: Ratios.V,
    day: Dagen[2],
    beschrijving: 'Strijp R - Villa Fifty/Fifty',
    onderwerp: [{ object: Architectuur.StrijpR.VillaFiftyFifty }]
}, {
    file: 'dag3/DSC01282.JPG',
    ratio: Ratios.V,
    day: Dagen[2],
    beschrijving: 'Strijp R - Villa Fifty/Fifty',
    onderwerp: [{ object: Architectuur.StrijpR.VillaFiftyFifty }]
}, {
    file: 'dag3/DSC01294.JPG',
    ratio: Ratios.H,
    day: Dagen[2],
    beschrijving: 'Strijp R - Villa Fifty/Fifty',
    onderwerp: [{ object: Architectuur.StrijpR.VillaFiftyFifty }]
}, {
    file: 'dag3/DSC01285.JPG',
    ratio: Ratios.V,
    day: Dagen[2],
    beschrijving: 'Strijp R - Atlashuis',
    onderwerp: [{ object: Architectuur.StrijpR.Atlashuis }]
}, {
    file: 'dag3/DSC01291.JPG',
    ratio: Ratios.H,
    day: Dagen[2],
    beschrijving: 'Strijp R - Atlashuis',
    onderwerp: [{ object: Architectuur.StrijpR.Atlashuis }]
}, {
    file: 'dag3/DSC01295.JPG',
    ratio: Ratios.H,
    day: Dagen[2],
    beschrijving: 'Strijp R - Huis R',
    onderwerp: [{ object: Architectuur.StrijpR.HuisR }]
}, {
    file: 'dag3/DSC01301.JPG',
    ratio: Ratios.V,
    day: Dagen[2],
    beschrijving: 'Bezuidenhoutseweg',
    onderwerp: [],
}, {
    file: 'dag3/DSC01306.JPG',
    ratio: Ratios.H,
    day: Dagen[2],
    beschrijving: 'Philips_de_Jongh-park',
    onderwerp: [{ object: Architectuur.Herdgang.PhilipsDeJonghPark }],
}, {
    file: 'dag3/DSC01313.JPG',
    ratio: Ratios.H,
    day: Dagen[2],
    beschrijving: 'Philips_de_Jongh-park',
    onderwerp: [{ object: Architectuur.Herdgang.PhilipsDeJonghPark }],
}, {
    file: 'dag3/DSC01316.JPG',
    ratio: Ratios.V,
    day: Dagen[2],
    beschrijving: 'Philips_de_Jongh-park',
    onderwerp: [{ object: Architectuur.Herdgang.PhilipsDeJonghPark }],
}, {
    file: 'dag3/DSC01321.JPG',
    ratio: Ratios.H,
    day: Dagen[2],
    beschrijving: 'Philips_de_Jongh-park',
    onderwerp: [{ object: Architectuur.Herdgang.PhilipsDeJonghPark }],
}, {
    file: 'dag3/DSC01326.JPG',
    ratio: Ratios.H,
    day: Dagen[2],
    beschrijving: 'Cabins in the wood',
    onderwerp: [{ object: Architectuur.Vredeoord.CabinsInTheWood }],
}, {
    file: 'dag3/DSC01323.JPG',
    ratio: Ratios.V,
    day: Dagen[2],
    beschrijving: 'VB-gebouw',
    onderwerp: [{ object: Architectuur.Vredeoord.VB }],
}, {
    file: 'dag3/DSC01330.JPG',
    ratio: Ratios.V,
    day: Dagen[2],
    beschrijving: 'VB-gebouw',
    onderwerp: [{ object: Architectuur.Vredeoord.VB }],
}, {
    file: 'dag3/DSC01332.JPG',
    ratio: Ratios.H,
    day: Dagen[2],
    beschrijving: 'VB-gebouw',
    onderwerp: [{ object: Architectuur.Vredeoord.VB }],
}, {
    file: 'dag3/DSC01337.JPG',
    ratio: Ratios.V,
    day: Dagen[2],
    beschrijving: 'Douglashout 1-63',
    onderwerp: [{ object: Architectuur.Vredeoord.Douglashout1 }],
}, {
    file: 'dag3/DSC01344.JPG',
    ratio: Ratios.H,
    day: Dagen[2],
    beschrijving: 'Versiering voor een geboorte',
    onderwerp: [],
}, {
    file: 'dag3/DSC01348.JPG',
    ratio: Ratios.H,
    day: Dagen[2],
    beschrijving: 'Volta-Galvani',
    onderwerp: [
        { object: Architectuur.WoenselWest.VoltaGalvani },
        { object: Architectuur.Limbeek.Bakermat },
    ],
}, {
    file: 'dag3/DSC01351.JPG',
    ratio: Ratios.V,
    day: Dagen[2],
    beschrijving: 'Volta-Galvani',
    onderwerp: [{ object: Architectuur.WoenselWest.VoltaGalvani }],
}, {
    file: 'dag3/DSC01355.JPG',
    ratio: Ratios.H,
    day: Dagen[2],
    beschrijving: 'Volta-Galvani',
    onderwerp: [{ object: Architectuur.WoenselWest.VoltaGalvani }],
}, {
    file: 'dag3/DSC01358 [uitsnede].JPG',
    ratio: Ratios.H,
    day: Dagen[2],
    beschrijving: 'Volta-Galvani',
    onderwerp: [{ object: Architectuur.WoenselWest.VoltaGalvani }],
}, {
    file: 'dag3/DSC01364.JPG',
    ratio: Ratios.H,
    day: Dagen[2],
    beschrijving: 'Volta-Galvani',
    onderwerp: [{ object: Architectuur.WoenselWest.VoltaGalvani }],
}, {
    file: 'dag3/DSC01370.JPG',
    ratio: Ratios.H,
    day: Dagen[2],
    beschrijving: 'Volta-Galvani',
    onderwerp: [{ object: Architectuur.WoenselWest.VoltaGalvani }],
}, {
    file: 'dag3/DSC01373.JPG',
    ratio: Ratios.V,
    day: Dagen[2],
    beschrijving: 'Volta-Galvani',
    onderwerp: [{ object: Architectuur.WoenselWest.VoltaGalvani }],
}, {
    file: 'dag3/DSC01378.JPG',
    ratio: Ratios.H,
    day: Dagen[2],
    beschrijving: 'Volta-Galvani',
    onderwerp: [{ object: Architectuur.WoenselWest.VoltaGalvani }],
}, {
    file: 'dag3/DSC01380.JPG',
    ratio: Ratios.V,
    day: Dagen[2],
    beschrijving: 'Torricellistraat vanuit Edisonstraat',
    onderwerp: [],
}, {
    file: 'dag3/DSC01385.JPG',
    ratio: Ratios.V,
    day: Dagen[2],
    beschrijving: 'Edisonstraat 161 en 163',
    onderwerp: [],
}, {
    file: 'dag3/DSC01387.JPG',
    ratio: Ratios.V,
    day: Dagen[2],
    beschrijving: 'Oversteken op de Marconilaan',
    onderwerp: [],
}, {
    file: 'dag3/DSC01390.JPG',
    ratio: Ratios.H,
    day: Dagen[2],
    beschrijving: 'Bakermat',
    onderwerp: [{ object: Architectuur.Limbeek.Bakermat }],
}, {
    file: 'dag3/DSC01391.JPG',
    ratio: Ratios.V,
    day: Dagen[2],
    beschrijving: 'Plek niet teruggevonden',
    onderwerp: [],
}, {
    file: 'dag3/DSC01396.JPG',
    ratio: Ratios.H,
    day: Dagen[2],
    beschrijving: 'Kruispunt Hemelrijken en Kaneelstraat',
    onderwerp: [],
}, {
    file: 'dag3/DSC01397.JPG',
    ratio: Ratios.V,
    day: Dagen[2],
    beschrijving: 'Bunkertoren',
    onderwerp: [{ object: Architectuur.WoenselseWatermolen.Bunkertoren }],
}, {
    file: 'dag4/DSC01422.JPG',
    ratio: Ratios.V,
    day: Dagen[3],
    beschrijving: "Voordeur in de moderne woonwijk 't Hool (bordeau)",
    onderwerp: [{ object: Architectuur.tHool.tHool }],
}, {
    file: 'dag4/DSC01423.JPG',
    ratio: Ratios.V,
    day: Dagen[3],
    beschrijving: "Voordeur in de moderne woonwijk 't Hool (oranje)",
    onderwerp: [{ object: Architectuur.tHool.tHool }],
}, {
    file: 'dag4/DSC01429.JPG',
    ratio: Ratios.V,
    day: Dagen[3],
    beschrijving: "Fellenoord 15",
    onderwerp: [{ object: Architectuur.Fellenoord.Fellenoord15 }],
}, {
    file: 'dag4/DSC01443.JPG',
    ratio: Ratios.H,
    day: Dagen[3],
    beschrijving: "De Bunker",
    onderwerp: [{ object: Architectuur.WoenselseWatermolen.Bunkertoren }],
}, {
    file: 'dag4/DSC01445.JPG',
    ratio: Ratios.H,
    day: Dagen[3],
    beschrijving: "De Bunker",
    onderwerp: [{ object: Architectuur.WoenselseWatermolen.Bunkertoren }],
}, {
    file: 'dag4/DSC01453.JPG',
    ratio: Ratios.H,
    day: Dagen[3],
    beschrijving: "Flying Pins",
    onderwerp: [{ object: Architectuur.TUe.FlyingPins }],
}, {
    file: 'dag4/DSC01456.JPG',
    ratio: Ratios.V,
    day: Dagen[3],
    beschrijving: "TU/e - Zwarte Doos",
    onderwerp: [{ object: Architectuur.TUe.ZwarteDoos }],
}, {
    file: 'dag4/DSC01461.JPG',
    ratio: Ratios.V,
    day: Dagen[3],
    beschrijving:  'TU/e - Vertigo-gebouw',
    onderwerp: [{ object: Architectuur.TUe.Vertigo }],
}, {
    file: 'dag4/DSC01460.JPG',
    ratio: Ratios.H,
    day: Dagen[3],
    beschrijving:  'TU/e - Een electriciteitskastje - Foto van Expo 58 in Brussel - Het Philipspavilioen met het "Objet Mathématique" in kleur',
    onderwerp: [{ object: Architectuur.TUe.ObjetMathematique }],
}, {
    file: 'dag4/DSC01474.JPG',
    ratio: Ratios.V,
    day: Dagen[3],
    beschrijving:  'TU/e - Objet Mathématique',
    onderwerp: [{ object: Architectuur.TUe.KOE }],
}, {
    file: 'dag4/DSC01471.JPG',
    ratio: Ratios.V,
    day: Dagen[3],
    beschrijving:  'TU/e - KOE - In de wei staat een KOE (Kunstobject/Ontmoetingsplaats Eindhoven)',
    onderwerp: [{ object: Architectuur.TUe.KOE }],
}, {
    file: 'dag4/DSC01468.JPG',
    ratio: Ratios.H,
    day: Dagen[3],
    beschrijving:  'TU/e - Auditorium',
    onderwerp: [{ object: Architectuur.TUe.Auditorium }],
}, {
    file: 'dag4/DSC01575.JPG',
    ratio: Ratios.H,
    day: Dagen[3],
    beschrijving:  'TU/e - Atlas met beeldhouwwerk "Wording"',
    onderwerp: [
        { object: Architectuur.TUe.Atlas },
        { object: Architectuur.TUe.Wording },
    ],
}, {
    file: 'dag4/DSC01475.JPG',
    ratio: Ratios.V,
    day: Dagen[3],
    beschrijving:  'TU/e - Ganzen voor het Atlas-gebouw',
    onderwerp: [{ object: Architectuur.TUe.Atlas }],
}, {
    file: 'dag4/DSC01491.JPG',
    ratio: Ratios.H,
    day: Dagen[3],
    beschrijving:  "TU/e - De benen van Atlas",
    onderwerp: [
        { object: Architectuur.TUe.Atlas },
    ],
}, {
    file: 'dag4/DSC01478.JPG',
    ratio: Ratios.V,
    day: Dagen[3],
    beschrijving:  'TU/e - Slingertrappen van het Atlas-gebouw en het Matrix-gebouw',
    onderwerp: [
        { object: Architectuur.TUe.Atlas },
        { object: Architectuur.TUe.Matrix }
    ],
}, {
    file: 'dag4/DSC01497.JPG',
    ratio: Ratios.H,
    day: Dagen[3],
    beschrijving:  "TU/e - Matrix",
    onderwerp: [
        { object: Architectuur.TUe.Matrix },
    ],
}, {
    file: 'dag4/DSC01488.JPG',
    ratio: Ratios.H,
    day: Dagen[3],
    beschrijving:  'TU/e - Metaforum - een overdekt plein',
    onderwerp: [
        { object: Architectuur.TUe.Metaforum },
    ],
}, {
    file: 'dag4/DSC01494.JPG',
    ratio: Ratios.H,
    day: Dagen[3],
    beschrijving:  "TU/e - Metaforum",
    onderwerp: [
        { object: Architectuur.TUe.Metaforum },
    ],
}, {
    file: 'dag4/DSC01502.JPG',
    ratio: Ratios.V,
    day: Dagen[3],
    beschrijving:  "TU/e - Gemini",
    onderwerp: [
        { object: Architectuur.TUe.Gemini },
    ],
}, {
    file: 'dag4/DSC01508.JPG',
    ratio: Ratios.H,
    day: Dagen[3],
    beschrijving:  "TU/e - Gemini",
    onderwerp: [
        { object: Architectuur.TUe.Gemini },
    ],
}, {
    file: 'dag4/DSC01510.JPG',
    ratio: Ratios.H,
    day: Dagen[3],
    beschrijving:  "TU/e - Gang tussen Metaforum en Gemini",
    onderwerp: [
        { object: Architectuur.TUe.Metaforum },
        { object: Architectuur.TUe.Gemini },
    ],
}, {
    file: 'dag4/DSC01516.JPG',
    ratio: Ratios.H,
    day: Dagen[3],
    beschrijving:  "TU/e - Neuron",
    onderwerp: [
        { object: Architectuur.TUe.Neuron },
    ],
}, {
    file: 'dag4/DSC01524.JPG',
    ratio: Ratios.H,
    day: Dagen[3],
    beschrijving:  "TU/e - Traverse",
    onderwerp: [
        { object: Architectuur.TUe.Traverse },
    ],
}, {
    file: 'dag4/DSC01530.JPG',
    ratio: Ratios.H,
    day: Dagen[3],
    beschrijving:  "TU/e - Fontys",
    onderwerp: [
        { object: Architectuur.TUe.FontysPTHS1 },
    ],
}, {
    file: 'dag4/DSC01539.JPG',
    ratio: Ratios.H,
    day: Dagen[3],
    beschrijving:  "TU/e - Traverse",
    onderwerp: [
        { object: Architectuur.TUe.Flux },
    ],
}, {
    file: 'dag4/DSC01539.JPG',
    ratio: Ratios.H,
    day: Dagen[3],
    beschrijving:  "TU/e - Cascade",
    onderwerp: [
        { object: Architectuur.TUe.Cascade },
    ],
}, {
    file: 'dag4/DSC01545.JPG',
    ratio: Ratios.H,
    day: Dagen[3],
    beschrijving:  "TU/e - Cascade",
    onderwerp: [
        { object: Architectuur.TUe.Cascade },
    ],
}, {
    file: 'dag4/DSC01547.JPG',
    ratio: Ratios.V,
    day: Dagen[3],
    beschrijving:  "TU/e - Cascade",
    onderwerp: [
        { object: Architectuur.TUe.Cascade },
    ],
}, {
    file: 'dag4/DSC01551.JPG',
    ratio: Ratios.H,
    day: Dagen[3],
    beschrijving:  "TU/e - Cascade - Detail",
    onderwerp: [
        { object: Architectuur.TUe.Cascade },
    ],
}, {
    file: 'dag4/DSC01552.JPG',
    ratio: Ratios.H,
    day: Dagen[3],
    beschrijving:  "TU/e - Cascade - Detail",
    onderwerp: [
        { object: Architectuur.TUe.Cascade },
    ],
}, {
    file: 'dag4/DSC01554.JPG',
    ratio: Ratios.V,
    day: Dagen[3],
    beschrijving:  "TU/e - Flux & Qubit",
    onderwerp: [
        { object: Architectuur.TUe.Flux },
        { object: Architectuur.TUe.Qubit },
    ],
}, {
    file: 'dag4/DSC01556.JPG',
    ratio: Ratios.V,
    day: Dagen[3],
    beschrijving:  "TU/e - Cyclotron",
    onderwerp: [
        { object: Architectuur.TUe.Cyclotron },
    ],
}, {
    file: 'dag4/DSC01568.JPG',
    ratio: Ratios.H,
    day: Dagen[3],
    beschrijving:  "TU/e - Cyclotron",
    onderwerp: [
        { object: Architectuur.TUe.Ketelhuis },
        { object: Architectuur.TUe.Gemini },
    ],
}, {
    file: 'dag4/DSC01580.JPG',
    ratio: Ratios.H,
    day: Dagen[3],
    beschrijving:  "Van de ernst van de universiteit in de Tunnel of Silly Walks",
    onderwerp: [
        { object: Architectuur.Binnenstad.TunnelOfSillyWalks },
    ],
}, {
    file: 'dag4/DSC01585.JPG',
    ratio: Ratios.V,
    day: Dagen[3],
    beschrijving:  "De Lage Landen",
    onderwerp: [
        { object: Architectuur.Binnenstad.DeLageLanden },
    ],
}, {
    file: 'dag4/DSC01595.JPG',
    ratio: Ratios.V,
    day: Dagen[3],
    beschrijving:  "De Lage Landen",
    onderwerp: [
        { object: Architectuur.Binnenstad.DeLageLanden },
    ],
}, {
    file: 'dag4/DSC01588.JPG',
    ratio: Ratios.H,
    day: Dagen[3],
    beschrijving:  "Augustijnenkerk",
    onderwerp: [
        { object: Architectuur.Binnenstad.Augustijnenkerk },
    ],
}, {
    file: 'dag4/DSC01590.JPG',
    ratio: Ratios.V,
    day: Dagen[3],
    beschrijving:  "Vestedatoren",
    onderwerp: [
        { object: Architectuur.Binnenstad.Vestedatoren },
    ],
}, {
    file: 'dag4/DSC01604.JPG',
    ratio: Ratios.V,
    day: Dagen[3],
    beschrijving:  "Medina",
    onderwerp: [
        { object: Architectuur.Binnenstad.Medina },
    ],
}, {
    file: 'dag4/DSC01607.JPG',
    ratio: Ratios.V,
    day: Dagen[3],
    beschrijving:  'Stadhuis - Beeldhouwwerk "Communicatie"',
    onderwerp: [
        { object: Architectuur.Binnenstad.Stadhuis },
        { object: Architectuur.Binnenstad.Communicatie },
    ],
}, {
    file: 'dag4/DSC01608.JPG',
    ratio: Ratios.H,
    day: Dagen[3],
    beschrijving:  'Designhuis',
    onderwerp: [
        { object: Architectuur.Binnenstad.Designhuis },
    ],
}, {
    file: 'dag4/DSC01614.JPG',
    ratio: Ratios.H,
    day: Dagen[3],
    beschrijving:  'Van_Abbe-museum',
    onderwerp: [
        { object: Architectuur.Binnenstad.VanAbbeMuseum },
    ],
}, {
    file: 'dag4/DSC01613.JPG',
    ratio: Ratios.H,
    day: Dagen[3],
    beschrijving:  'Van_Abbe-museum',
    onderwerp: [
        { object: Architectuur.Binnenstad.VanAbbeMuseum },
    ],
}, {
    file: 'dag4/DSC01616.JPG',
    ratio: Ratios.H,
    day: Dagen[3],
    beschrijving:  'Stadsplein',
    onderwerp: [
        
    ],
}, {
    file: 'dag4/DSC01655.JPG',
    ratio: Ratios.H,
    day: Dagen[3],
    beschrijving:  'Vestdijktunnel - We kijken net door de vensters van twee treinen in deze tunnel onder het spoor.',
    onderwerp: [
        { object: Architectuur.Binnenstad.Vestdijktunnel },
        { object: Architectuur.Binnenstad.Vestdijktunnel_Handhoven },
    ],
}, ]


export default Fotoos