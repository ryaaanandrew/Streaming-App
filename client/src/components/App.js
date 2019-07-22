import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import  { ThemeProvider } from 'styled-components';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamShow from './streams/StreamShow';
import StreamList from './streams/StreamList';
import { Header } from './common';
import history from '../../src/history';

const theme = {
    main: "mediumseagreen"
  };

class App extends React.Component {
    render() {
        return(
            <ThemeProvider theme={theme}>
                <Router history={history}>
                    <Header />
                    <Switch>
                        <Route path='/' exact component={StreamList} />
                        <Route path='/streams/new' exact component={StreamCreate} />
                        <Route path='/streams/edit/:id' exact component={StreamEdit} />
                        <Route path='/streams/delete/:id' exact component={StreamDelete} />
                        <Route path='/streams/:id' exact component={StreamShow} />
                    </Switch>
                    </Router>
            </ThemeProvider>
        )
    }
};

export default App;
