import React from 'react';
import SearchBar from '../SearchBar';
import ListItem from '../ExerciseList/ListItem';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';

const AddExerciseModalContent = () => {
    //get all existing exercises and lay them out so that they can be selected and added to the workout from the full page modal
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
                sessionStorage.setItem('userId', data.data[0]._id)
            });
    }, [])

    React.useEffect(() => {
        const userId = sessionStorage.getItem('userId');
        fetch(`/exercises/${userId}`)
            .then(res => res.json())
            .then(data => {
                setExercises(data.data);
                setIsLoaded(true);
            }
            )
    }, [])

    const tagsIncludes = (tags, value) => {
        return tags.some((tag) => {
            return tag.toLowerCase().includes(value);
        })
    }
    return (
        <>
            {isLoaded && <Wrapper>
                <SearchBar setValue={setSearchValue} />
 
                {searchValue.length > 2 ?
                    exercises.map((listItem, ind) => {
                        if (listItem.name
                            .toLowerCase()
                            .includes(searchValue) ||
                            tagsIncludes(listItem.tags, searchValue)) {
                            return (
                            <ListWrapper
                            key={`w${ind}`}>
                                <ListItem
                                    listItem={listItem}
                                    key={ind}
                                    inModal={true} />
                            </ListWrapper>
                            )}
                    }) : (exercises.length) ?
                        <ListWrapper>
                            {exercises.map((listItem) => {
                                return <ListItem
                                    listItem={listItem}
                                    inModal={true}
                                    key={listItem._id} />
                            })}
                        </ListWrapper>
                        : ''
                }
            </Wrapper>
            }
        </>
    )
}

export default AddExerciseModalContent;

const ListWrapper = styled.div`
    padding-top: 30px;
`;

const Wrapper = styled.div`
    margin-top: 90px;
    z-index: 0;
`;
