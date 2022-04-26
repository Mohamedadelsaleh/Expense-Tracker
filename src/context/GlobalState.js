import React, {createContext, useReducer} from 'react';
import Reducer from './Reducer'
//Initial state
const initialState = {
    transitions: []
}

//Create Context 
export const GlobalContext = createContext(initialState)

//Provider Component 
export const GlobalProvider = ({children}) =>{
    const [state, dispatch] = useReducer(Reducer, initialState)

// Actions
const deleteTransition = (id) => {
    dispatch({
        type: 'DELETE',
        payload: id
    });
}

const addTransition = (transition) => {
    dispatch({
        type: 'ADD',
        payload: transition
    });
}

    return(<GlobalContext.Provider value={{
        transitions:state.transitions,
        deleteTransition,
        addTransition
    }}>
            {children}
        </GlobalContext.Provider> )
}