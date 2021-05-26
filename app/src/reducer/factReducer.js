//component, action, reducer, link it all in index.js
import { FACTS_LOAD, FACTS_SUCCESS, FACTS_FAIL } from '../actions/factsAction.js'

const initialState = {
    fact:'',
    loading: false
}

export const factReducer = (state = initialState, action) => {
    switch(action.type) {
        case FACTS_LOAD:
            return {
                ...state,
                loading: true
            }
        case FACTS_SUCCESS:
            return {
                ...state,
                fact: action.payload,
                loading:false
            }
        case FACTS_FAIL:
            return{
                ...state,
                loading:false
            }
        default:
            return state
    }
}