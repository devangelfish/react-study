import { combineReducers, createStore, applyMiddleware } from 'redux'
import { sidebar, categories } from './reducers'
import { logger } from 'redux-logger'

const store = createStore(combineReducers({ sidebar, categories }))

export default store