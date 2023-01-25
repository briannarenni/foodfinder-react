import React, { useState, useEffect, useCallback } from 'react';
import { Restaurant, cuisines, cities } from '../_services/Models';
import { NavbarView } from './NavbarView.jsx';

// ! restaurants undefined

function Navbar({ restaurants, currTableList }) {
  const [currTableListState, setCurrTableList] = useState(currTableList);

  const [propState, setPropState] = useState({
    cuisines: [],
    cities: [],
    sortOptions: [],
  });

  const [filterState, setFilterState] = useState({
    selectedCuisine: '',
    selectedCity: '',
    isDesc: false,
    selectedSortOption: '',
  });

  const [filterChanged, setFilterChanged] = useState(false);

  useEffect(() => {
    setPropState({ ...propState, cuisines: restaurants.map(restaurant => restaurant.Cuisine) });
    setPropState({ ...propState, cities: restaurants.map(restaurant => restaurant.City) });
    setPropState({ ...propState, sortOptions: ['Name', 'Highest Rating', 'Lowest Rating'] });
    setFilterState({ ...filterState, selectedSortOption: propState.sortOptions[0] });
    filterChanged && setFilterState({ ...filterState, selectedSortOption: 'Name' });
  }, [filterChanged, propState, filterState]);


  const clearFilters = () => {
    setFilterState(prevFilterState => ({
      ...prevFilterState,
      selectedCuisine: '',
      selectedCity: '',
      selectedSortOption: 'Name',
    }));
    setCurrTableList([...restaurants]);
  }

  const sortTable = (sortOption) => {
    setFilterState(prevFilterState => ({
      ...prevFilterState,
      selectedSortOption: sortOption,
    }));
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

  const filterTable = (type, value) => {
    let filteredList = [...restaurants];

    if (filterState[`selected${type}`] === value) {
      setFilterState(prevFilterState => ({ ...prevFilterState, [`selected${type}`]: '' }));
    } else {
      setFilterState(prevFilterState => ({ ...prevFilterState, [`selected${type}`]: value }));
    }

    if (filterState[`selected${type}`]) {
      filteredList = filteredList.filter(restaurant => restaurant[type] === filterState[`selected${type}`]);
    }

    setCurrTableList(filteredList);
  }

  const props = { clearFilters, sortTable, filterTable, propState, filterState };

  return <NavbarView {...props} />;

}

export default Navbar;
