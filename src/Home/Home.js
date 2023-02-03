import React, { useState, useEffect } from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import { Results } from './HomeResults';
// import MenuModal from '../MenuModal/MenuModal';

function Home({ data }) {
  // ! reset should work on click
  const [restaurants, setRestaurants] = useState(data);

  const reset = () => {
    setRestaurants(data);
  }

  const sortTable = (option) => {
    // switch (option) {
    //   case 'Name':
    //     restaurants.sort((a, b) => (a.RestName > b.RestName ? 1 : -1));
    //     break;
    //   case 'Highest Rating':
    //     restaurants.sort((a, b) => (a.Rating < b.Rating ? 1 : -1));
    //     break;
    //   case 'Lowest Rating':
    //     restaurants.sort((a, b) => (a.Rating > b.Rating ? 1 : -1));
    //     break;
    //   default:
    //     break;
    // }
  };

  const filterTable = (type, value) => {
    // Toggle if already active
    // switch (type) {
    //   case 'cuisine':
    //     setSelectedCuisine(selectedCuisine === value ? "" : value);
    //     break;
    //   case 'city':
    //     setSelectedCity(selectedCity === value ? "" : value);
    //     break;
    //   default:
    //     break;

    //     if (selectedCity) filteredRestaurants = filteredRestaurants.filter(restaurant => restaurant.City === selectedCity);

    //     if (selectedCuisine) filteredRestaurants = filteredRestaurants.filter(restaurant => restaurant.Cuisine === selectedCuisine);

    //     //  ? Do I need to call sort with active sortOption?
    //     setRestaurants(filteredRestaurants);
    // };
  }

  const navProps = { reset };   // sortTable, filterTable

  return (
    <div>
      <Navbar {...navProps} />
      <Results restaurants={restaurants} />
    </div>
  );
}

export default Home;

