import React, { useContext } from 'react';
import Header from '../Header';
import { NewWorkoutContext } from '../WorkoutList/NewWorkoutContext';
import AddExistingModal from './AddExistingModal';
import styled from 'styled-components';
import CreateNewModal from './CreateNewModal';

const CreatingWorkout = () => {
    const { workoutName } = useContext(NewWorkoutContext);
    return (
        <>
            <Header title='My new Workout' />
            <Wrapper>
                <ExModalWrapper>
                    <AddExistingModal />
                </ExModalWrapper>
                <CreateNewWrapper>
                    <CreateNewModal />
                </CreateNewWrapper>
            </Wrapper>

        </>
    )
}

export default CreatingWorkout;

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