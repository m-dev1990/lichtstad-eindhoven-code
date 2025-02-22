import Fotoos from '../data/Fotoos'
import { t, Q, q, M, L, l, A, Z, render_path } from '../SvgPathCommands.tsx'
import ReactUtil from '../ReactUtil.tsx'
import React from 'react'

type tProps = {
    photo_index_view: number
    photo_index_next: number
    move_to: (photo_index: number) => void
}

type tState = {
    photo_index_drag: number|undefined,
}

export default class GolvenView extends React.Component<tProps, tState> {
    constructor(p: tProps) {
        super(p)

        this.state = {
            photo_index_drag: undefined,
        }
    }

    handle_mouse_leave = (ev: React.MouseEvent) => {
        this.setState({
            photo_index_drag: undefined
        })
    }

    handle_mouse_move = (ev: React.MouseEvent) => {
        let position = ReactUtil.get_mouse_position_in_element(ev)

        let size_golven = [420, 60]
        let photo_count = Fotoos.length
        let size_golven_inner = size_golven[0] - (27 * 2)
        
        let ster_step_unit_x = size_golven_inner / (photo_count - 1)
        let photo_index_drag = Math.floor((position[0] - 27) / ster_step_unit_x)
        photo_index_drag = Math.max(0, Math.min(photo_index_drag, photo_count - 1))
        this.setState({
            photo_index_drag: photo_index_drag,
        })
    }

    handle_click = (ev: React.MouseEvent) => {
        if (!this.state.photo_index_drag) throw new Error()
        
        this.props.move_to(this.state.photo_index_drag)

        this.setState({
            photo_index_drag: undefined,
        })
    }

    create_path_golven = (position: number[], size: number[]) => {
        // 8 halve bogen + 1/2 halve-boog-lengte voor de marge aan beide kanten (= 1/4 + 1/4)
        let breedte_halve_boog = size[0] / (8 + 1/4 + 1/4)
        let marge_x = breedte_halve_boog * 1/4
        let hoogte_halve_boog = size[1] / 2
        let midden_y = position[1] + size[1] / 2
        let spatie = 12
        let begin_x = position[0] + marge_x

        let golven = []
        for (let i = 0; i < 3; ++i) {
            let midden_y1 = midden_y + spatie * (i - 1)
            
            let golf
            if (i === 1) {
            golf = [
                M([begin_x - 5, midden_y1 + 2.5]),
                l([5, -2.5]),
                q([[breedte_halve_boog, -hoogte_halve_boog], [breedte_halve_boog * 2, 0]]),
                q([[breedte_halve_boog, hoogte_halve_boog], [breedte_halve_boog * 2, 0]]),
                q([[breedte_halve_boog, -hoogte_halve_boog], [breedte_halve_boog * 2, 0]]),
                q([[breedte_halve_boog, hoogte_halve_boog], [breedte_halve_boog * 2, 0]]),
                l([5, -2.5]),
            ]
            } else {
            golf = [
                M([begin_x, midden_y1]),
                q([[breedte_halve_boog, -hoogte_halve_boog], [breedte_halve_boog * 2, 0]]),
                q([[breedte_halve_boog, hoogte_halve_boog], [breedte_halve_boog * 2, 0]]),
                q([[breedte_halve_boog, -hoogte_halve_boog], [breedte_halve_boog * 2, 0]]),
                q([[breedte_halve_boog, hoogte_halve_boog], [breedte_halve_boog * 2, 0]]),
            ]
            }

            golven.push(golf)
        }

        return golven
    }

    create_path_ster = (middelpunt: number[], straal: number, kern_straal: number) => {
        let [x, y] = middelpunt
        return [
            M([x              , y - straal]),
            L([x + kern_straal, y - kern_straal]),
            L([x + straal     , y]),
            L([x + kern_straal, y + kern_straal]),
            L([x              , y + straal]),
            L([x - kern_straal, y + kern_straal]),
            L([x - straal     , y]),
            L([x - kern_straal, y - kern_straal]),
            L([x              , y - straal])
        ]
    }

    render() {
        let size_golven = [420, 60]
        let photo_count = Fotoos.length
        let ster_step_unit_x = (size_golven[0] - (27 * 2)) / (photo_count - 1)
        let ster_x = ster_step_unit_x * this.props.photo_index_view
        let ster_loading_x = ster_step_unit_x * this.props.photo_index_next

        let ster_drag_x = undefined
        if (this.state.photo_index_drag !== undefined) {
            ster_drag_x = ster_step_unit_x * this.state.photo_index_drag
        }

        return <svg className="Tuner_golven" width={size_golven[0]} height={size_golven[1]} xmlns="http://www.w3.org/2000/svg"
            onMouseLeave={ this.handle_mouse_leave }
            onMouseMove={ this.handle_mouse_move } onClick={ this.handle_click }>
            
            { this.create_path_golven([0, 0], size_golven).map((golf, i) => <path key={'golf-' + i} d={ render_path(golf) } fill="none" stroke="var(--clr_foreground)" strokeWidth={1} />) }

            { ster_drag_x !== undefined ? <path key="ster-drag"
                d={ render_path(this.create_path_ster([ster_drag_x + 27, size_golven[1] / 2], 27, 5)) }
                fill="var(--svg_background)"
                stroke="var(--clr_foreground)"
                /> : ''}

            <path key="ster-loading"
                d={ render_path(this.create_path_ster([ster_loading_x + 27, size_golven[1] / 2], 27, 5)) }
                fill="var(--clr_foreground)"
                />

            <path key="ster"
                d={ render_path(this.create_path_ster([ster_x + 27, size_golven[1] / 2], 27, 5)) }
                fill="var(--clr_accent_3)"
                stroke="none"
                />
        </svg>
    }
}