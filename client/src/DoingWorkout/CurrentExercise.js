import React from 'react';
import LastExerciseModal from './LastExerciseModal';
import NotesModal from './NotesModal';
import styled from 'styled-components';
import UpdatePopUp from './UpdatePopUp';

const CurrentExercise = ({ item }) => {
    const [currentWeight, setCurrentWeight] = React.useState();
    const [notes, setNotes] = React.useState();
    const [sets, setSets] = React.useState(item.sets);
    const [reps, setReps] = React.useState(item.reps);
    const [isComplete, setIsComplete] = React.useState(false);
    const userId = sessionStorage.getItem('userId')
    const { _id, name, tags } = item;

    const handleClick = () => {
        const newCompletedExercise = {
            exercise_id: _id,
            user_id: userId,
            name: name,
            notes: notes,
            tags: tags,
            sets,
            reps,
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
        setIsComplete(true);
    }

    return (
        <Wrapper
            style={{ 'color': isComplete ? 'grey' : '' }}>
            <LeftWrapper>
                <Name>{item.name}</Name>
                <Notes>{item.notes}</Notes>
                <WeightWrapper>
                    <WeightTitle>Weight Used: </WeightTitle>
                    <WeightInput
                        onChange={(e) => setCurrentWeight(e.target.value)} />
                    {isComplete ?
                        <DisabledButton>Complete</DisabledButton> :
                        <WeightButton
                            onClick={handleClick}>Complete</WeightButton>}
                </WeightWrapper>

            </LeftWrapper>
            <InfoWrapper>
                <SetWrapper>
                    <Sets>Sets: {sets}</Sets>
                    <UpdatePopUp
                        setValue={setSets}
                        isComplete={isComplete} />
                </SetWrapper>
                <SetWrapper>
                    <Reps>Reps: {reps}</Reps>
                    <UpdatePopUp
                        setValue={setReps}
                        isComplete={isComplete} />
                </SetWrapper>
                <ModalWrapper>
                    <LastExerciseModal id={item._id} />
                    <NotesModal setNotes={setNotes} />
                </ModalWrapper>
            </InfoWrapper>
        </Wrapper>
    )
}

export default CurrentExercise;


const SetWrapper = styled.div`
    display: flex;
`;

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

const DisabledButton = styled(WeightButton)`
    disabled: true;
    background-color: #BAC4E5;
`;

const WeightTitle = styled.p`
    font-size: 10px;
    margin-bottom: 0px;
`;

const Wrapper = styled.div`
    padding: 10px 0px;
    margin: 10px 20px;
    font-family: var(--primary-font);
    display: flex;
    justify-content: space-between;
`;

const Notes = styled.div`
    font-size: 12px;
`;

const Name = styled.div`
    font-size: 20px;
`;

const LeftWrapper = styled.div`
`;

const InfoWrapper = styled.div`
`;

const Sets = styled.div`
`;

const Reps = styled.div`
`;

const ModalWrapper = styled.div`
`;
