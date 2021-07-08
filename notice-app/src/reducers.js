import C from './const'

export const data = (state = [], action) => {
    switch (action.type) {
        case C.FETCH_INITIAL_DATA:
            return action.data
        case C.FOLD_CATEGORY: {
            return state.map((category) =>
                (category.no === action.category.no) ?
                    {
                        ...action.category,
                    } : category
            )
        }
        default:
            return state
    }
}

export const contents = (state = {}, action) => {
    switch(action.type) {
        case C.FETCH_CONTENTS: 
            return action.contents
        default:
            return state
    }
}

export const sidebar = (state = true, action) => {
    switch (action.type) {
        case C.HIDE_SIDEBAR:
            return action.sidebar
        default:
            return state
    }
}

export const auth = (state = { token: undefined }, action) => {
    switch (action.type) {
        case C.AUTH_USER:
            return action.auth
        default:
            return state
    }
}