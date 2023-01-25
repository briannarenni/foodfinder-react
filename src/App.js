import React from 'react';
import ApiService from './_services/ApiService';
// import TableService from './_services/TableService';
import Home from './Home/Home';
import './App.css';

const api = new ApiService();

function App() {
  return (
    <div className="App">
      <Home api={api} />
    </div>
  );
}

export default App;
