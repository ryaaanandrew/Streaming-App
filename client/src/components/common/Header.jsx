import React from 'react';
import { Link } from 'react-router-dom';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from 'styled-components';
import GoogleAuth from '../GoogleAuth';


const StyledHeader = styled.header`
    width: 100%;
    height: 5rem;
    padding: 3.5rem 1rem;
    margin-bottom: 1rem;
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

const StyledWrapperRight = styled.div`
    display: flex;
    width: 30rem;
    justify-content: space-between;
    align-items: center;
`

const StyledWrapperLeft = styled.div`
    align-items: center;
`

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    height: 20rem;
`

const Header = () => {
    return (
        <StyledHeader>
            <StyledWrapperLeft>
                <StyledLink to='/' className='item'>
                    <StyledFontAwesomeIcon icon={faPaperPlane} size='2x' />
                </StyledLink>
            </StyledWrapperLeft>
            <StyledWrapperRight>
                <StyledLink to='/' className='item'>
                    All Streams
                </StyledLink>
                <GoogleAuth />
            </StyledWrapperRight>
        </StyledHeader>
    );
};

export { Header };


