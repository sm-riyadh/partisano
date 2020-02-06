import { COA } from '..'

const initialState = {
  coa_list: [],
}

const coa = (state = initialState, { type, payload }) => {
  switch (type) {
    case COA.REPLACE.LIST: {
      const newState = { ...state }
      newState.coa_list = payload
      return newState
    }
    default:
      return state
  }
}

export default coa
