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
            })
        });
    };

    renderAuthButton = () => {
        if (this.state.isSignedIn === null) {
            return <div>I dont know if user is logged in </div>
        } else if ( this.state.isSignedIn ) {
            return <div> I am signed in </div>
        } else {
            return <div> I am not signed in </div>
        };
    } 

    render() {
        return(
            <div>{ this.renderAuthButton() } </div>
            
        );
    };
};

export default GoogleAuth;