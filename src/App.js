import React, { useEffect, useRef } from 'react';
import Home from './Home/Home';
import ApiService from './_services/ApiService';
import './App.css';

function App() {
  const api = new ApiService();
  let dataRef = useRef(null);

  useEffect(() => {
    api.getRestaurants()
      .then(response => {
        dataRef.current = response;
      })
      .catch(e => {
        console.error(e);
      });
  }, []);

  return (
    <div className="App">
      <Home data={dataRef.current} />
    </div>
  );

}


export default App;
