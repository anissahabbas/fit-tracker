import React from 'react';
import SearchBar from '../SearchBar';
import { exerciseListData } from '../dummyData'
import ListItem from '../ExerciseList/ListItem';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';
import Header from '../Header';

const AddExerciseModalContent = () => {
    const { user } = useAuth0();
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [exercises, setExercises] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState('');

    console.log(searchValue, 'search');
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
                console.log(data, 'hello')
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
                <SearchBar
                    setValue={setSearchValue} />
                {searchValue.length > 2 ?
                    exercises.map((listItem, ind) => {
                        if (listItem.name.toLowerCase().includes(searchValue) || tagsIncludes(listItem.tags, searchValue)) {
                            return (<ListWrapper>
                                <ListItem
                                    listItem={listItem}
                                    key={ind}
                                    inModal={true} />
                            </ListWrapper>)
                        }
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
            </Wrapper>}
        </>
    )
}

export default AddExerciseModalContent;

const Message = styled.div`
    padding-top: 50px;
    text-align: center;
    font-family: var(--primary-font);
`;

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