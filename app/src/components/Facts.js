import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {getFact} from '../actions/factsAction'

const Facts = (props) => {

    useEffect( ()=>{
        props.getFact()
    }, [])

    if(props.loading) {
        return <h2>Loading...</h2>
    }

    return (
        <div>
            <h5>{props.fact}</h5>

            <button onClick={ ()=>{
                props.getFact()
            }}> 
            Get Facts
            </button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        quote: state.GF_Reducer.fact,
        loading: state.GF_Reducer.loading
    }
}

const mapDispatchtoProps = { getFact }

export default connect(mapStateToProps, mapDispatchToProps)
(Facts)