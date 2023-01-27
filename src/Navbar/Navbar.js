import React, { useState, useEffect } from 'react';
import { Restaurant, cuisines, cities, sortOptions } from '../_services/Models';
import './Navbar.css';
import { NavbarView } from './NavbarView.jsx';

function Navbar({ restaurants, setCurrTableList }) {
  // state for cuisines, cities, and sortOptions
  const [cuisinesState, setCuisines] = useState(cuisines);
  const [citiesState, setCities] = useState(cities);
  const [sortOptionsState, setSortOptions] = useState(sortOptions);

  // state for selected filter options
  const [filterState, setFilterState] = useState({
    selectedCuisine: '',
    selectedCity: '',
    selectedSortOption: sortOptions[0],
  });

  // set initial state of cuisines, cities, and sortOptions
  useEffect(() => {
    setCuisines(cuisines);
    setCities(cities);
    setSortOptions(sortOptions);
  }, []);

  const clearFilters = () => {
    setFilterState({
      selectedCuisine: '',
      selectedCity: '',
      selectedSortOption: 'Name',
    });
    setCurrTableList([...restaurants]);
  }

  const sortTable = (sortOption) => {
    setFilterState(prevFilterState => ({
      ...prevFilterState,
      selectedSortOption: sortOption,
    }));
    let currTableListState = [...restaurants];
    if (sortOption === 'Highest Rating') {
      currTableListState.sort((a, b) => b.Rating - a.Rating);
    } else if (sortOption === 'Lowest Rating') {
      currTableListState.sort((a, b) => a.Rating - b.Rating);
    } else {
      currTableListState.sort((a, b) => {
        if (a.RestName < b.RestName) return -1;
        if (a.RestName > b.RestName) return 1;
        return 0;
      });
    }
    setCurrTableList([...currTableListState]);
  }

  const handleSelectedCuisine = (cuisine) => {
    setFilterState(prevFilterState => ({
      ...prevFilterState,
      selectedCuisine: cuisine,
    }));
    if (restaurants) {
      filterTable();
    }
  }

  const handleSelectedCity = (city) => {
    setFilterState(prevFilterState => ({
      ...prevFilterState,
      selectedCity: city,
    }));
    if (restaurants) {
      filterTable();
    }
  }

  const filterTable = () => {
    let filteredList = [...restaurants];

    if (filterState[`selectedCuisine`]) {
      filteredList = filteredList.filter(restaurant => restaurant.Cuisine === filterState[`selectedCuisine`]);
    }

    if (filterState[`selectedCity`]) {
      filteredList = filteredList.filter(restaurant => restaurant.City === filterState[`selectedCity`]);
    }

    if (filteredList.length === 0) {
      setCurrTableList([]);
    } else {
      setCurrTableList(filteredList);
    }
  }

  const props = { clearFilters, sortTable, filterTable, cuisines, cities, sortOptions, filterState, handleSelectedCuisine, handleSelectedCity };

  return <NavbarView {...props} />;
}

export default Navbar;
