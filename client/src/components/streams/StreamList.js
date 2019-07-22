import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
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

const LinkList = styled.div`
    padding: 2rem 3rem;
    margin: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #d3d3d3;
    box-shadow: 0px 3px 3px -1px rgba(143,143,143,.5)
`
const AdminButtonWrapper = styled.div`
    width: 15%;
    display: flex; 
    justify-content: space-between;
`

const AdminButtonEdit = styled(Link)`
    background-color: #5a84ff;
    padding: 15px 25px;
    color: white;
    border-radius: 5px;
    box-shadow: 0 4px 0 0 #4071ff;
    transition: all .2s;

    &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
    color: white;
    }

    &:hover {
        background-color: #779aff;
    }
    
    &:active {
        transform: translateY(3px);
        box-shadow: none;
    }
`
const AdminButtonDelete = styled(Link)`
    padding: 15px 25px;
    color: white;
    border-radius: 5px;
    background-color: #ff5f71;
    box-shadow: 0 5px 0 0 #f84357;

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
`

class StreamList extends Component {
    componentDidMount() {
        this.props.fetchStreams();
    }

    renderAdmin = (stream) => {
        if (stream.userId === this.props.currentUserId) {
            return (
                <AdminButtonWrapper>
                    <AdminButtonEdit  to={`/streams/edit/${stream.id}`}>Edit</AdminButtonEdit>
                    <AdminButtonDelete to={`/streams/delete/${stream.id}`}>Delete</AdminButtonDelete>
                </AdminButtonWrapper>
            );
        };
    }

    renderList = () => {
        return this.props.streams.map(stream => {
            return (
                <LinkList key={stream.id}>
                    <div className="content">
                        <Link to={`/streams/${stream.id}`} className='header'>
                            {stream.title}
                        </Link>
                        <div className="description">{stream.description}</div>
                    </div>
                    {this.renderAdmin(stream)}
                </LinkList>
            );
        });
    }

    renderCreate() {
        if (this.props.isSignedIn) {
            return (
                <div style={{ textAlign: 'right' }}>
                    <Link to="/streams/new" className='ui button primary'>
                        Create Stream
                    </Link>
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