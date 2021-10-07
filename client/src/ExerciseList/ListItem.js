import React from 'react';
import styled from 'styled-components';
import { NewWorkoutContext } from '../WorkoutList/NewWorkoutContext';

const ListItem = ({ listItem, inModal }) => {
    const { setExerciseList, exerciseList } = React.useContext(NewWorkoutContext);
    const [reps, setReps] = React.useState();
    const [sets, setSets] = React.useState();


    const handleClick = () => {
        setExerciseList(exerciseList.concat({
            ...listItem,
            reps: reps,
            sets: sets,
        }));
    }
    return (
        <>
            <Wrapper>
                <NameWrapper>
                    <Name>{listItem.name}</Name>
                </NameWrapper>
                {!inModal &&
                    <TagWrapper>
                        {listItem.tags &&
                            listItem.tags.map((tag, ind) => {
                                return <Tag
                                    key={ind}
                                >{tag}</Tag>
                            })}
                    </TagWrapper>}
                {inModal &&
                    <ModalContentWrapper>
                        <Label>Sets: </Label>
                        <Input onChange={(e) => setSets(e.target.value)} />
                        <Label>Reps: </Label>
                        <Input onChange={(e) => setReps(e.target.value)} />
                        <AddButton onClick={handleClick}>+</AddButton>
                    </ModalContentWrapper>
                }
            </Wrapper>
            <Notes>{listItem.notes}</Notes>
        </>
    )
};

export default ListItem;

const Label = styled.div`
    font-family: var(--primary-font);

`;

const Input = styled.input`
    margin-top: 2px;
    width: 20px;
    height: 10px;
    padding: 5px;
`;

const ModalContentWrapper = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`;

const AddButton = styled.button`
    border: none;
    background-color: var(--primary-color);
    height: 30px;
    width: 30px;
    border-radius: 15px;
    font-size: 25px;
`;


const Wrapper = styled.div`
    display: flex;
    font-family: var(--primary-font);
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    margin: 0 20px;
`;

const Notes = styled.div`
    font-family: var(--primary-font);
    font-size: 12px;
    margin-top: -15px;
    margin: -15px 20px 0px 20px;
`;

const NameWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Name = styled.p`
    font-size: 20px;
`;


const Tag = styled.div`
    font-size: 15px;
    background-color: var(--tag-color-1);
    padding: 3px 10px;
    border-radius: 5px;
`;


const TagWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 5px 10px;
    justify-content: flex-end;
`;
