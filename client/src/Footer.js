import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { GiWeightLiftingUp } from 'react-icons/gi';
import { ImPencil } from 'react-icons/im';
import { GoGraph } from 'react-icons/go';
import { IoMdSettings } from 'react-icons/io'

const Footer = () => {

    return (
        <Wrapper>
            <NavBar>
                <NavItem to='/exerciseList'>
                    <ImPencil size='45px' />
                </NavItem>
                <NavItem to='/workoutList'>
                    <GiWeightLiftingUp size='50px' />
                </NavItem>
                <NavItem to='/stats'>
                    <GoGraph size='45px' />
                </NavItem>
                <NavItem to='/settings'>
                    <IoMdSettings size='45px' />
                </NavItem>
            </NavBar>
        </Wrapper>
    )
};

export default Footer;

const Wrapper = styled.footer`
`;

const NavBar = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    position: absolute;
    bottom: 0px;
    position: fixed;
    background-color: white;
`;

const NavItem = styled(NavLink)`
    color: var(--primary-color);

`;