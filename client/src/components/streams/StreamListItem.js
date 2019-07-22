import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkList = styled.div`
    padding: 2rem 3rem;
    margin: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #d3d3d3;
    box-shadow: 0px 3px 3px -1px rgba(143,143,143,.5);
`

const AdminButtonWrapper = styled.div`
    width: 15%;
    display: flex; 
    justify-content: space-between;
`

const AdminButtonDelete = styled(Link)`
    padding: 15px 25px;
    color: white;
    border-radius: 5px;
    background-color: #ff5f71;
    box-shadow: 0 5px 0 0 #f84357;
    font-family: 'Raleway', sans-serif;

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

const AdminButtonEdit = styled(Link)`
    background-color: #5a84ff;
    padding: 15px 25px;
    color: white;
    border-radius: 5px;
    box-shadow: 0 4px 0 0 #4071ff;
    transition: all .2s;
    font-family: 'Raleway', sans-serif;

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

const StreamListItem = (props) => {
    let { stream, renderAdmin, currentUserId } = props;

    renderAdmin = (stream) => {
        if (stream.userId === currentUserId) {
            return (
                <AdminButtonWrapper>
                    <AdminButtonEdit  to={`/streams/edit/${stream.id}`}>Edit</AdminButtonEdit>
                    <AdminButtonDelete to={`/streams/delete/${stream.id}`}>Delete</AdminButtonDelete>
                </AdminButtonWrapper>
            );
        };
    }

    return (
        <LinkList key={stream.id}>
            <div className="content">
                <Link to={`/streams/${stream.id}`} className='header'>
                    {stream.title}
                </Link>
                <div className="description">{stream.description}</div>
            </div>
             {renderAdmin(stream)}
        </LinkList>
    );
};

export default StreamListItem;

