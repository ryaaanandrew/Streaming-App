import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions/';

class GoogleAuth extends Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '345129407507-4k4t5ve38er54dk782f9e902uc41o8j5.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();

                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        });
    };

    onAuthChange = (isSignedIn) => {
        console.log('isSignedIn: ', isSignedIn);
        if (isSignedIn) {
            console.log('hit true in auth change')
            this.props.signIn();
        } else {
            console.log('hit false')
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
                <button className='ui red google button' onClick={this.onSignOutClick}>
                    <i className='google icon'/>
                    Sign out
                </button>
            )
        } else {
            return (
                <button className='ui red google button' onClick={this.onSignInClick}>
                    <i className='google icon'/>
                    Sign in with Google
                </button>
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
    console.log('mapStateToProps: ', state);
    return {
        isSignedIn: state.auth.isSignedIn
    }
};

export default connect(mapStateToProps, { signIn, signOut } )(GoogleAuth);