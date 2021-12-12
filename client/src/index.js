import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import generateStore from "./redux/store";
import axios from 'axios';
import './index.css';
import { apiUrl } from './constants';
import App from './app/App';

axios.defaults.baseURL = apiUrl;
ReactDOM.render(
    <Provider store={generateStore()}>
      <BrowserRouter>
          <App/>
      </BrowserRouter>
    </Provider>
 ,
  document.getElementById('root')
);