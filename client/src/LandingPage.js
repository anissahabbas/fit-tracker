import React from 'react';
import styled from 'styled-components';
import logo from './assets/fitness tracker.png'
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';

const LandingPage = () => {
    const { loginWithRedirect } = useAuth0();

    const handleLogin = () => {
        loginWithRedirect()
    }

    return (
        <Wrapper>
            <Logo src={logo} />
            <ButtonWrapper>
                <LoginButton />
            </ButtonWrapper>
        </Wrapper>

    )
}

export default LandingPage;


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

const SignUpButton = styled.button`
    margin-top: 3%;
    width: 50%;
    height: 40px;
    background-color: lightgrey;
    font-family: var(--primary-font);
    font-size: 20px;
    border-radius: 12px;
    box-shadow: .5px 1px 5px #888888;
    color: white;
    border: none;
`;




