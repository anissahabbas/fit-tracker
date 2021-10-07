import React from 'react';
import SearchBar from '../SearchBar';
import ListItem from './ListItem';
import styled from 'styled-components';
import FormDialog from './FormDialog';
import { useAuth0 } from '@auth0/auth0-react';
import Header from '../Header';

const ExerciseList = () => {
    const { user } = useAuth0();
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [exercises, setExercises] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState('');

    React.useEffect(() => {
        fetch('/user', {
            method: 'POST',
            body: JSON.stringify({ email: user.email }),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            }
        })
            .then(res => res.json())
            .then(data => {
                sessionStorage.setItem('userId', data.data[0]['_id'])
            });
        const userId = sessionStorage.getItem('userId');
        fetch(`/exercises/${userId}`)
            .then(res => res.json())
            .then(data => {
                setExercises(data.data);
                setIsLoaded(true);
            }
            )
    }, [isLoaded])

    const tagsIncludes = (tags, value) => {
        if (tags) {
            return tags.some((tag) => {
                return tag.toLowerCase().includes(value);
            })
        }
    }
    return (
        <>
            <Header title='Exercises' />
            {
                <Wrapper>
                    <SearchBar
                        setValue={setSearchValue} />
                    {searchValue.length > 2 ?
                        exercises.map((listItem, ind) => {
                            if (listItem.name.toLowerCase().includes(searchValue.toLowerCase()) || tagsIncludes(listItem.tags, searchValue.toLowerCase())) {
                                return (isLoaded &&
                                    <ListWrapper>
                                        <ListItem
                                            listItem={listItem}
                                            key={ind} />
                                    </ListWrapper>)
                            }
                        }) : (exercises.length && isLoaded) ?
                            <ListWrapper>
                                {exercises.map((listItem) => {
                                    return <ListItem
                                        listItem={listItem}
                                        key={listItem._id} />
                                })}
                            </ListWrapper>
                            : ''
                    }
                </Wrapper>}
            <ButtonWrapper>
                <FormDialog
                    setExercises={setExercises}
                    exercises={exercises} />
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
