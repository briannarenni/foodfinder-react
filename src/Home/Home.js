import React, { useState, useEffect } from 'react';
import { Restaurant } from '../_services/Models';
import Navbar from '../Navbar/Navbar';

function Home({ api }) {
  const [restaurants, setRestaurants] = useState([]);
  const [currTableList, setCurrTableList] = useState([]);

  useEffect(() => {
    api.getRestaurants()
      .then(response => {
        const restaurantsData = response.map(restaurant => new Restaurant(restaurant));
        setRestaurants(restaurantsData);
        setCurrTableList([...restaurantsData]);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Navbar restaurants={restaurants} currTableList={currTableList} setCurrTableList={setCurrTableList} />
    </div>
  );

}

export default Home;

