import React, { useState } from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import { Results } from './HomeResults';

function Home({ data }) {
  const [restaurants, setRestaurants] = useState(data.slice());
  const [selectedSort, setSelectedSort] = useState('Name (A-Z)');
  const [selectedCuisine, setSelectedCuisine] = useState({ cuisine: '' });
  const [selectedCity, setSelectedCity] = useState({ city: '' });

  const reset = () => {
    setSelectedSort('Name (A-Z)');
    setSelectedCity('');
    setSelectedCuisine('');
    setRestaurants(data);
  };

  const sortBy = (option) => setRestaurants(sortData(restaurants, option));

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
      case 'Highest Score':
        return data.sort((a, b) => (a.Rating < b.Rating ? 1 : -1));
      case 'Lowest Score':
        return data.sort((a, b) => (a.Rating > b.Rating ? 1 : -1));
      default:
        return data;
    }
  };

  const navProps = { reset, sortBy, filterBy, selectedCuisine, selectedCity, selectedSort, setSelectedSort, setSelectedCuisine, setSelectedCity };

  return (
    <div>
      <Navbar { ...navProps } />
      <Results restaurants={ restaurants } reset={ reset } />
    </div>
  );
}

export default Home;

