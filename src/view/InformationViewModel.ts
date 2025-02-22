import * as t from "../data/_types";

export type tFotoViewModel = ReturnType<typeof buildFotoViewModel>
export type tStadsobjectViewModel = ReturnType<typeof buildStadsobjectViewModel>

export function buildFotoViewModel(foto_index: number, foto: t.tFoto) {
  let onderwerp = foto.onderwerp.map((o, i) => ({ object: buildStadsobjectViewModel(foto, i,  o.object) }))
  let is_empty = onderwerp.every(o => o.object.is_empty)
  
  return {
    index: foto_index,
    is_empty: is_empty,
    onderwerp: onderwerp,
  }
}

export function buildStadsobjectViewModel(foto: t.tFoto, i: number, o: t.tStadsobject) {
    let last_versie = o.versie.slice().reverse().filter(x => x.naam.length >= 1)[0]
    
    let naam
    if (last_versie !== undefined) {
      naam = last_versie.naam.map(x => {
        if (typeof x === 'string') {
          return x
        }

        if (x.naam !== undefined && x.afkorting !== undefined) {
          return `${x.naam} (${x.afkorting})`
        }

        if (x.naam !== undefined) {
          return x.naam
        }

        if (x.afkorting !== undefined) {
          return x.afkorting
        }
      }).join('/')
    } else {
      if (o.type === 'gebouw') {
        let versie = o.versie.slice().reverse().filter(x => 'adres' in x.plaats)[0]
        if (!('adres' in versie.plaats)) throw new Error()
        
        naam = versie.plaats.adres.map(x => {
          let huisnummer
          if (typeof x.huisnummer === 'number') {
            huisnummer = x.huisnummer.toString()
          } else if (Array.isArray(x.huisnummer)) {
            huisnummer = x.huisnummer.join(',')
          } else if (typeof x.huisnummer === 'object') {
            if (x.huisnummer instanceof Array) throw new Error()
            huisnummer = `${x.huisnummer.reeks[0]}-${x.huisnummer.reeks[1]}`
          }

          let adres
          if (huisnummer !== undefined) {
            adres = `${x.straat} ${huisnummer}`
          } else {
            adres = x.straat
          }
          return adres
        }).join(' / ')
      }
    }

    let TUe
    if (typeof o.TUe === 'object') {
      TUe = true
    } else if (typeof o.TUe === 'boolean') {
      TUe = o.TUe
    } else throwModelBuildError(foto)

    if (o.versie[0] === undefined) throw new Error()
    
    let bouw = buildVersieViewModel(foto, o, o.versie[0])
    let arr_renovatie = o.versie.slice(1).map(v => buildVersieViewModel(foto, o, v))

    let beschrijving = o.beschrijving

    let is_empty = bouw.is_empty && (arr_renovatie.length === 0 || arr_renovatie.every(x => x.is_empty))

    return {
      is_empty: is_empty,
      index: i,
      naam: naam,
      Philips: o.Philips,
      TUe: TUe,
      Strijp: o.Strijp,
      bouw: bouw,
      renovatie: arr_renovatie,
      beschrijving: beschrijving,
    }
}

export type tVersieViewModel = ReturnType<typeof buildVersieViewModel>
function buildVersieViewModel(foto: t.tFoto, o: t.tStadsobject, v: t.tStadsobjectVersie) {
  let type
  if (o.versie[0] === v) {
    type = 'bouw'
  } else {
    type = 'renovatie'
  }
  console.log('information view model:', v)
  let ontwerper_kv
  if (v.maak.ontwerper === undefined || v.maak.ontwerper.length === 0) {
    ontwerper_kv = undefined
  } else {
    let ontwerper = join_nl(v.maak.ontwerper)

    let key = ''
    if (o.type === 'gebouw' || o.type === 'weg' || o.type === 'luifel' || o.type === 'wijk' || o.type === 'park') {
      key = 'architect'
    } else if (o.type === 'kunstwerk' || o.type === 'fontein') {
      key = 'kunstenaar'
    } else throwModelBuildError(foto)
    let label = key[0].toUpperCase() + key.substring(1)

    ontwerper_kv = {
      label: label,
      value: ontwerper,
    }
  }

  let tijd
  if (typeof v.maak.tijd === 'number') {
    tijd = v.maak.tijd.toString()
  } else if (v.maak.tijd === 'bezig') {
    tijd = 'In opbouw'
  } else if (tijd === undefined) {
    tijd = undefined
  } else throwModelBuildError(foto)

  let project_url = v.maak.project_url

  let is_empty = ontwerper_kv === undefined && tijd === undefined
  
  return {
    is_empty: is_empty,
    maak: {
      type: type,
      ontwerper: ontwerper_kv,
      tijd: tijd,
      project_url: project_url,
    },
  }
}

function join_nl(words: t.ImmutableArray<string>) {
  let parts = [...(function * join_nl_gtor() {
    for (let i = 0; i < words.length - 2; ++i) {
      yield words[i]
      yield ', '
    }
    if (words[words.length - 2]) {
      yield words[words.length - 2]
      yield ' en '
    }
    yield words[words.length - 1]
  })()]

  return parts.join('')
}

function throwModelBuildError(f: t.tFoto) {
  console.error(f)
  throw new Error()
}