import axios from 'axios'
import C from './const'


export const fetchContents = (contents) => ({
    type: C.FETCH_CONTENTS,
    contents
})

export const fetchinitialDataAsync = async () => {
    const { data } = await axios.get('http://localhost:9999/api/Category')
    return {
        type: C.FETCH_INITIAL_DATA,
        data: data?.map((category) => ({
            ...category,
            fold: false
        }))
    }
}

export const foldCategory = (category) => ({
    type: C.FOLD_CATEGORY,
    category: {
        ...category,
        fold: !category.fold
    }
})

export const onHideSidebar = (isActive) => ({
    type: C.HIDE_SIDEBAR,
    sidebar: isActive
})