import React,{createContext, useContext, useReducer} from 'react'

export const stateContext=createContext();

export const StateProvider =({reducer,inititalState,children})=> (
       <stateContext.Provider value={useReducer(reducer,inititalState)}>
            {children}
       </stateContext.Provider>
    )

export const useStateValue=()=>useContext(stateContext);


