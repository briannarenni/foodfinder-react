import React, { useState, useEffect } from 'react';
import { Restaurant } from '../_services/Models';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import Results from './HomeResults.jsx';

function Home({ api }) {
  const [restaurants, setRestaurants] = useState([]);
  const [currTableList, setCurrTableList] = useState([]);

  useEffect(() => {
    api.getRestaurants()
      .then(response => {
        const restaurantsData = response.map(restaurant => new Restaurant(restaurant));
        setRestaurants(restaurantsData);
        setCurrTableList([...restaurantsData]);
        console.log(restaurants, currTableList);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const props = {restaurants, currTableList};

  return (
    <div>
      <Navbar restaurants={restaurants} currTableList={currTableList} setCurrTableList={setCurrTableList} />
      <Results props={props} />
    </div>
  );

}

export default Home;

