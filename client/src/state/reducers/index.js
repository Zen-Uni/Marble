/**
 * @description combin partiton reducer
 * @author Uni
 */

import { combineReducers } from 'redux'


// import reducers
import nav from './nav'

const reducer = combineReducers({
    nav,
})

export default reducer