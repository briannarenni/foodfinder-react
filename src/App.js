import React, { useState, useEffect } from 'react';
import './App.css';
import ApiService from './_services/ApiService';
import Home from './Home/Home';

function App() {
  const api = new ApiService();
  const [data, setData] = useState(null);

  useEffect(() => {
    api.getRestaurants()
      .then(response => {
        setData(response);
      })
      .catch(e => {
        console.error(e);
      });
  }, []);

  return (
    <div className="App">
      {data ? <Home data={data} /> : <p>Loading...</p>}
    </div>
  );
}

export default App;
