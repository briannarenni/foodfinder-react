import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { NavbarView } from './NavbarView.jsx';

function Navbar(navProps) {
  const { reset, sortTable } = navProps;
  const [selectedSort, setSelectedSort] = useState('Name');
  // TODO: on click functions
  const [selectedCuisine, setSelectedCuisine] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const onClearFilters = () => {
    setSelectedSort('Name');
    // TODO:
    setSelectedCity('');
    setSelectedCuisine('');
    reset();
  }

  const onSortSelection = (option) => {
    setSelectedSort(option);
    sortTable(option);
  };

  const onCuisineSelection = (selectedCuisine) => {
    setSelectedCuisine(selectedCuisine)
   }

  const onCitySelection = (selectedCity) => {
    setSelectedCity(selectedCity);
  }

  const props = { onClearFilters, selectedSort, onSortSelection, selectedCuisine, onCuisineSelection, selectedCity, onCitySelection };

  return <NavbarView {...props} />;

}

export default Navbar;
