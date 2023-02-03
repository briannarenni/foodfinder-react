import React, { useEffect } from 'react';
import Home from './Home/Home';
import ApiService from '../_services/ApiService';
import './App.css';

function App() {
  const api = new ApiService();
  let data;

  useEffect(() => {
    api.getRestaurants()
      .then(response => {
        data = response;
      })
      .catch(e => {
        console.error(e);
      });
  }, []);

  return (
    <div className="App">
      <Home data={data} />
    </div>
  );

}

export default App;
