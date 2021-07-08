import { combineReducers, createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'
import ReduxThunk from 'redux-thunk'
import { sidebar, data, contents, auth } from './reducers'

const store = createStore(combineReducers({ sidebar, data, contents, auth }), applyMiddleware(ReduxThunk, logger))

export default store