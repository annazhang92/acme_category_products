import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
    HashRouter,
    Route,
    Link
  } from 'react-router-dom';
import Products from './Products';

const root =document.getElementById('root');

// ReactDOM.render(<hr/>, root)

ReactDOM.render(
    <HashRouter>
    <Route path='/' component={App}></Route>
  </HashRouter>,
    root
  );
  