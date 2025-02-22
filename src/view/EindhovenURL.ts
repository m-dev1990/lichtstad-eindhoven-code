

type tState = {
    photo_index: number,
    is_tuner_fixed: boolean,
}

class EindhovenURL {
    state: tState
    path: string
    arr_fn_listener: (() => void)[]

    constructor() {
        this.arr_fn_listener = []
        let parse = this.parse()
        this.path = parse.path
        this.state = parse.state
    
        console.log('basepath:', this.path)
        this.navigate()

        window.addEventListener('popstate', ev => {
            this.parse()
            for (let fn_update_listener of this.arr_fn_listener) {
                fn_update_listener()
            }
        })
    }

    register_update_listener(fn_update_listener: () => void) {
        this.arr_fn_listener.push(fn_update_listener)
    }

    parse() {
        let url = new URL(window.location.href)
        let path = url.pathname
        if (path.endsWith('/')) {   
            path = path.substring(0, path.length - 1)
        }

        let photo_index = (function photo_index_initial() {
            let photo_index_1_str = url.searchParams.get('foto')
            if (photo_index_1_str != null) {
                let number_segment_1 = Number.parseInt(photo_index_1_str, 10)
                if (Number.isSafeInteger(number_segment_1)) {
                    let number_segment_0 = number_segment_1 - 1
                    return number_segment_0
                } else {
                   return 0 
                }
            }

            return 0
        })();

        let is_tuner_fixed = false
        let tuner_mode = url.searchParams.get('tuner')
        if (tuner_mode != null) {
            is_tuner_fixed = tuner_mode === 'fixed'
        }

        return {
            path: path,
            state: {
                photo_index: photo_index,
                is_tuner_fixed: is_tuner_fixed,
            }
        }      
    }

    set_photo_index(photo_index: number) {
        this.state.photo_index = photo_index
        this.navigate()
    }

    navigate() {
        
        let location_URL = new URL(window.location.href)
        
        let photo_index_1 = this.state.photo_index + 1
        let photo_index_1_str = `${photo_index_1}`
        location_URL.searchParams.set('foto', photo_index_1_str)

        if (this.state.is_tuner_fixed) {
            location_URL.searchParams.set('tuner', 'fixed')
        }

        if (window.location.href !== location_URL.href) {
            window.history.pushState(null, '', location_URL)
        }
    }
}

export default new EindhovenURL()
