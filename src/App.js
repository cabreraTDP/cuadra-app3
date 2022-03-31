
import './App.css';
import { BrowserRouter, Outlet } from "react-router-dom";
import Header from './Components/Structure/Header';
import MainBox from './Components/Structure/MainBox';
import SideMenu from './Components/Structure/SideMenu';

import store from './state/store';
import { Provider } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Post } from './utils/axiosUtils';
import { AUTH_LOGIN } from './state/actions/types';

function App() {
  
  
    
  return (
    <Provider store={store}>
    <div className="App ">
      <div className="grid-container ">
        <div className="item-header"><Header /></div>
          <div className="item-menu "><SideMenu  /></div>
          <div className="item-main"><MainBox /></div>

      </div>
    </div>
    </Provider>
  );
}

export default App;
