function get_mouse_position_in_element(ev: React.MouseEvent) {
    let target = ev.currentTarget
    if (! (target instanceof Element)) throw new Error()
    
    let element_measurements = target.getBoundingClientRect()
    let element_position = [element_measurements.x, element_measurements.y]
    let mouse_position = [ev.clientX, ev.clientY]
    let position = [0, 1].map((x, i) => mouse_position[i] - element_position[i])
    
    return position
}

export default {
    get_mouse_position_in_element: get_mouse_position_in_element,
}