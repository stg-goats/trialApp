import { combineReducers, createStore } from 'redux'
import text from './text'

export default createStore(combineReducers({ text }))
