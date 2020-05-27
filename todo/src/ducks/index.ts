import { combineReducers, createStore } from 'redux'

// Actions
const TEXTCHANGE = 'TEXTCHANGE'

const textChange = ({ value }) => {
  return {
    type: TEXTCHANGE,
    value,
  }
}

// Reducer
const initialState = { textvalue: 'default text' }

const textReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEXTCHANGE:
      return { ...state, ...action.value }
    default:
      return state
  }
}

const reducers = combineReducers(textReducer)

export default createStore(reducers)
