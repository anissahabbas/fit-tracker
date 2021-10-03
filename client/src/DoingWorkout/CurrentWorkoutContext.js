import React from 'react';

export const CurrentWorkoutContext = React.createContext(null);

export const CurrentWorkoutProvider = ({children}) => {
    const [currentWorkoutId, setCurrentWorkoutId] = React.useState();

    return (
        <CurrentWorkoutContext.Provider
        value= {{
            currentWorkoutId,
            setCurrentWorkoutId
        }}>
            {children}
        </CurrentWorkoutContext.Provider>
    )
}