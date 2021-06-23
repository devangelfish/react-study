import C from './const'

export const writings = (state = [], action) => {
    switch (action.type) {
        case C.FETCH_WRITINGS:
            return action
        default:
            return state
    }
}

export const categories = (state=[], action) => {
    switch (action.type) {
        case C.FETCH_CATEGORIES:
            return action.categories
        default:
            return state
    }
}

export const sidebar = (state=true, action) => {
    switch (action.type) {
        case C.HIDE_SIDEBAR:
            return action.hidden
        default:
            return state
    }
}

export const notice = (state=[], action) => {
    switch (action.type) {
        case C.HIDE_NOTICE:
            return state.map((category) =>
                (category.categoryNo === action.categoryNo) ?
                {
                    ...category,
                    hidden: action.hidden
                } :
                category
            )
        default:
            return state
    }
}

