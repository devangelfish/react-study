import { combineReducers, createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'
import ReduxThunk from 'redux-thunk'
import { sidebar, data, contents } from './reducers'

const store = createStore(combineReducers({ sidebar, data, contents }), applyMiddleware(ReduxThunk, logger))

export default store