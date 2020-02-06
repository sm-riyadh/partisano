import { combineReducers } from 'redux'

import journal from './journal'
import coa from './coa'

const rootReducer = combineReducers({
  journal: journal,
  coa: coa,
})

export default rootReducer
