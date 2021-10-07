import React from 'react';
import Header from '../Header/index';
import { useParams, useHistory } from 'react-router-dom';
import { CurrentWorkoutContext } from './CurrentWorkoutContext';
import CurrentExercise from './CurrentExercise';
import styled from 'styled-components';
import StopWatch from './StopWatch';

const DoingWorkout = () => {
    const { workoutId } = useParams();
    const { currentWorkoutName, setCurrentWorkoutName } = React.useContext(CurrentWorkoutContext);
    const [isLoading, setIsLoading] = React.useState(true);
    const [exerciseData, setExerciseData] = React.useState();
    const [tags, setTags] = React.useState();
    const history = useHistory();
    const userId = sessionStorage.getItem('userId');

    const handleResponse = (data) => {
        setCurrentWorkoutName(data.data.name);
        setExerciseData(data.data.exerciseList);
        setTags(data.data.tags);
        setIsLoading(false);
    }

    React.useEffect(() => {
        fetch(`/workout/${workoutId}`)
            .then(res => res.json())
            .then(data => { handleResponse(data) })
    }, [])

    const handleComplete = () => {
        const newWorkout = {
            user_id: userId,
            workout_id: workoutId,
            name: currentWorkoutName,
            tags: tags,
        }

        fetch('/workoutsCompleted', {
            method: 'POST',
            body: JSON.stringify(newWorkout),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            }
        })
        history.push('/completedWorkout');
    }

    return (!isLoading &&
        <Wrapper>
            <Header title={currentWorkoutName} />
            <TimerWrapper >
                <StopWatch />
            </TimerWrapper>
            <ListWrapper>
                {exerciseData.map((ex, ind) => {
                    return <CurrentExercise
                        item={ex}
                        key={ind} />
                })}
            </ListWrapper>
            <ButtonWrapper>
                <CompleteWorkout
                    onClick={handleComplete}
                >Complete Workout!
                </CompleteWorkout>
            </ButtonWrapper>
        </Wrapper>
    )
};

export default DoingWorkout;

const Wrapper = styled.div`
    z-index: 0;
`;

const TimerWrapper = styled.div`
    display: flex;
    margin: 0 20px;
    margin-top: 100px;
    justify-content: space-around;
`;

const ListWrapper = styled.div`
    margin-top: 50px;
`;

const ButtonWrapper = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
`;

const CompleteWorkout = styled.button`
    width: 80%;
    height: 40px;
    background-color: var(--primary-color);
    font-family: var(--primary-font);
    font-size: 20px;
    border-radius: 12px;
    box-shadow: .5px 1px 5px #888888;
    color: white;
    border: none;
`;