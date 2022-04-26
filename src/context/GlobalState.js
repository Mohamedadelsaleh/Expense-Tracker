import React, {createContext, useReducer} from 'react';
import Reducer from './Reducer'
//Initial state
const initialState = {
    transitions: [
        {id:1, text:"Bike", amount:-50},
        {id:2, text:"Gun", amount:-100},
        {id:3, text:"House", amount:950},
        {id:4, text:"Car", amount:-550},
        {id:5, text:"PS", amount:300},
    ]
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

    return(<GlobalContext.Provider value={{
        transitions:state.transitions,
        deleteTransition
    }}>
            {children}
        </GlobalContext.Provider> )
}