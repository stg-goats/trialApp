import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import text from './text'

const reducers = combineReducers({ text })

export default createStore(reducers, composeWithDevTools())
