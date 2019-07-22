import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import StreamListItem from './StreamListItem';
import { fetchStreams } from '../../actions';


const StreamListWrapper = styled.div`
    width: 90%;
    padding: 2rem 3rem;
    margin: 0 auto; 
    border-radius: 5px;
    border: 1px solid #d3d3d3;
`

const StreamListHeader = styled.div`
    padding: 1rem 2.5rem; 
    display: flex;
    justify-content: space-between;
    align-items: center; 
`

const StreamListHeaderContent = styled.h1`
    font-family: 'Playfair Display', serif;
    font-size: 4rem;
    letter-spacing: 3px;
`

const AdminButtonCreate = styled(Link)`
    display: inline-block;
    padding: 15px 25px;
    color: white;
    border-radius: 5px;
    background-color: #ff5f71;
    box-shadow: 0 5px 0 0 #f84357;
    font-family: 'Raleway', sans-serif;
    transition: all .2s;

    &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
    color: white;
    }

    &:hover {
        background-color: #ff7584;
    }
    &:active {
        transform: translateY(3px);
        box-shadow: none;
    }
`

class StreamList extends Component {
    componentDidMount() {
        this.props.fetchStreams();
    }

    renderList = () => {
        return this.props.streams.map(stream => {
            return (
                <StreamListItem 
                    stream={stream} 
                    renderAdmin={this.renderAdmin}
                    currentUserId={this.props.currentUserId}
                    />
            )
        });
    }

    renderCreate() {
        if (this.props.isSignedIn) {
            return (
                <div>
                    <AdminButtonCreate to="/streams/new">
                        <i className="play icon" />
                        Create Stream
                    </AdminButtonCreate>
                </div>
            );
        };
    }

    render() {
        return (
            <StreamListWrapper>
                <StreamListHeader>
                    <StreamListHeaderContent>Streams</StreamListHeaderContent>
                    {this.renderCreate()}
                </StreamListHeader>
                <div className="ui celled list">{this.renderList()}</div>
            </StreamListWrapper>
        )
    }
}

const mapStateToProps = state => {
    return { 
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    };
};
  
export default connect(
    mapStateToProps,
    { fetchStreams }
)(StreamList);