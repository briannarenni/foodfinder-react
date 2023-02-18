import React, { useState, useEffect } from 'react';
import './App.css';
import ApiService from './_services/apiService';
import Home from './home/Home';

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
      {data ? <Home data={data} /> : <p className="text-center">Loading...</p>}
    </div>
  );
}

export default App;
