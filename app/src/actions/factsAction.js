//https://uselessfacts.jsph.pl/

import axios from 'axios'

export const FACTS_LOAD = 'FACTS_LOAD'
export const FACTS_SUCCESS = 'FACTS_SUCCESS'
export const FEASTER_EGGSIJ = 'FEASTER_EGGSIJ'
export const FACTS_FAIL = 'FACTS_FAIL'

export const getFact = () => (dispatch) => { //'curried function'
    dispatch( {type:FACTS_LOAD} )
    axios.get('https://uselessfacts.jsph.pl/') //how "easily" check 
         .then(res => {                        //via console log e.g. in brower
             console.log(res)
             console.log('If you log res.data instead of res:', res.data)
             dispatch( {type:FACTS_SUCCESS, payload: res.data} )
         })
         .catch(err => 
             console.log('Oh no..', err), 
             dispatch( { type: FACTS_FAIL, payload: err} )
         )
}