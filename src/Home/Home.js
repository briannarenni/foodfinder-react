import React, { useState, useEffect } from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import { Results } from './HomeResults';
import ApiService from '../_services/ApiService';
import { flushSync } from 'react-dom';
// import MenuModal from '../MenuModal/MenuModal';

const api = new ApiService();

function Home() {
  const [fetchedData, setFetchedData] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [willReset, setWillReset] = useState(false);
  const [selectedCuisine, setSelectedCuisine] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedSort, setSelectedSort] = useState('Name');

  useEffect(() => {
    api.getRestaurants()
      .then(response => {
        setRestaurants(response);
        setFetchedData(restaurants);
        if (restaurants.length > 0) setIsLoading(false);
      })
      .catch(e => {
        e = "Error: No response returned"
        console.log(e);
      });
  }, []);

  useEffect(() => {
    reset();
    setIsLoading(false);
  }, [willReset])

  // TODO: Not loading on click yet!
  const reset = () => {
    setWillReset(true);
    setIsLoading(true);
    setRestaurants(fetchedData);
    // setSelectedCity('');
    // setSelectedCuisine('');
    // setSelectedSort('');
    setWillReset(false);
  }

  // TODO: Re-render on change?
  // useEffect(() => {
  //   sortTable(selectedSort);
  // }, [selectedSort]);

  //   useEffect(() => {
  //   filterTable();
  // }, [selectedCuisine, selectedCity]);

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
  // filterTable, sortTable, selectedCuisine, selectedCity, selectedSort, setSelectedCuisine, setSelectedCity, setSelectedSort
  const navProps = { reset };

  return (
    <div>
      <Navbar {...navProps} />
      <Results restaurants={restaurants} isLoading={isLoading} />
    </div>
  );
}

export default Home;

