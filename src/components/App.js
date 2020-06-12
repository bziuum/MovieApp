import React from 'react';
import { Router } from '@reach/router';
import NotFound from './NotFound';
import Movie from './Movie';

import Header from './elements/Header';
import Home from './Home';
import { GlobalStyle } from './styles/GlobalStyle';


const App = () => (
        <>
            <Header />
            <Router>
                <Home path="/"/>
                <Movie path="/:movieId" />
                <NotFound default />
            </Router>
            <GlobalStyle />
        </>
    )
    
export default App;
