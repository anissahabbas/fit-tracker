import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <Wrapper>
            <Title>HEADER</Title>
        </Wrapper>
    )
};

export default Header;

const Wrapper = styled.header`
    position: fixed;
    top: 0px;
    width: 100%;
`;

const Title = styled.h1`
    font-family: var(--header-font);
    font-size: 70px;
    color: var(--primary-color);
    margin: 0 auto;
    text-align: center;
    background-color: white;
    z-index: 5;
`;