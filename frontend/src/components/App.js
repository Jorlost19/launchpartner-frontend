import React from 'react';
import { Route } from 'react-router-dom';
import Register from './Register';
import Dashboard from './Dashboard'

function App() {
  return (
    <>
        <Route path='/' exact component={Register} />
        <Route path='/dashboard' component={Dashboard} />
    </>
  )
}

export default App;
