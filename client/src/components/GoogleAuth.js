import React, { Component } from 'react';

class GoogleAuth extends Component {
    state = { isSignedIn: null };

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '345129407507-4k4t5ve38er54dk782f9e902uc41o8j5.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get() });
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        });
    };

    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton = () => {
        if (this.state.isSignedIn === null) {
            return null
        } else if ( this.state.isSignedIn ) {
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

export default GoogleAuth;