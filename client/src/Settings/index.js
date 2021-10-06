import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import styled from 'styled-components';
const Settings = () => {
    const { logout } = useAuth0();

    const handleLogout = () => {
        sessionStorage.removeItem('userId');
        logout({ returnTo: window.location.origin })
    }
    return (
        <Wrapper>
            <Button onClick={handleLogout}>Log Out</Button>
        </Wrapper>
    )
};

export default Settings;

const Wrapper = styled.div`
    height: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Button = styled.button`
    width: 50%;
    height: 40px;
    background-color: var(--primary-color);
    font-family: var(--primary-font);
    font-size: 20px;
    border-radius: 12px;
    box-shadow: .5px 1px 5px #888888;
    color: white;
    border: none;
`;