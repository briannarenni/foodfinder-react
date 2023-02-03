import React, { useEffect, useRef, useState } from 'react';
import Home from './Home/Home';
import ApiService from './_services/ApiService';
import './App.css';

function App() {
  const api = new ApiService();
  const dataRef = useRef(null);
  const [data, setData] = useState(dataRef.current);

  useEffect(() => {
    api.getRestaurants()
      .then(response => {
        dataRef.current = response;
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
