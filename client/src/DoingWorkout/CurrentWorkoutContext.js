import React from 'react';

export const CurrentWorkoutContext = React.createContext(null);

export const CurrentWorkoutProvider = ({children}) => {
    const [currentWorkoutId, setCurrentWorkoutId] = React.useState();
    const [currentWorkoutName, setCurrentWorkoutName] = React.useState();

    return (
        <CurrentWorkoutContext.Provider
        value= {{
            currentWorkoutId,
            setCurrentWorkoutId,
            currentWorkoutName,
            setCurrentWorkoutName
        }}>
            {children}
        </CurrentWorkoutContext.Provider>
    )
}