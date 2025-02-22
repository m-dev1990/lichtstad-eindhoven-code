import React from 'react'
import { t, Q, q, M, L, l, A, Z, render_path } from '../SvgPathCommands.tsx'
import Fotoos from '../data/Fotoos.ts'
import GolvenView from './GolvenView.tsx'

type tProps = {
  photo_index_view: number
  photo_index_next: number
  information_is_empty: boolean
  information_is_shown: boolean
  mark_mouse_over_tuner: (is_mouse_over_tuner: boolean) => void
  move_by: (delta: number) => void
  move_to: (photo_index_new: number) => void
  toggle_show_information: () => void
}

export default class BottomPanelView extends React.Component<tProps> {
  ref_el_onderwerp_text: React.RefObject<HTMLDivElement>
  ref_el_onderwerp_text_container: React.RefObject<HTMLDivElement>
  ref_el_onderwerp_text_content: React.RefObject<HTMLDivElement>

  constructor(p: tProps) {
    super(p)

    this.ref_el_onderwerp_text = React.createRef()
    this.ref_el_onderwerp_text_container = React.createRef()
    this.ref_el_onderwerp_text_content = React.createRef()
  }

  componentDidMount(): void {
    this.maybe_animate_text() 
  }

  componentDidUpdate(prevProps: Readonly<tProps>, prevState: Readonly<{}>, snapshot?: any): void {
    this.maybe_animate_text()
  }

  maybe_animate_text() {
    let el_onderwerp_text = this.ref_el_onderwerp_text.current
    if (el_onderwerp_text == null) throw new Error()
    let el_onderwerp_text_container = this.ref_el_onderwerp_text_container.current
    if (el_onderwerp_text_container == null) throw new Error()
    let el_onderwerp_text_content = this.ref_el_onderwerp_text_content.current
    if (el_onderwerp_text_content == null) throw new Error()

    let text_with_margin_width = el_onderwerp_text_container.clientWidth
    let text_width = el_onderwerp_text_content.clientWidth
    el_onderwerp_text.style.setProperty('--width', text_with_margin_width.toString())
    
    // <=> TRIED ALTERNATIVE
    // make animation duration calculate to 0
    //    using a css calc(...) containing var(--width),
    //    when text-width is smaller than element-width
    // ISSUE: the width of the el_onderwerp_text_container was larger (800 instead of 590)
    // REASON: unknown
    let is_class_active = text_width > el_onderwerp_text.clientWidth
    el_onderwerp_text.classList.toggle('_animated', is_class_active)
  }

  handle_mouse_enter = (e: React.MouseEvent) => {
    this.props.mark_mouse_over_tuner(true)
  }

  handle_mouse_leave = (e: React.MouseEvent) => {
    this.props.mark_mouse_over_tuner(false)
  }

  handle_click_minus = (e: React.MouseEvent) => {
    this.props.move_by(-1)
  }

  handle_click_plus = (e: React.MouseEvent) => {
    this.props.move_by(+1)
  }

  handle_click_information = (e: React.MouseEvent) => {
    this.props.toggle_show_information()
  }

  render() {
      let size_knop = 60
      let photo_view = Fotoos[this.props.photo_index_view]

      let size_selection = [144, 23]

      return <div className="Tuner" onMouseEnter={ this.handle_mouse_enter } onMouseLeave={ this.handle_mouse_leave }>
        <div className="Tuner_bar_top">
          <div className="Tuner_onderwerp">
            <div ref={ this.ref_el_onderwerp_text }
              /* key to stop animation */
              key={ `photo_${this.props.photo_index_view}` }
              className="Tuner_onderwerp_text">
              { /* lays out two text after each other for the animation */ }
              <div
                className="Tuner_onderwerp_text_positioner">
                { /* Tuner_onderwerp_text_content_container text with margin.
                    => for measuring width upto second text =>
                       - to be able to use translation length with 100%
                       - duration of animation */ }
                <div
                  ref={ this.ref_el_onderwerp_text_container }
                  className="Tuner_onderwerp_text_content_container _1">
                  { /* Tuner_onderwerp_text_content_container only text (without margin)
                        => for measuring text => for triggering animation */ }
                  <div
                    ref={ this.ref_el_onderwerp_text_content }
                    className="Tuner_onderwerp_text_content">
                    { photo_view.beschrijving }
                  </div>
                </div>
                <div
                  className="Tuner_onderwerp_text_content_container _2">
                  <div className="Tuner_onderwerp_text_content">
                    { photo_view.beschrijving }
                  </div>
                </div>
              </div>
            </div>
          </div>

          { !this.props.information_is_empty ?
            <svg className={ `Tuner_button_information ${ this.props.information_is_shown ? '_is_shown' : '' }` }
              width={25} height={25}
              onClick={ this.handle_click_information }>
              <circle className="Tuner_button_information_border" r={12} cx={12.5} cy={12.5} stroke="var(--clr_foreground)" />
              <text className="Tuner_button_information_text" x={12.5} y={12.5} alignmentBaseline="central" fontSize={16} strokeWidth={0}>i</text>
            </svg> : ''}
        </div>
        
        <div className="Tuner_content">
          <GolvenView photo_index_view={ this.props.photo_index_view }
            photo_index_next={ this.props.photo_index_next }
            move_to={ this.props.move_to } />
          <svg className="Tuner_cmd_minus" onClick={ this.handle_click_minus } width={size_knop} height={size_knop}>
              <g>
                { /* transparent: for clickability */ }
                <circle r={12} cx={30} cy={30} stroke="var(--clr_foreground)" strokeWidth={1} fill="transparent" />
                <line x1={18} y1={30} x2={42} y2={30} strokeWidth={1} stroke="var(--clr_foreground)" />
              </g>
          </svg>
          <svg className="Tuner_cmd_plus" onClick={ this.handle_click_plus } width={size_knop} height={size_knop}>
              <g>
                { /* transparent: for clickability */ }
                <circle r={12} cx={size_knop / 2} cy={size_knop / 2} stroke="var(--clr_foreground)" strokeWidth={1} fill="transparent" />
                <line key="plus-vertical-line" x1={size_knop / 2} y1={18} x2={size_knop / 2} y2={42} strokeWidth={1} stroke="var(--clr_foreground)" />
                <line key="plus-horizontal-line" x1={18} y1={size_knop / 2} x2={42} y2={size_knop / 2} strokeWidth={1} stroke="var(--clr_foreground)" />
              </g>
          </svg>
          </div>
      </div>
  }
}