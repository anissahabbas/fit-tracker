import React from 'react';
import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';

const SearchBar = ({ setValue }) => {
    const handleChange = (e) => {
        setValue(e.target.value);
    };
    
    return (
        <Wrapper>
            <TypeAheadWrapper>
                <TypeAhead
                onChange={(e) => handleChange(e)}/>
                <StyledIcon />
            </TypeAheadWrapper>
            <ListWrapper>

            </ListWrapper>
        </Wrapper>
    )
}

export default SearchBar;

const TypeAheadWrapper = styled.div`
    display: flex;
    justify-content: center;
    border: solid lightgrey 2px;
    border-radius: 5px;
    position: absolute;
    height: 30px;
    width: 75%;
`;

const StyledIcon = styled(BsSearch)`
    position: absolute;
    background-color: white;
    top: 5px;
    left: 5px;
    z-index: 0;
`;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    height: 40px;
    background-color: white;
    position:fixed;
    margin-top: -3px;
`;

const TypeAhead = styled.input`
    border: none;
    height: 28px;
    width: 90%;
    left: 23px;
    position: absolute;
`;


const ListWrapper = styled.div`

`;