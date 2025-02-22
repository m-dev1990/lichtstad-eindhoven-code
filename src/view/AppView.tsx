import * as React from 'react'
import './AppView.css'
import Fotoos from '../data/Fotoos.ts'
import PhotoView from './PhotoView.tsx'
import * as t from '../data/_types.ts'
import BadgeView from './BadgeView.tsx'
import BottomPanelView from './BottomPanelView.tsx'
import InformationView from './InformationView.tsx'
import * as InformationViewModel from './InformationViewModel.ts'
import EindhovenURL from './EindhovenURL.ts'

type tProps = {
  photo_index_initial: number,
  size: number[],
  panels_is_shown_initial: boolean,
  set_photo_index: (photo_index: number) => void
}

type tState = {
  photo_indices: number[],
  photo_index_loaded: number|undefined,
  design_index: number,
  is_tuner_visible: boolean,
  information_is_shown: boolean,
}

const $VIEW$ = Symbol()
type tPhotoEntity = t.tFoto & {
  [$VIEW$]?: {
    information_view_model?: InformationViewModel.tFotoViewModel,
    el_image_preloaded?: HTMLImageElement,
  }
}

let Designs = ['modern', 'oud']

class AppView extends React.Component<tProps, tState> {
  timeout_ID: number|undefined
  is_mouse_over_tuner: boolean
  ref_photo: React.RefObject<HTMLImageElement>

  constructor(props: any) {
    super(props)
    console.log('AppView constructor')

    this.timeout_ID = undefined
    this.is_mouse_over_tuner = false

    this.ref_photo = React.createRef()
    this.state = ({
      photo_indices: [this.props.photo_index_initial],
      photo_index_loaded: undefined,
      design_index: 0,
      is_tuner_visible: this.props.panels_is_shown_initial,
      information_is_shown: this.props.panels_is_shown_initial,
    })

    this.preload_background_image()
    this.preload_photo_images()
  }

  componentDidMount(): void {
    document.addEventListener('keydown', this.handle_key_press)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handle_key_press)
  }

  handle_key_press = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      this.move_to(this.photo_index_next - 1)
    }
    if (e.key === 'ArrowRight') {
      this.move_to(this.photo_index_next + 1)
    }
  }

  handle_mouse_move = (e: React.MouseEvent) => {
    if (this.props.panels_is_shown_initial) return
    if (this.is_mouse_over_tuner || this.state.is_tuner_visible) {
      return
    }

    this.setState({
      is_tuner_visible: true,
    })

    this.schedule_tuner_hide()
  }

  handle_mark_mouse_over_tuner = (is_mouse_over_tuner: boolean) => {
    if (this.props.panels_is_shown_initial) return

    this.is_mouse_over_tuner = is_mouse_over_tuner
    if (!this.is_mouse_over_tuner) {
      this.schedule_tuner_hide()
    } else {
      this.cancel_tuner_hide()
    }
  }

  schedule_tuner_hide() {
    window.clearTimeout(this.timeout_ID)
    this.timeout_ID = window.setTimeout(this.handle_interval_tuner_hide, 10000)
  }

  cancel_tuner_hide() {
    window.clearTimeout(this.timeout_ID)
    this.timeout_ID = undefined
  }

  handle_interval_tuner_hide = () => {
    this.setState({
      is_tuner_visible: false,
    })
  }

  toggle_design = () => {
    this.setState({
      design_index: (this.state.design_index + 1) % 2,
    })
  }

  move_by = (delta: number) => {
    this.move_to(this.photo_index_next + delta)
  }

  can_move_to(photo_index: number) {
    return photo_index >= 0 && photo_index < Fotoos.length
  }

  move_to = (photo_index: number) => {
    if (!this.can_move_to(photo_index)) return

    this.setState({
      photo_indices: [photo_index, ...this.state.photo_indices],
    })

    this.preload_photo_images()

    this.props.set_photo_index(photo_index)
  }

  mark_loaded = (photo_index: number) => {
    this.setState({
      photo_index_loaded: photo_index,
    })
  }

  toggle_show_information = () => {
    this.setState({
      information_is_shown: !this.state.information_is_shown,
    })
  }

  preload_background_image() {
    let el_bakeliet_background_preload = document.createElement('div')
    el_bakeliet_background_preload.style.background = `url("${EindhovenURL.path + `/assets/images/bakeliet textuur.png`}")`
    // must be appended to load style background image
    document.body.appendChild(el_bakeliet_background_preload)
  }

  async preload_photo_images() {
    let i_start = this.photo_index_view + 1
    let i_end = Math.min(i_start + 5, Fotoos.length - 1)

    for (let i = i_start; i <= i_end; ++i) {
      let photo = Fotoos[i] as tPhotoEntity

      let view = photo[$VIEW$]
      if (view === undefined) {
        view = photo[$VIEW$] = {} 
      }
      if (view.el_image_preloaded === undefined) {
        let el_image = new Image()
        el_image.src = EindhovenURL.path + `/assets/images/fotoos/` + photo.file
        view.el_image_preloaded = el_image
        await new Promise((fn_resolve, fn_reject) => el_image.onload = fn_resolve)
      }
    }
  }

  get photo_view() {
    return Fotoos[this.photo_index_view] as tPhotoEntity
  }

  get photo_index_view() {
    return this.state.photo_index_loaded !== undefined ? this.state.photo_index_loaded : this.state.photo_indices[this.state.photo_indices.length - 1]
  }

  get photo_next() {
    return Fotoos[this.photo_index_next] as tPhotoEntity
  }

  get photo_index_next() {
    return this.state.photo_indices[0]
  }

  render() {
    let photo_view = this.photo_view
    let photo_next = this.photo_next

    let view_holder = photo_view[$VIEW$]
    if (view_holder === undefined) {
      photo_view[$VIEW$] = view_holder = {}
    }
    let information_view_model = view_holder.information_view_model
    if (information_view_model === undefined) {
      information_view_model = InformationViewModel.buildFotoViewModel(this.photo_index_view, photo_view)
      view_holder.information_view_model = information_view_model
    }

    return (
      <>
        <div className={ `App _thema-${ Designs[this.state.design_index] } ${this.state.is_tuner_visible ? '_controls' : ''}` }
          onMouseMove={ this.handle_mouse_move }>

          <div className="Main">
            <PhotoView size={ this.props.size } photo_view_index={ this.photo_index_view }
              photo_next_index={ this.photo_index_next }
              on_mark_loaded={ this.mark_loaded }
              move_by={ this.move_by } />

            <BadgeView on_handle_click={ this.toggle_design } />
            
            { /* key assures state and refs are cleared for new photo */ }
            <InformationView key={ this.photo_index_view } photo_view_index={ this.photo_index_view }
              photo_view_model={ information_view_model }
              information_is_shown={ this.state.information_is_shown } />

            <BottomPanelView
              photo_index_view={ this.photo_index_view }
              photo_index_next={ this.photo_index_next }
              information_is_empty={ information_view_model.is_empty }
              information_is_shown={ this.state.information_is_shown }
              mark_mouse_over_tuner={ this.handle_mark_mouse_over_tuner }
              move_by={ this.move_by }
              move_to={ this.move_to }
              toggle_show_information={ this.toggle_show_information }
              />

          </div>

        </div>
      </>
    )
  }
}

export default AppView
