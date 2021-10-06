import React from 'react';
import styled from 'styled-components';
import logo from './assets/fitness tracker.png'
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';

const LandingPage = () => {
    return (
        <Wrapper>
            <Logo src={logo} />
            <ButtonWrapper>
                <LoginButton />
            </ButtonWrapper>
            <Text>Let Your Fitness Journey Begin!</Text>
        </Wrapper>

    )
}

export default LandingPage;

const Text = styled.h1`
    font-family: 'Inter', sans-serif;
    color: black;
    font-size: 100px;
    margin-top: 300px;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Logo = styled.img`
    height: 200px;
    position: absolute;
    margin-top: 40px;
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;






