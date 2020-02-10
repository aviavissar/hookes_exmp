import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.style.js';
import App from './view/App';
import { StoreProvider } from '../src/state/Products.store';



ReactDOM.render( <StoreProvider><App /></StoreProvider>, document.getElementById('root'));
