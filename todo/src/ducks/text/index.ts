import { textType } from '@/types/ducks'

const initialState: textType = {
  textKey: 1,
  textValue: 'default text',
}

// Action Creator
const valueChange = (val: typeof initialState.textValue) => {
  return {
    type: 'TEXTCHANGE',
    payload: {
      textValue: val,
    },
  }
}

const keyChange = (val: typeof initialState.textKey) => {
  return {
    type: 'KEYCHANGE',
    payload: {
      textKey: val,
    },
  }
}

type actionTypes = ReturnType<typeof valueChange> | ReturnType<typeof keyChange>

// Reducer
export default (state = initialState, action: actionTypes) => {
  if (action) {
    return { ...state, ...action.payload }
  }
  return state
}
