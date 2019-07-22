import React from 'react';
import { Link } from 'react-router-dom';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from 'styled-components';
import GoogleAuth from '../GoogleAuth';


const HeaderContainer = styled.header`
    width: 100%;
    height: 5rem;
    padding: 3.5rem 1rem;
    margin-bottom: 2rem;
    background-color: #24292e;
    box-shadow: 0px 5px 6px -2px rgba(143,143,143,1);

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: 1.4rem;
    letter-spacing: 2px;

    &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
    color: white;
}
`

const WrapperRight = styled.div`
    display: flex;
    width: 40rem;
    justify-content: space-between;
    align-items: center;
`

const WrapperLeft = styled.div`
    align-items: center;
`

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    height: 20rem;
    margin-left: 4rem;
`

const HeaderText = styled.h1`
    font-family: 'Roboto Mono', monospace;
`

const Header = () => {
    return (
        <HeaderContainer>
            <WrapperLeft>
                <StyledLink to='/' className='item'>
                    <StyledFontAwesomeIcon icon={faPaperPlane} size='2x' />
                </StyledLink>
            </WrapperLeft>
            <WrapperRight>
                <StyledLink to='/' className='item'>
                    <HeaderText>All Streams</HeaderText>
                </StyledLink>
                <GoogleAuth />
            </WrapperRight>
        </HeaderContainer>
    );
};

export { Header };


