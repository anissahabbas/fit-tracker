import React from 'react';

export const NewWorkoutContext = React.createContext(null);

export const NewWorkoutProvider = ({ children }) => {
    const [workoutName, setWorkoutName] = React.useState();
    const [tags, setTags] = React.useState();
    const [exerciseList, setExerciseList] = React.useState([]);

    return (
        <NewWorkoutContext.Provider
            value={{
                workoutName,
                setWorkoutName,
                tags,
                setTags,
                exerciseList,
                setExerciseList
            }}>
            {children}
        </NewWorkoutContext.Provider>
    );
};