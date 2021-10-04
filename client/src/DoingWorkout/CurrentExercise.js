import React from 'react';
import LastExerciseModal from './LastExerciseModal';
import NotesModal from './NotesModal';
import styled from 'styled-components';

const CurrentExercise = ({ item }) => {
    const [currentWeight, setCurrentWeight] = React.useState();
    const [notes, setNotes] = React.useState();
    const userId = sessionStorage.getItem('userId')
    console.log(item);
    const { _id, name, tags } = item;
    console.log(_id);

    const handleClick = () => {
        const newCompletedExercise = {
            exercise_id: _id,
            user_id: userId,
            name: name,
            notes: notes,
            tags: tags,
            weight: currentWeight,
        }
        fetch('/exercisesCompleted', {
            method: "POST",
            body: JSON.stringify(newCompletedExercise),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            }
        })
    }

    return (
        <Wrapper>
            <LeftWrapper>
                <Name>{item.name}</Name>
                <Notes>{item.notes}</Notes>
                <WeightWrapper>
                    <WeightTitle>Weight Used: </WeightTitle>
                    <WeightInput onChange={(e) => setCurrentWeight(e.target.value)} />
                    <WeightButton onClick={handleClick}>Complete</WeightButton>
                </WeightWrapper>

            </LeftWrapper>
            <InfoWrapper>
                <Sets>Sets: {item.sets}</Sets>
                <Reps>Reps: {item.reps}</Reps>
                <ModalWrapper>
                    <LastExerciseModal id={item._id}/>
                    <NotesModal setNotes={setNotes}/>
                </ModalWrapper>
            </InfoWrapper>
        </Wrapper>
    )
}

export default CurrentExercise;

const WeightWrapper = styled.div`
    margin-top: 15px;
    font-family: var(--primary-font);
`;

const WeightInput = styled.input`
    width: 60px;
    height: 15px;
    margin-right: 10px;
`;

const WeightButton = styled.button`
    border: none;
    padding: 3px 10px;
    background-color: var(--tag-color-1);
`;

const WeightTitle = styled.p`
    font-size: 10px;
    margin-bottom: 0px;
`;

const LeftWrapper = styled.div`

`;


const Wrapper = styled.div`
    padding: 10px 0px;
    margin: 10px 20px;
    font-family: var(--primary-font);
    display: flex;
    justify-content: space-between;
`;

const Name = styled.div`
    font-size: 20px;

`;

const InfoWrapper = styled.div`
`;

const Sets = styled.div`
    
`;

const Reps = styled.div`
    
`;

const Notes = styled.div`
    font-size: 12px;
`;

const ModalWrapper = styled.div`
    
`;
