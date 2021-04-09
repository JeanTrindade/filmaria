import React, { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer }  from 'react-toastify';
import Routes from './Routes';
import './style.css';

class App extends Component{
  render(){
    return(
      <div className = 'app'>
        <Routes/>
        <ToastContainer autoClose={2500}/>
      </div>
    );
  }
}


export default App;