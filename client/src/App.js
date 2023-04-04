import React, { Component } from 'react';
import './App.css';
import SalesContainer from './SalesContainer/SalesContainer';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToastContainer />
        <SalesContainer />        
      </div>
    );
  }
}

export default App;
