import React from 'react';
import styled from 'styled-components';
import { CurrentWorkoutContext } from './CurrentWorkoutContext';

const CompletedWorkout = () => {
    const { currentWorkoutName } = React.useContext(CurrentWorkoutContext);

    return (
        <Wrapper>
            <Message>Congratulations! You completed:
                <span> <br/>{currentWorkoutName}.</span>
                 <p>You rock! 🥳</p>
            </Message>
        </Wrapper>
    )
};

export default CompletedWorkout;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
`;

const Message = styled.div`
    text-align: center;
    font-size: 40px;
    font-family: var(--header-font);
    color: var(--primary-color);
    span {
        color: purple;
        padding: 0px;
    }
`;