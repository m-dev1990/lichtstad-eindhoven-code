// export type tStadsobjectMap = { [key: string]: tStadsobject }

export type tStadsobject = tGebouw|tWeg|tKunstwerk|tWijk


export type tGebouw = Immutable<{
    type: 'gebouw',
    // naam: undefined|string|tNaam[],
    // deel_van: undefined|string
    // gebruik: tArchitectuurGebouwGebruik[]
    Philips: boolean|tPhilips2
    TUe: boolean|{
        naam: {
            oud: undefined|{
                naam: string,
                afkorting: string,
            },
            nieuw: string,
        },
        gebruik: undefined|{ faculteit: string, afdeling: undefined|string },
    }
    Strijp: undefined|'S'|'R'|'T'
    wijk: string
    versie: tGebouwVersie_mut[]
    // adres: (tArchitectuurGebouwAdres|tArchitectuurGebouwAdresGroep)[]
    beschrijving: undefined|string
}>

export type tWeg = Immutable<{
    type: 'weg'|'tunnel'|'brug'
    wijk: string
    // naam: undefined|string,
    /*
    gebruik: tArchitectuurGebouwGebruik[],
    */
    Philips: boolean|tPhilips2
    TUe: boolean|{ faculteit: string, afdeling: string }
    Strijp: undefined|'S'|'R'|'T'
    versie: tWegVersie_mut[]
    beschrijving: undefined|string
}>

export type tKunstwerk = Immutable<{
    type: 'kunstwerk'|'pavilioen'|'luifel'|'park'|'fontein'
    wijk: string
    //deel_van: undefined|string
    Philips: boolean
    TUe: boolean|{ faculteit: string, afdeling: string }
    Strijp: undefined|'S'|'R'|'T'
    versie: tKunstwerkVersie_mut[]
    beschrijving: undefined|string
}>

export type tWijk = Immutable<{
    type: 'wijk'
    wijk: string
    Philips: boolean
    TUe: boolean|{ faculteit: string, afdeling: string, }
    Strijp: undefined|'S'|'R'|'T'
    versie: tWijkVersie_mutable[]
    beschrijving: undefined|string
}>

export type tStadsobjectVersie = tGebouwVersie|tKunstwerkVersie|tWegVersie|tWijkVersie

type tGebouwVersie_mut = {
    naam: tNaam[]
    maak: {
        tijd: undefined|number|'bezig'
        ontwerper: undefined|string[]
        project_url: undefined|string ,
    }
    stijl: string[]
    functie: string[]
    plaats: {}|(({
        adres: tAdresStraatGroep2[]
    }|{ straat: string[] })&({ object?: string[] }))|({ adres: tAdresStraatGroep2|tAdresStraatGroep2[] }|{ gebouw: string }|{ object: string }|{ straat: string }|{ complex: string })[]
    hoogte: undefined|number
    complex?: undefined|string|string[]
}

export type tGebouwVersie = Immutable<tGebouwVersie_mut>

type tKunstwerkVersie_mut = {
    naam: tNaam[]
    maak: {
        tijd: undefined|number|'bezig'
        ontwerper: undefined|string[]
        project_url: undefined|string
    }
    stijl: string[]
    plaats: tPlaats2|({
        adres: (tAdresStraatGroep2|tAdresStraatGroep2[])
    }|{ gebouw: string }|{ object: string }|{ straat: string })[]
}

export type tKunstwerkVersie = Immutable<tKunstwerkVersie_mut>

type tWegVersie_mut = {
    naam: tNaam[]
    maak: {
        tijd: undefined|number|'bezig'
        ontwerper: undefined|string[]
        project_url: undefined|string
    }
    stijl: string[]
    plaats: {
        adres: (tAdresStraatGroep2|tAdresStraatGroep2[])
    }|{
        straat: string
    }|({
        adres: (tAdresStraatGroep2|tAdresStraatGroep2[])
    }|{ gebouw: string }|{ object: string }|{ straat: string })[]
}

export type tWegVersie = Immutable<tWegVersie_mut>

type tWijkVersie_mutable = {
    naam: tNaam[]
    maak: {
        tijd: undefined|number|'bezig'
        ontwerper: undefined|string[]
        project_url: undefined|string
    }
    stijl: string[]
}

export type tWijkVersie = Immutable<tWijkVersie_mutable>

export type tNaam = string|{
    afkorting: undefined|string
    naam: undefined|string
}

export type tPhilips2 = {
    naam: {
        oud: {
            naam: undefined|string
            afkorting: undefined|string
        },
        nieuw: undefined|string
    }
}

export type tPlaats2 = {}|(({
    adres: tAdresStraatGroep2[]
}|{ straat: string[] })&({ object?: string[] }))

export type tAdresGroep = {
    groep: true,
    straat: string,
    even: undefined|boolean,
    huisnummer: number[]
}

/*
export type tAdresGroep2 = {
    groep: true,
    adres: tAdresStraatGroep2[],
}*/

export type tAdresStraatGroep2 = {
    straat: string,
    huisnummer: undefined|number|[number, string]|number[]|tAdresHuisnummerReeks2|$AdresHuisnummerAll,
}

export type tAdresHuisnummerReeks2 = {
    even: undefined|boolean
    reeks: [number, number],
}

export type $AdresHuisnummerAll = typeof $AdresHuisnummerAll
export let $AdresHuisnummerAll = Symbol()

export type tAdres = {
    straat: undefined|string,
    huisnummer: undefined|number
}

/*
export type tArchitectuurGebouwGebruik = {
    maak: number
    naam: undefined|string,
    tijd: undefined|number,
    functie: ('kantoor'|'woning'|'horeca'|'fabriek'|'onderzoek'|'onderwijs')[],
}
*/

type ImmutablePrimitive = undefined | null | boolean | string | number | Function;

export type Immutable<T> =
    T extends ImmutablePrimitive ? T :
    T extends Array<infer U> ? ImmutableArray<U> :
    T extends Map<infer K, infer V> ? ImmutableMap<K, V> :
    T extends Set<infer M> ? ImmutableSet<M> : ImmutableObject<T>;

export type ImmutableArray<T> = ReadonlyArray<Immutable<T>>;
export type ImmutableMap<K, V> = ReadonlyMap<Immutable<K>, Immutable<V>>;
export type ImmutableSet<T> = ReadonlySet<Immutable<T>>;
export type ImmutableObject<T> = { readonly [K in keyof T]: Immutable<T[K]> };

export type tStadsobjectMap<zWijkMap> = { [key in keyof zWijkMap ]: 
    zWijkMap[key] extends { type: 'gebouw' } ? tGebouw :
    zWijkMap[key] extends { type: 'kunstwerk'|'pavilioen'|'luifel'|'park'|'fontein' } ? tKunstwerk :
    zWijkMap[key] extends { type: 'wijk' } ? tWijk :
    zWijkMap[key] extends { type: 'weg'|'brug'|'tunnel' } ? tWeg : never
}
