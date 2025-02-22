import React from 'react'
import AppView from './view/AppView'
import URL from './view/EindhovenURL'

type tProps = { }

type tState = {
  size: number[]
  is_tuner_fixed: boolean
  photo_index: number
}

export default class MainComponent extends React.Component<tProps, tState> {
  
  ref_el: React.RefObject<AppView>
  
  constructor(p: any) {
    super(p)

    this.ref_el = React.createRef()
    URL.register_update_listener(this.handle_url_update)
    this.state = {
      size: [window.document.body.clientWidth, window.document.body.clientHeight],
      is_tuner_fixed: URL.state.is_tuner_fixed,
      photo_index: URL.state.photo_index,
    }
  }

  componentDidMount(): void {
    window.addEventListener('resize', this.handle_window_resize)
  }

  componentWillUnmount(): void {
    window.removeEventListener('resize', this.handle_window_resize)
  }

  handle_window_resize = (e: UIEvent) => {
    this.setState({
      size: [document.body.clientWidth, document.body.clientHeight]
    })
  }

  handle_set_photo_index = (photo_index: number) => {
    URL.set_photo_index(photo_index)
    this.setState({
      is_tuner_fixed: URL.state.is_tuner_fixed,
      photo_index: URL.state.photo_index,
    })
  }

  handle_url_update = () => {
    this.setState({
      is_tuner_fixed: URL.state.is_tuner_fixed,
      photo_index: URL.state.photo_index,
    })
  }

  render() {
    return <AppView
      ref={ this.ref_el }
      size={this.state.size}
      photo_index_initial={URL.state.photo_index}
      panels_is_shown_initial={URL.state.is_tuner_fixed}
      set_photo_index={ this.handle_set_photo_index } />
  }
}
