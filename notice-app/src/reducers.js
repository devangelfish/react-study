import C from './const'

const initalState = [
    {
        no: 0,
        name: "",
        fold: true,
        writing: [
            {
                no: 0,
                title: "",
                contents: "",
                timstamp: ""
            },
        ]
    }
]

export const data = (state = initalState, action) => {
    switch (action.type) {
        case C.FETCH_INITIAL_DATA:
            return action.data
        case C.FOLD_CATEGORY: {
            return state.map((category) =>
                (category.categoryNo == action.category.categoryNo) ?
                    {
                        ...action.category,
                        fold: action.category.fold
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

export const sidebar = (state=true, action) => {
    switch (action.type) {
        case C.HIDE_SIDEBAR:
            return action.sidebar
        default:
            return state
    }
}