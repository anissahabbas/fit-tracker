import React from 'react';
import styled from 'styled-components';

const Header = ({ title }) => {
    return (
        <Wrapper>
            <Title
                style={{
                    'font-size':
                        (title.length > 10) ?
                            '40px' :
                            '70px'
                }}>{title}</Title>
        </Wrapper>
    )
};

export default Header;

const Wrapper = styled.header`
    position: fixed;
    top: 0px;
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    background-color: white;
`;

const Title = styled.h1`
    font-family: var(--header-font);
    color: var(--primary-color);
    margin: 0 auto;
    text-align: center;
    background-color: white;
    z-index: 5;
`;