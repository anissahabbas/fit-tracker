import React from 'react';
import SearchBar from '../SearchBar';
import { exerciseListData } from '../dummyData'
import ListItem from './ListItem';
import styled from 'styled-components';
import FormDialog from './FormDialog';

const ExerciseList = () => {
    console.log(exerciseListData);
    return (
        <>
            <Wrapper>
                <SearchBar />
                <ListWrapper>
                    {exerciseListData.map((listItem) => {
                        return <ListItem listItem={listItem}
                            key={listItem._id} />
                    })}
                </ListWrapper>
            </Wrapper>
            <ButtonWrapper>
                <FormDialog />
            </ButtonWrapper>
            <DialogWrapper>
            </DialogWrapper>
        </>
    )
}

export default ExerciseList;

const ListWrapper = styled.div`
    padding-top: 30px;
`;

const Wrapper = styled.div`
    margin-top: 90px;
    z-index: 0;
`;

const DialogWrapper = styled.div`

`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 100px;
`;
/*
const AddButton = styled.button`
    position: fixed;
    border: none;
    height: 80px;
    width: 80px;
    border-radius: 40px;
    bottom: 80px;
    margin-right: 20px;
    font-size: 70px;
    background-color: var(--primary-color);

`; */