import React, { useState, useEffect } from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import { Results } from './HomeResults';
import ApiService from '../_services/ApiService';
// import MenuModal from '../MenuModal/MenuModal';

const api = new ApiService();

function Home() {
  let fetchedData;
  const [isLoading, setIsLoading] = useState(true);
  const [restaurants, setRestaurants] = useState([]);
  const [selectedCuisine, setSelectedCuisine] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedSort, setSelectedSort] = useState('Name');

  useEffect(() => {
    api.getRestaurants()
      .then(response => {
        fetchedData = response;
        setRestaurants(response);
        if (fetchedData.length > 0) setIsLoading(false);
      })
      .catch(e => {
        e = "Error: No response returned"
        console.log(e);
      });
  }, []);

  // TODO: Re-render on change?
  // useEffect(() => {
  //   sortTable(selectedSort);
  // }, [selectedSort]);

  //   useEffect(() => {
  //   filterTable();
  // }, [selectedCuisine, selectedCity]);

  // TODO: Start here!
  const reset = () => {
    setRestaurants(fetchedData);
    setSelectedCity('');
    setSelectedCuisine('');
    setSelectedSort('');
  }

  const sortTable = (selectedSort) => {
    switch (selectedSort) {
      case 'Name':
        restaurants.sort((a, b) => (a.RestName > b.RestName ? 1 : -1));
        break;
      case 'Highest Rating':
        restaurants.sort((a, b) => (a.Rating < b.Rating ? 1 : -1));
        break;
      case 'Lowest Rating':
        restaurants.sort((a, b) => (a.Rating > b.Rating ? 1 : -1));
        break;
      default:
        break;
    }
  };

  const filterTable = (type, value) => {
    let filteredRestaurants = fetchedData;
    // Toggle if already active
    switch (type) {
      case 'cuisine':
        setSelectedCuisine(selectedCuisine === value ? "" : value);
        break;
      case 'city':
        setSelectedCity(selectedCity === value ? "" : value);
        break;
      default:
        break;
    }

    if (selectedCity) filteredRestaurants = filteredRestaurants.filter(restaurant => restaurant.City === selectedCity);

    if (selectedCuisine) filteredRestaurants = filteredRestaurants.filter(restaurant => restaurant.Cuisine === selectedCuisine);

    //  ? Do I need to call sort with active sortOption?
    setRestaurants(filteredRestaurants);
  };

  // * Props
  const navProps = { reset, filterTable, sortTable, selectedCuisine, selectedCity, selectedSort, setSelectedCuisine, setSelectedCity, setSelectedSort };

  return (
    <div>
      <Navbar {...navProps} />
      <Results restaurants={restaurants} isLoading={isLoading} />
    </div>
  );
}

export default Home;

