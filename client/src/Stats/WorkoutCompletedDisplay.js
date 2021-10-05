import React from 'react';
import styled from 'styled-components';
import ListItem from './ListItem';

const WorkoutCompletedDisplay = ({loaded, workoutData}) => {
    
    return (
        <Wrapper>
           {loaded &&
           workoutData ?
            workoutData.map((listItem, ind) => {
                return <ListItem
                    listItem={listItem}
                    key={ind} />
            }):
            <div>Complete a workout to add data!</div>}
        </Wrapper>
    )
}

export default WorkoutCompletedDisplay;

const Wrapper = styled.div`
    margin: 0 20px;
    margin-top: 300px;
`;

