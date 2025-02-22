import React from 'react'
import './InformationView.css'
import Fotoos from '../data/Fotoos'
import { render_path, M, L, Z } from '../SvgPathCommands'
import * as vm from './InformationViewModel'

type tProps = {
  photo_view_index: number
  photo_view_model: vm.tFotoViewModel
  information_is_shown: boolean
}

type tState = {
  description_index_shown: undefined|number,
}

export default class InformationView extends React.Component<tProps, tState> {
  ref_el_join_line_vertical_zone: React.RefObject<HTMLDivElement>
  ref_el_join_line_vertical_margin: React.RefObject<HTMLDivElement>
  arr_ref_el_join_line_vertical: React.RefObject<HTMLDivElement>[]
  arr_ref_el_join_line_horizontal: React.RefObject<HTMLDivElement>[][]

  constructor(p: tProps) {
    super(p)

    this.ref_el_join_line_vertical_zone = React.createRef()
    this.ref_el_join_line_vertical_margin = React.createRef()
    this.arr_ref_el_join_line_horizontal = [[React.createRef(), React.createRef()], [React.createRef(), React.createRef()]]
    this.arr_ref_el_join_line_vertical = [React.createRef(), React.createRef()]

    this.state = {
      description_index_shown: undefined,
    }
  }

  componentDidUpdate(prevProps: Readonly<tProps>, prevState: Readonly<tState>, snapshot?: any): void {
    this.draw_correct_join_lines()
  }

  assert_and_unref_refs() {
    let arr_el_join_line_horizontal = this.arr_ref_el_join_line_horizontal.map(a => {
      return a.map(a2 => {
        if (a2.current == null) throw new Error()
        return a2.current
      })
    })

    let arr_el_join_line_vertical = this.arr_ref_el_join_line_vertical.map(a => {
      if (a.current == null) throw new Error()
      return a.current
    })

    let el_join_line_vertical_margin = this.ref_el_join_line_vertical_margin.current
    if (el_join_line_vertical_margin == null) throw new Error()

    let el_join_line_vertical_zone = this.ref_el_join_line_vertical_zone.current
    if (el_join_line_vertical_zone == null) throw new Error()

    return [
      arr_el_join_line_horizontal,
      arr_el_join_line_vertical,
      el_join_line_vertical_margin,
      el_join_line_vertical_zone,
    ] as const
  }

  handle_click_cmd_show_description = (e: React.MouseEvent, o: { object: vm.tStadsobjectViewModel }) => {
    let descripiton_index_shown_new
    if (this.state.description_index_shown !== o.object.index) {
      descripiton_index_shown_new = o.object.index
    } else {
      descripiton_index_shown_new = undefined
    }
    
    this.setState({
      description_index_shown: descripiton_index_shown_new,
    })
  }

  get description_is_shown() {
    return this.description !== undefined
  }

  get description() {
    if (!this.props.information_is_shown) return undefined
    if (this.props.photo_view_model.is_empty) return undefined
    let description_index_shown = this.state.description_index_shown
    if (description_index_shown === undefined) return undefined

    return this.props.photo_view_model.onderwerp[description_index_shown].object.beschrijving
  }
  
  render() {
    if (!this.props.information_is_shown) return

    if (this.props.photo_view_model.is_empty) return
    
    return <div className={ "Information " + (this.description_is_shown ? '_description' : '') }>
      <div className="Information_content">
        <div className="Information_details">
          { this.props.photo_view_model.onderwerp.map((o, i) => {
              return <div key={ i } className={ 'Information_panel ' + (o.object.Philips ? '_Philips' : '') }>
                  <div className="Information_top_right_corner">
                    { this.render_join_line_onderwerp(o, 'left', 'top') }
                  </div>
                  { this.render_Philips(o) }
                  <div className="Information_panel_content">{ [...this.render_onderwerp(o)] }</div>
                  <div className="Information_bottom_right_corner">
                    { this.render_join_line_onderwerp(o, 'left', 'bottom') }
                    { this.render_cmd_show_description(o) }
                  </div>
                </div>
            })
          }
        </div>
        <div ref={ this.ref_el_join_line_vertical_margin } className="Information_join_line_vertical_margin">
          { this.description !== undefined ? <div ref={this.ref_el_join_line_vertical_zone} className="Information_join_line_vertical_zone">
              <div ref={this.arr_ref_el_join_line_vertical[0]} className="Information_join_line_vertical"></div>
              <div ref={this.arr_ref_el_join_line_vertical[1]} className="Information_join_line_vertical"></div>
            </div> : ''}
        </div>
        <div className="Information_description">
          { this.description !== undefined ? <div className="Information_description_panel">
            <div className="Information_top_left_corner">
              { this.render_join_line_horizontal('right', 'top') }
            </div>
            <div className="Information_description_panel_content">
              { this.render_line_breaks(this.description, "Information_description_paragraph") }
            </div>
            <div className="Information_bottom_left_corner">
              { this.render_join_line_horizontal('right', 'bottom') }
            </div>
          </div>: '' }
        </div>
      </div>
    </div>
  }

  *render_onderwerp(o: { object: vm.tStadsobjectViewModel }) {
    yield this.render_bar_top(o)
    yield * this.render_feiten(o)
  }

  render_bar_top(o: { object: vm.tStadsobjectViewModel }) {
    return <div key="bar_top" className="Information_bar_top">
      <div key="head_bar" className="Information_bar_top_left">
        { this.render_naam(o) }
        { this.render_project_url(o.object.bouw.maak.project_url, 32) }
      </div>
      <div className="Information_bar_top_right">
        { this.render_TUe(o) }
        { this.render_Strijp(o) }
      </div>
    </div>
  }

  render_naam(o: { object: vm.tStadsobjectViewModel }) {
    if (o.object.naam) {
      return <div key="naam" className="Information_naam">
        { o.object.naam }
      </div>
    }
  }

  render_TUe(o: { object: vm.tStadsobjectViewModel }) {
    if (o.object.TUe) {
      return <div key="TUe" className="Information_TUe">
        TU/e
      </div>
    }
  }

  render_Strijp(o: { object: vm.tStadsobjectViewModel }) {
    if (o.object.Strijp) {
      return <div key="Strijp" className="Information_strijp">
        <div className={ 'Information_strijp_letter ' + (o.object.Strijp ==='S' ? '_active' : '') }>
          S
        </div>
        <div className={ 'Information_strijp_letter ' + (o.object.Strijp ==='T' ? '_active' : '') }>
          T
        </div>
        <div className={ 'Information_strijp_letter ' + (o.object.Strijp ==='R' ? '_active' : '') }>
          R
        </div>
        <div className={ 'Information_strijp_letter _niet_gebouwd' }>
          I
        </div>
        <div className={ 'Information_strijp_letter _niet_gebouwd' }>
          J
        </div>
        <div className={ 'Information_strijp_letter _niet_gebouwd' }>
          P
        </div>
      </div>
    }
  }

  *render_feiten(o: { object: vm.tStadsobjectViewModel }) {
    yield <div key="bouw" className="Information_maak">
      <div className="Information_maak_content">
        { [...this.render_bouw_content(o, o.object.bouw)] } 
      </div>
    </div>

    if (o.object.renovatie.length === 0 || o.object.renovatie.every(x => x.is_empty)) return

    for (let [i, m] of this.index(o.object.renovatie)) {
      yield <div key={`renovatie_${i}`} className="Information_maak">
        <div className="Information_bar_renovatie">
          <div className="Information_bar_renovatie_left">
            <div className="Information_renovatie">
              Renovatie
            </div>
            <div className="Information_renovatie_link">
              { this.render_project_url(m.maak.project_url, 28) }
            </div>
          </div>
        </div>
        <div className="Information_maak_content">
          { [...this.render_renovatie_content(o, m)] }
        </div>
      </div>
    }
  }

  *index<T>(array: T[]): Generator<[number, T]> {
    for (let i = 0; i < array.length; ++i) {
      yield [i, array[i]]
    }
  }

  *render_bouw_content(o: { object: vm.tStadsobjectViewModel }, versie: vm.tVersieViewModel) {
    yield this.render_ontwerper(o, versie)
    yield this.render_maaktijd(o, versie)
  }

  *render_renovatie_content(o: { object: vm.tStadsobjectViewModel }, versie: vm.tVersieViewModel) {
    yield this.render_ontwerper(o, versie)
    yield this.render_maaktijd(o, versie)
  }

  render_ontwerper(o: { object: vm.tStadsobjectViewModel }, versie: vm.tVersieViewModel) {
    if (versie.maak.ontwerper === undefined) return undefined

    return this.render_key_value('ontwerper', versie.maak.ontwerper.label, versie.maak.ontwerper.value)
  }

  render_key_value(key: string, label: string, value: string) {
    return <div key={ key } className="Information_item">
      <div className="Information_label">{ label }:</div>
      <div className="Information_value">{ value }</div>
    </div>
  }

  *render_join_nl(words: string[]) {
    for (let i = 0; i < words.length - 2; ++i) {
      yield words[i]
      yield ', '
    }
    if (words[words.length - 2]) {
      yield words[words.length - 2]
      yield ' en '
    }
    yield words[words.length - 1]
  }

  render_maaktijd(o: { object: vm.tStadsobjectViewModel }, versie: vm.tVersieViewModel) {
    if (versie.maak.tijd === undefined) return undefined
    return this.render_key_value('jaar', 'Jaar', versie.maak.tijd) 
  }

  render_project_url(project_url: string|undefined, size: number) {
    if (project_url) {
      let triangle_height = size / 10 * 7
      let triangle_width = (3)**(1/2) / 2 * triangle_height
      let center = size / 2

      return <div className="Information_project_url">
        <a className="Information_project_link" href={ project_url } target="_blank">
          <svg width={ size } height={ size } viewBox={ `0 0 ${size} ${size}`}>
            <path d={ render_path([
              M([0, center]),
              L([center - triangle_width / 2, center])
            ]) } stroke="var(--clr_foreground)" />
            <path d={ render_path([
              M([center - triangle_width / 2, center - triangle_height / 2]),
              L([center + triangle_width / 2, center]),
              L([center - triangle_width / 2, center + triangle_height / 2]),
              Z()
            ]) } stroke="var(--clr)" fill="transparent" />
            <path d={ render_path([
              M([center + triangle_width / 2, center - triangle_height / 2]),
              L([center + triangle_width / 2, center + triangle_height / 2]),
            ])} stroke="var(--clr)" fill="transparent" />
          </svg>
        </a>
      </div>
    }
  }

  render_Philips(o: { object: vm.tStadsobjectViewModel }) {
    if (!o.object.Philips) return

    return <svg xmlns="http://www.w3.org/2000/svg"
      className="Information_Philips" width="50" height="50" viewBox="0 0 192.756 192.756">
      <g fillRule="evenodd" clipRule="evenodd">
        <pattern id="svg_pattern_bakeliet" width="100%" height="100%">
          <image href="/assets/images/bakeliet textuur.png" />
        </pattern>
        <path className="Information_Philips_background"
          d="M166.133 2.834H26.624v99.39c0 30.643 1.412 44.15 14.919 61.086 14.112 17.539 34.07 26.611 55.239 26.611 19.959 0 41.127-9.072 55.238-27.016 13.105-16.531 14.113-29.232 14.113-60.682V2.834z" />
        
        <path d="M166.133 2.834H26.624v99.39c0 30.643 1.412 44.15 14.919 61.086 14.112 17.539 34.07 26.611 55.239 26.611 19.959 0 41.127-9.072 55.238-27.016 13.105-16.531 14.113-29.232 14.113-60.682V2.834zM30.454 6.867h132.05v96.366c0 27.82-.807 40.926-14.314 57.859-11.895 14.92-30.643 24.395-51.61 24.395-20.765 0-40.522-9.879-52.618-25.402-13.104-16.934-13.507-28.627-13.507-59.875V6.867h-.001zm128.823 112.897c0-34.272-27.82-62.294-62.698-62.294-34.876 0-62.899 28.022-62.899 62.294 0 34.877 28.023 62.9 62.497 62.9 34.876 0 63.1-28.225 63.1-62.9zM54.243 29.648c0-9.274-8.467-9.274-18.749-9.274v23.587h6.451V38.72c8.064 0 12.298-3.225 12.298-9.072zm8.871-9.274h-5.847v23.587h5.847v-8.87h6.25v8.87h6.25V20.374h-6.25v8.669h-6.25v-8.669zm24.192 0H81.46v23.587h5.846V20.374zm12.096 0h-6.048v23.587h12.298V38.72h-6.25V20.374zm15.524 0h-6.049v23.587h6.049V20.374zm24.797 9.274c0-9.274-9.477-9.274-18.547-9.274v23.587h6.047V38.72c6.855 0 12.5-2.218 12.5-9.072zm2.418 9.072v5.645c2.018.202 3.227.403 4.639.403 7.256 0 10.684-3.428 10.684-8.467 0-7.661-8.668-5.242-8.668-8.467 0-1.008 1.41-1.613 4.031-1.613h2.219v-5.847c-8.67 0-13.709 1.209-13.709 7.258 0 8.266 9.273 6.653 9.273 9.274 0 1.008-2.016 1.814-4.84 1.814h-3.629zM38.317 114.725c5.645-2.42 9.475-3.428 13.91-3.428 12.499 0 16.33 8.064 30.039 8.064 10.282 0 18.547-8.064 30.441-8.064 10.08 0 19.959 7.861 27.822 7.861 7.459 0 12.297-2.619 14.312-3.83l.203 2.42c-3.832 2.822-7.461 4.436-13.709 4.436-11.09 0-17.742-8.064-28.83-8.064-11.895 0-19.152 8.266-30.24 8.266-12.297 0-18.345-7.863-29.635-7.863-4.637 0-10.685 1.412-14.313 2.822v-2.62zM67.75 69.363c6.451-3.427 8.266-4.032 13.104-5.443L79.242 74l-10.483 1.814-1.009-6.451zm0 41.934l2.419-17.338 19.354-3.226-6.854-1.209 1.613-10.887 11.29-2.419L84.282 74l-1.613-10.685c5.645-1.209 8.467-1.613 13.306-1.613 31.652 0 52.416 21.975 58.465 49.19-3.023 2.219-7.057 4.033-13.508 4.033-11.49 0-16.732-8.064-29.434-8.064-12.5 0-17.942 8.467-29.837 8.467-6.452 0-10.483-1.611-13.911-4.031zm1.009-34.273l10.483 1.613 1.209 10.281-10.282-1.411-1.41-10.483zm-30.644 45.16c9.274-3.025 10.483-3.428 14.112-3.428 12.701 0 17.539 8.064 29.837 8.064 9.878 0 18.951-8.467 30.24-8.467 10.482 0 16.33 8.062 28.828 8.062 4.234 0 8.064-1.008 13.912-3.225v2.217c-5.041 3.025-8.469 4.033-14.516 4.033-12.5 0-17.742-7.863-28.426-7.863-12.701 0-18.346 8.064-30.241 8.064-11.491 0-18.346-7.863-30.24-7.863-3.024 0-6.854.807-13.306 2.822l-.2-2.416zm.605 6.652c5.443-2.016 8.87-2.822 13.104-2.822 12.097 0 17.942 8.266 29.837 8.266 11.29 0 18.345-8.266 30.239-8.266 5.646 0 9.678 1.41 13.307 3.83l-2.016 16.129-19.557 3.629 6.855 1.611-1.209 10.484-11.895 2.42 11.895 3.023 1.814 9.475c-5.242 1.211-8.469 1.613-13.508 1.613-30.642.001-54.431-21.369-58.866-49.392zm0-18.75c1.612-8.467 2.822-11.691 6.451-18.344l18.547 2.217 1.814 16.33c-6.451-2.621-9.677-3.428-12.902-3.428-4.838 0-10.08 1.614-13.91 3.225zm73.987 41.531l10.484 1.209 1.008 9.879-10.281-1.008-1.211-10.08zm.605 24.192l.605-8.668 10.482-2.016 1.008 5.443c-4.231 2.62-6.046 3.426-12.095 5.241zM41.945 26.221c3.629 0 5.04.604 5.04 3.226 0 3.024-1.411 3.831-5.04 3.831v-7.057zm85.278 0c3.629 0 5.242.202 5.242 3.629 0 2.822-2.219 3.427-5.242 3.427v-7.056zm.404 104.832c5.039 1.613 9.273 2.621 14.111 2.621 4.234 0 6.652-.604 12.5-3.225-1.008 6.652-3.025 12.096-6.049 17.338l-19.152-1.814-1.41-14.92zm.402 38.304l1.008-16.531 17.338-2.418c-5.039 8.668-8.668 12.699-18.346 18.949zM46.381 89.725c5.04-7.862 9.475-13.306 19.354-19.354l-2.017 17.136-17.337 2.218z"
          fill="var(--clr_foreground)" />
      </g>
    </svg>
  }

  render_join_line_onderwerp(o: { object: vm.tStadsobjectViewModel }, side: 'left'|'right', vertical_position: 'top'|'bottom') {
    if (o.object.index === this.state.description_index_shown) {
      return this.render_join_line_horizontal(side, vertical_position)
    }
  }

  render_join_line_horizontal(side: 'left'|'right', vertical_position: 'top'|'bottom') {
    let classNameSide = side === 'left' ? '_left' : '_right'
    let classNameVerticalPosition = vertical_position === 'top' ? '_top' : '_bottom'

    let i_ref_1 = side === 'left' ? 0 : 1
    let i_ref_2 = vertical_position === 'top' ? 0 : 1
    let ref_el = this.arr_ref_el_join_line_horizontal[i_ref_1][i_ref_2]

    return <div ref={ref_el} className={ `Information_join_line_horizontal ${classNameSide} ${classNameVerticalPosition}`}>
      </div>
  }

  render_cmd_show_description(o: { object: vm.tStadsobjectViewModel }) {
    if (o.object.beschrijving !== undefined) {
      let is_shown = o.object.index === this.state.description_index_shown;
      return <svg className={ "Information_cmd_show_description " + (is_shown ? '_is_shown' : '') }
        width={25} height={25} viewBox="0 0 25 25"
        onClick={ (ev) => this.handle_click_cmd_show_description(ev, o) }>
          {/* diameter = 25: r * 2 + strokeWidth / 2 * 2 */}
        <circle className="circle" r={12} cx={12.5} cy={12.5} strokeWidth={1} />
        <circle className="ellipsis" r="0.5" cx="6.5"  cy="12.5" />
        <circle className="ellipsis" r="0.5" cx="12.5" cy="12.5" />
        <circle className="ellipsis" r="0.5" cx="18.5" cy="12.5" />
      </svg>
    }
  }

  render_line_breaks(text: string, className: string) {
    return text.split(/\n\r?\n\r?/).map((x, i) => <div key={i} className={ className }>{x}</div>)
  }

  draw_correct_join_lines() {
    if (this.description === undefined) return
    
    let [arr_el_join_line_horizontal, arr_el_join_line_vertical, el_join_line_vertical_margin, el_join_line_vertical_zone] = this.assert_and_unref_refs()

    set_join_line_horizontal_width: {
      let space_width = el_join_line_vertical_margin.clientWidth

      for (let i_y = 0; i_y < 2; ++i_y) {
        for (let i_x = 0; i_x < 2; ++i_x) {
          arr_el_join_line_horizontal[i_y][i_x].style.width = space_width / 2 + 'px'
        }
      }
    }

    set_join_line_vertical_position: {
      let height_join_line_vertical_zone = el_join_line_vertical_zone.getBoundingClientRect().height
      let position_y_join_line_vertical_zone = el_join_line_vertical_zone.getBoundingClientRect().y
  
      for (let i = 0; i < 2; ++i) {
        let pos_y_join_line_horizontal = [0, 1].map(j => {
          return arr_el_join_line_horizontal[j][i].getBoundingClientRect().y - position_y_join_line_vertical_zone
        })
  
        let min_top = extreme(pos_y_join_line_horizontal, 'min')
        let max_top = extreme(pos_y_join_line_horizontal, 'max')
  
        arr_el_join_line_vertical[i].style.top = min_top.value + 'px'
        arr_el_join_line_vertical[i].style.bottom = (height_join_line_vertical_zone - max_top.value - 1) + 'px'
      }
    }
  }
}

/**
 * @description This function is EXTREME! And by EXTREME I mean THE MOST EXTREME!
 * When called, it will return you THE MOST EXTREME value of all values!
 * It will return it in a blink of an eye with a complete certainty equal to the laws of the universe.
 * If this makes sense, it is even more EXTREME THAN THE MOST EXTREME!
 * It will return you THE MOST EXTREME value in any direction, be it minimum or maximum!
 * This makes its result THE MOST EXTREME in any imaginable way.
 * Because of this, this function forced me to call it
 * ... by its only possible name with the same certainty of the laws of the universe.
 * Because it is the definition of EXTREME,
 * ... this function is just plainly and simply referred to as: `extreme`.
 */
function extreme(array: number[], extreme: 'min'|'max') {
  let extreme_index = 0
  let extreme_value = array[0]
  if (extreme === 'min') {
    for (let i = 1; i < array.length; ++i) {
      if (array[i] < extreme_value) {
        extreme_index = i
        extreme_value = array[i]
      }
    }
  } else {
    for (let i = 1; i < array.length; ++i) {
      if (array[i] > extreme_value) {
        extreme_index = i
        extreme_value = array[i]
      }
    }
  }

  return { index: extreme_index, value: extreme_value }
}