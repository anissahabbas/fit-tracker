import React from 'react';
import SearchBar from '../SearchBar';
import styled from 'styled-components';
import Header from '../Header/index';
import ListItem from './ListItem';
import FormDialog from './FormDialog';

const WorkoutList = () => {
    const userId = sessionStorage.getItem('userId');
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [workouts, setWorkouts] = React.useState();
    const [searchValue, setSearchValue] = React.useState('');

    React.useEffect(() => {
        fetch(`/workouts/${userId}`)
            .then(res => res.json())
            .then(data => {
                setWorkouts(data.data)
                setIsLoaded(true)
            });
    }, [])

    const tagsIncludes = (tags, value) => {
        return tags.some((tag) => {
            return tag.toLowerCase().includes(value);
        })
    }

    return (
        <>
            <Header title='Workouts' />
            <Wrapper>
                <SearchBar
                    setValue={setSearchValue} />
                {isLoaded &&
                    searchValue.length > 2 ?
                    workouts.map((listItem, ind) => {
                        if (listItem.name.toLowerCase().includes(searchValue) || tagsIncludes(listItem.tags, searchValue)) {
                            return (
                            <ListWrapper
                            key={`w${ind}`}>
                                <ListItem
                                    listItem={listItem}
                                    key={ind} />
                            </ListWrapper>)
                        }
                    }) :
                    isLoaded &&
                        workouts.length ? <ListWrapper>
                        {workouts.map((workout, ind) => {
                            return <ListItem
                                listItem={workout}
                                key={ind} />
                        })}
                    </ListWrapper> :
                        <div>add an exercise!</div>}
                <ButtonWrapper>
                    <FormDialog />
                </ButtonWrapper>
            </Wrapper>
        </>
    )
};

export default WorkoutList;

const Wrapper = styled.div`
    margin-top: 90px;
`;

const ListWrapper = styled.div`
    padding-top: 30px;
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 100px;
`;