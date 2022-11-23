import { createStore, combineReducers } from 'redux'
import { itemsReducer } from './itemsReducer'
import { animateReduser } from './animateReduser'

const rootReducer = combineReducers({
  items: itemsReducer,
  animate: animateReduser
})

export const store = createStore(rootReducer)
