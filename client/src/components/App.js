import React from 'react';
import { Router, Route } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamShow from './streams/StreamShow';
import StreamList from './streams/StreamList';
import { Header } from './common';
import history from '../../src/history';

class App extends React.Component {

    render() {
        return(
            <Router history={history}>
                <Header />
                <div>
                    <Route path='/' exact component={StreamList} />
                    <Route path='/streams/new' exact component={StreamCreate} />
                    <Route path='/streams/edit' exact component={StreamEdit} />
                    <Route path='/streams/delete' exact component={StreamDelete} />
                    <Route path='/streams/show' exact component={StreamShow} />
                </div>
            </Router>
        )
    }
};

export default App;
