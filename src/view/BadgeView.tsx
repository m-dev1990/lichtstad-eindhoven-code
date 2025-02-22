import React from 'react'
import { t, Q, q, M, L, l, A, Z, render_path } from '../SvgPathCommands.tsx'

type tProps = {
    on_handle_click: () => void,
}

export default class BadgeView extends React.Component<tProps> {
    handle_click = () => {
        this.props.on_handle_click()
    }
    
    render() {
        let size_badge = [100, 150]
        let size_badge_recht_y = size_badge[1] - size_badge[0] / 2
        let size_badge_inner = size_badge[0] / 2 - 5

        return <svg className="Badge" width={size_badge[0]} height={size_badge[1]} viewBox={ [0, 0, size_badge[0], size_badge[1]].join(' ') }>
            <defs>
                <radialGradient id="gradient_light" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="0%" stopColor="transparent" />
                    {/* 74%: 75% is shows a small dark border between the circle and the light */}
                    <stop offset="74%" stopColor="transparent" />
                    <stop offset="74%" stopColor="var(--clr_foreground)" />
                    { /* color is transparent  */ }
                    <stop offset="100%" stopColor="rgba(from var(--clr_foreground) r g b / 0%)" />
                </radialGradient>

                <radialGradient id="gradient_glass_transparancy" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="0%"  stopColor="rgba(from var(--clr_accent_5) r g b / 100%)" />
                    <stop offset="50%" stopColor="rgba(from var(--clr_accent_6) r g b / 100%)" />
                    <stop offset="100%" stopColor="rgba(from var(--clr_accent_7) r g b / 100%)" />
                </radialGradient>

                <radialGradient id="gradient_glass_gloss" cx="50%" cy="50%" r="100%" fx="50%" fy="50%">
                    <stop offset="37%" stopColor="rgba(from var(--clr_accent_3) r g b / 0%)" />
                    <stop offset="43%" stopColor="rgb(255, 255, 255, 0.35)" />
                    <stop offset="45%" stopColor="rgba(from var(--clr_accent_3) r g b / 0%)" />
                </radialGradient>

                <radialGradient id="gradient_glass_shadow_1" cx="50%" cy="50%" r="100%" fx="70%" fy="95%">
                    <stop offset="0%"  stopColor="rgba(from var(--clr_accent_8) r g b / 60%)" />
                    <stop offset="33%" stopColor="rgba(from var(--clr_accent_7) r g b / 30%)" />
                    <stop offset="75%" stopColor="rgba(from var(--clr_accent_3) r g b / 0%)" />
                </radialGradient>

                <radialGradient id="gradient_glass_shadow_2" cx="50%" cy="50%" r="100%" fx="95%" fy="75%">
                    <stop offset="0%"  stopColor="rgba(from var(--clr_accent_8) r g b / 60%)" />
                    <stop offset="33%" stopColor="rgba(from var(--clr_accent_7) r g b / 30%)" />
                    <stop offset="75%" stopColor="rgba(from var(--clr_accent_3) r g b / 0%)" />
                </radialGradient>

                <mask id="mask">
                    <rect x="0" y="0" width="100%" height="100%" fill="black" />
                    <circle cx={ size_badge[0] / 2  } cy={ size_badge_recht_y } r={ size_badge_inner - 5 } fill="white"></circle>
                </mask>
            </defs>
            
            <path d={ render_path([
                M([0, 0]), L([0, size_badge_recht_y]), A([size_badge[0] / 2, size_badge[0] / 2], 0, 0, 0, [size_badge[0], size_badge_recht_y]), L([size_badge[0], 0]), Z(),
                ]) } stroke="var(--clr_foreground)" fill="none" /> 
            <text x={ size_badge[0] / 2 } y={8} className="Eindhoven_lichtstad"
                fill="var(--clr_foreground)"
                fontSize={16} dominantBaseline="hanging"
                textAnchor="middle">LICHTSTAD</text>
            <text x={ size_badge[0] / 2 } y={28} className="Eindhoven_Eindhoven"
                fill="var(--clr_accent_3)" dominantBaseline="hanging"
                fontSize={16}
                textAnchor="middle">EINDHOVEN</text>

            <rect className="Badge_circle_light" fill="url(#gradient_light)" x={ -10 } y={ size_badge_recht_y - size_badge[0] / 2 - 10 } width={ size_badge[0] + 20 } height={ size_badge[0] + 20 } />

            <circle fill="url(#gradient_glass_transparancy)"
                className="Badge_circle_transparency" cx={ size_badge[0] / 2 } cy={ size_badge_recht_y } r={ size_badge_inner }></circle>
            <circle fill="url(#gradient_glass_gloss)"
                className="Badge_circle_gloss" cx={ size_badge[0] / 2 * 1.17 } cy={ size_badge_recht_y * 1.17 } r={ size_badge_inner * 1.48 } mask="url(#mask)"></circle>
            <circle fill="url(#gradient_glass_shadow_1)"
                className="Badge_circle_shadow" cx={ size_badge[0] / 2 } cy={ size_badge_recht_y } r={ size_badge_inner }></circle>
            <circle fill="url(#gradient_glass_shadow_2)"
                className="Badge_circle_shadow" cx={ size_badge[0] / 2 } cy={ size_badge_recht_y } r={ size_badge_inner }></circle>
            
            <circle className="Badge_circle" cx={ size_badge[0] / 2 } cy={ size_badge_recht_y } r={ size_badge_inner } onClick={ this.handle_click }></circle>        

        </svg>
    }
}