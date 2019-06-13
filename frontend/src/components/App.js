import React from 'react';
import { Route } from 'react-router-dom';
import Register from './Register';
import {StylesProvider, createGenerateClassName} from '@material-ui/styles';

function App() {
  return (
    <StylesProvider generateClassName={createGenerateClassName()}>
        <h1>Launch Partner</h1>
        <Route path='/' exact component={Register} />
    </StylesProvider>
  )
}

export default App;
