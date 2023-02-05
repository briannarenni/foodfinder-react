import React, { useState} from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import { Results } from './HomeResults';
// import MenuModal from '../MenuModal/MenuModal';

function Home({ data }) {
  const [restaurants, setRestaurants] = useState(data.slice());

  const reset = () => {
    setRestaurants(data);
  }

  const sortBy = (option) => {
    setRestaurants(sortData(restaurants, option));
  };

  const filterBy = (cuisine, city, sort) => {
    let filteredRestaurants = data.slice();
    if (city.city) filteredRestaurants = filteredRestaurants.filter(restaurant => restaurant.City === city.city);
    if (cuisine.cuisine) filteredRestaurants = filteredRestaurants.filter(restaurant => restaurant.Cuisine === cuisine.cuisine);

    setRestaurants(sortData(filteredRestaurants, sort));
  };

  const sortData = (data, option) => {
    switch (option) {
      case 'Name':
        return data.sort((a, b) => (a.RestName > b.RestName ? 1 : -1));
      case 'Highest Rating':
        return data.sort((a, b) => (a.Rating < b.Rating ? 1 : -1));
      case 'Lowest Rating':
        return data.sort((a, b) => (a.Rating > b.Rating ? 1 : -1));
      default:
        return data;
    }
  };

  const navProps = { reset, sortBy, filterBy };

  return (
    <div>
      <Navbar {...navProps} />
      <Results restaurants={restaurants} />
    </div>
  );
}

export default Home;

