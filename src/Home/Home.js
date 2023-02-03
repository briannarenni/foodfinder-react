import React, { useState, useEffect } from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import { Results } from './HomeResults';
// import MenuModal from '../MenuModal/MenuModal';

function Home({data}) {
  // const [fetchedData, setFetchedData] = useState([]);
  const [restaurants, setRestaurants] = useState(data);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCuisine, setSelectedCuisine] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedSort, setSelectedSort] = useState('Name');

  // const setInitResults = () => { }

  while (restaurants.length > 0) {
    setIsLoading(false);
  }

  // ! Run on initial load only
  useEffect(() => {
    // setInitResults();
    // setRestaurants(data);
    if (restaurants.length > 0) setIsLoading(false);
  }, []);

  const reset = () => {
    setIsLoading(true);
    setSelectedCity('');
    setSelectedCuisine('');
    setSelectedSort('Name');
    setRestaurants(data);
    // setRestaurants(fetchedData);
    // if (restaurants.length > 0) setIsLoading(false);
  }

  //   useEffect(() => {
  //   filterTable();
  // }, [selectedCuisine, selectedCity]);

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
    let filteredRestaurants = setInitResults();
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

