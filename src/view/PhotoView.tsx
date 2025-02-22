import * as React from 'react'
import Fotoos from '../data/Fotoos'
import EindhovenURL from './EindhovenURL'

type tProps = {
    size: number[]
    photo_view_index: number
    photo_next_index: number
    move_by: (delta: number) => void
    on_mark_loaded: (photo_index: number) => void
}

export default class PhotoView extends React.Component<tProps> {
    handle_click = (ev: React.SyntheticEvent<HTMLDivElement, MouseEvent>) => {
        this.props.move_by(1)
    }
    
    handle_load_image = (e: React.SyntheticEvent) => {
        this.props.on_mark_loaded(this.props.photo_next_index)
    }
    
    render() {
        let { photo_view_index, photo_next_index, size } = this.props
        let photo_view = Fotoos[photo_view_index]
        let photo_next = Fotoos[photo_next_index]

        let size_ratio = new Array(2)
        let max_scale_i: number = 0
        if (photo_view != null) {
          let max_scale = Number.MAX_VALUE
          for (let i = 0; i < 2; ++i) {
            let scale = size[i] / photo_view.ratio[i]
            if (scale < max_scale) {
              max_scale = scale
              max_scale_i = i
            }
          }
    
          for (let i = 0; i < 2; ++i) {
            size_ratio[i] = size[max_scale_i] * photo_view.ratio[i] / photo_view.ratio[max_scale_i]
          }
        }

        return <div className="Photo_container" onClick={ this.handle_click }>
            <div className="Photo_box" style={ { width: size_ratio[0], height: size_ratio[1], } }>

                { photo_view !== undefined
                    ? <img key={ photo_view.file } src={ EindhovenURL.path + `/assets/images/fotoos/${ photo_view.file }` }
                        width={ size_ratio[0] + 'px' } height={ size_ratio[1] + 'px' }
                        />
                    : '' }

                { /* Load next photo in the background. */ }
                { photo_view !== photo_next
                    ? <img key={ photo_next.file } src={ EindhovenURL.path + `/assets/images/fotoos/${ photo_next.file }` }
                        style={ { display: 'none', } }
                        onLoad={ this.handle_load_image }
                        />
                    : '' }
            </div>
        </div>
    }
}