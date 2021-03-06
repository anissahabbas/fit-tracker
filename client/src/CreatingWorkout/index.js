import React, { useContext } from 'react';
import Header from '../Header';
import { NewWorkoutContext } from '../WorkoutList/NewWorkoutContext';
import AddExistingModal from './AddExistingModal';
import styled from 'styled-components';
import CreateNewModal from './CreateNewModal';
import ListItem from '../ExerciseList/ListItem';
import { useHistory } from 'react-router-dom';
import { CurrentWorkoutContext } from '../DoingWorkout/CurrentWorkoutContext';

const CreatingWorkout = () => {
    //route page for creating a workout
    const { workoutName, exerciseList, setExerciseList, tags } = useContext(NewWorkoutContext);
    const userId = sessionStorage.getItem('userId')
    const history = useHistory();
    const { setCurrentWorkoutId } = useContext(CurrentWorkoutContext);


    const handleSave = () => {
        const newWorkout = {
            name: workoutName,
            tags: tags.length ? tags.replace(/\s/g, '').split(',') : '',
            exerciseList: exerciseList,
            user_id: userId
        }
        fetch('/workouts', {
            method: 'POST',
            body: JSON.stringify(newWorkout),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            }
        })
        setExerciseList([]);
        history.push('/workoutList');
    }

    const handleStart = async () => {
        //redirect to DoingWorkout and save new workout
        const newWorkout = {
            name: workoutName,
            tags: tags ? tags.replace(/\s/g, '').split(',') : '',
            exerciseList: exerciseList,
            user_id: userId
        }
        fetch('/workouts', {
            method: 'POST',
            body: JSON.stringify(newWorkout),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            }
        })
            .then(res => res.json())
            .then(data => {
                setCurrentWorkoutId(data.data._id);
                setExerciseList([]);
                history.push(`/doingWorkout/${data.data._id}`)
            })

    }

    return (
        <>
            <Header title={workoutName ? workoutName : 'My Workout'} />
            <Wrapper>
                <ExModalWrapper>
                    <AddExistingModal />
                </ExModalWrapper>
                <CreateNewWrapper>
                    <CreateNewModal />
                </CreateNewWrapper>
                {exerciseList &&
                    <ListWrapper>
                        {exerciseList.map((listItem, ind) => {
                            return <ListItem
                                listItem={listItem}
                                key={ind} />
                        })}
                    </ListWrapper>}
                {exerciseList.length ?
                    <ButtonWrapper>
                        <Button onClick={handleSave}>Save</Button>
                        <Button onClick={handleStart}>Save & Start</Button>
                    </ButtonWrapper> : ''}
            </Wrapper>

        </>
    )
}

export default CreatingWorkout;

const ButtonWrapper = styled.div`
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
`;

const Button = styled.button`
    border: none;
    width: 120px;
    height: 25px;
    border-radius: 10px;
    background-color: var(--primary-color);
    font-family: var(--primary-font);
    box-shadow: .5px 1px 5px #888888;
    color: white;
`;

const ListWrapper = styled.div`
    padding-top: 30px;
`;

const ExModalWrapper = styled.div`
    display: flex;

`;

const CreateNewWrapper = styled.div`

`;

const Wrapper = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;