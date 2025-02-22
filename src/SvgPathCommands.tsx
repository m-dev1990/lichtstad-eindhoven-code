const create_function_point = (code: string) => {
  return (point: number[]) => {
    let points = [point].flat()
    return {
      type: code,
      points: points,
    }
  }
}

const create_function_points = (code: string) => {
  return (points: number[][]) => {
    return {
      type: code,
      points: points.flat(),
    }
  }
}

export const M  = (point: number[]) => {
    let points = [point].flat()
    return {
      type: 'M',
      points: points,
    }
}

export const Q = (points: number[][]) => {
  let numbers = points.flat()
  return {
    type: 'Q',
    points: numbers,
  }
}

export const q = (points: number[][]) => {
  let numbers = points.flat()
  return {
    type: 'q',
    points: numbers,
  }
}

export const c = (points: number[][], point: number[]) => {
  let numbers = [...points, point].flat()
  return {
    type: 'c',
    points: numbers,
  }
}

export const s = (point1: number[], point2: number[]) => {
  let numbers = [point1, point2].flat()
  return {
    type: 's',
    points: numbers,
  }
}
export const t = (point: number[]) => {
  let numbers = [point].flat()
  return {
    type: 't',
    points: numbers,
  }
}

export const l = (point: number[]) => {
  let numbers = [point].flat()
  return {
    type: 'l',
    points: numbers,
  }
}

export const L = (point: number[]) => {
  let numbers = [point].flat()
  return {
    type: 'L',
    points: numbers,
  }
}

export const A = (center_point: number[], rotation: number, large_arc: 0|1, sweep: 0|1, end_point: number[]) => {
  let numbers = [center_point, rotation, large_arc, sweep, end_point].flat()
  return {
    type: 'A',
    points: numbers,
  }
}

export const a = (center_point: number[], rotation: number, large_arc: 0|1, sweep: 0|1, end_point: number[]) => {
  let numbers = [center_point, rotation, large_arc, sweep, end_point].flat()
  return {
    type: 'a',
    points: numbers,
  }
}

export const Z = () => {
  return {
    type: 'Z',
    points: [],
  }
}

export const render_path = (segments: { type: string, points: number[] }[]) => {
  return segments.map(a => a.type + a.points.join(' ')).join(' ')
}