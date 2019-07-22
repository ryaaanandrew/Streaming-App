import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions/';
import styled from 'styled-components';

const ButtonContainer = styled.div`
    padding: 1.5rem 3rem;
    border-radius: 5px;
    background-color: #fa243c;
    box-shadow: 0 5px 0 0 #DC001A;
    transition: all .2s;
    color: white;

    &:hover {
        background-color: #FB4d61;
    }
    &:active {
        transform: translateY(3px);
        box-shadow: none;
    }
`

const ButtonText = styled.p`
    font-family: 'Raleway', sans-serif;
    float: right;
    margin-left: 10px;
`

class GoogleAuth extends Component {
    componentDidMount() {
        const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: GOOGLE_API_KEY,
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();

                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)
            });
        });
    };

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton = () => {
        if (this.props.isSignedIn === null) {
            return null
        } else if ( this.props.isSignedIn ) {
            return (
                <ButtonContainer onClick={this.onSignOutClick}>
                    <i className='google icon'/>
                    <ButtonText>Sign out</ButtonText>
                </ButtonContainer>
            )
        } else {
            return (
                <ButtonContainer onClick={this.onSignInClick}>
                    <i className='google icon'/>
                    <ButtonText>Sign in</ButtonText>
                </ButtonContainer>
            )
        };
    } 

    render() {
        return(
            <div>{ this.renderAuthButton() } </div>
            
        );
    };
};

const mapStateToProps = state => {
    return {
        isSignedIn: state.auth.isSignedIn
    }
};

export default connect(mapStateToProps, { signIn, signOut } )(GoogleAuth);