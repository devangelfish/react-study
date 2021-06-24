import { combineReducers, createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'
import ReduxThunk from 'redux-thunk'
import { fetchinitialData, onHideSidebar, } from "./action"
import { sidebar, data, contents } from './reducers'

import axios from 'axios'

const store = createStore(combineReducers({ sidebar, data, contents }), applyMiddleware(ReduxThunk, logger))

store.dispatch(() => {
    axios.get('http://localhost:9999/api/Category').then(response => store.dispatch(fetchinitialData(response.data)))
})

export default store