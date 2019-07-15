import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { StreamCreate, StreamDelete, StreamEdit, StreamShow, StreamList } from './streams';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Route path='/' exact component={StreamList} />
                <Route path='/streams/new' exact component={StreamCreate} />
                <Route path='/streams/edit' exact component={StreamEdit} />
                <Route path='/streams/delete' exact component={StreamDelete} />
                <Route path='/streams/show' exact component={StreamShow} />
            </div>
        </BrowserRouter>
    )
};

export default App;
