import React, { useState, useEffect } from 'react';
import { cuisineFilters, cityFilters, sortFilters } from '../_services/Models';
import './Navbar.css';
import { NavbarView } from './NavbarView.jsx';

function Navbar(navProps) {
  const { reset, sortTable } = navProps;

  const [selectedSort, setSelectedSort] = useState('Name');
  // const [selectedCuisine, setSelectedCuisine] = useState('');
  // const [selectedCity, setSelectedCity] = useState('');

  // TODO: Reset
  const onClearFilters = () => {
    setSelectedSort('Name');
    // setSelectedCity('');
    // setSelectedCuisine('');
    reset();
  }

  // TODO: on click functions (sort, filter cuisine, filter city)
  // ?

  // const onSortSelection = (option) => {
  //   setSelectedSort(option);
  //   sortTable(selectedSort);
  // };

  const props = { onClearFilters, selectedSort, setSelectedSort };

  return <NavbarView {...props} />;

}

export default Navbar;
