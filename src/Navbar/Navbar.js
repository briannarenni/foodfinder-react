import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { NavbarView } from './NavbarView.jsx';

function Navbar(navProps) {
  const { reset, sortBy, filterBy } = navProps;
  const [selectedSort, setSelectedSort] = useState('Name');
  const [selectedCuisine, setSelectedCuisine] = useState({ cuisine: '' });
  const [selectedCity, setSelectedCity] = useState({ city: '' });

  const onClearFilters = () => {
    setSelectedSort('Name');
    setSelectedCity('');
    setSelectedCuisine('');
    reset();
  }

  const onSortSelection = (option) => {
    setSelectedSort(option);
    sortBy(option);
  };

  const onCuisineSelection = (cuisineOption) => {
    setSelectedCuisine(prevState =>
      prevState.cuisine === cuisineOption ? { cuisine: '' } : { cuisine: cuisineOption }
    );
    filterBy(selectedCuisine, selectedCity, selectedSort);
  }

  const onCitySelection = (cityOption) => {
    setSelectedCity(prevState =>
      prevState.city === cityOption ? { city: '' } : { city: cityOption }
    );
    filterBy(selectedCuisine, selectedCity, selectedSort);
  }

  const props = { selectedSort, selectedCuisine, selectedCity, onClearFilters, onSortSelection, onCuisineSelection, onCitySelection };

  return <NavbarView {...props} />;
}

export default Navbar;
