
import React, { createContext, useContext, useReducer } from "react";


//empty data layer created
export const StateContext = createContext();


//Build a provider which gives access to data layer
// initialState is how data looks at beginning
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer((reducer), initialState)}>
        {/* children is the App.js, theoretically */}
        {children}
    </StateContext.Provider>
)
// This is how we use ContextAPI inside a component
export const useStateValue = () => useContext(StateContext);

// Imported createContext, and useReducer from react to use the React Context API
// Created data layer with createContext and assigned to variable
// Create & exported provider which gives access to the data layer (connect in Redux, methinks)
// The Data layer (Statecontext) creates a Provider with the values( initialState, and the reducer) using the useReducer hook insider StateContext 
// StateProvider is imported into index.js and wrapped around the app as the parent and provides the initialState and reducer function as props by default/required
// InitialState & reducer are exported from file
// export useContext to use the ContextAPI inside a component
// import useStateValue and destructure it into the variable you need after importing into the component along with dispath variable
// Using dispatch object just sends object which matches what it is the reducer