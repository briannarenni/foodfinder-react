import React, { useState, useEffect } from 'react';
import { sortFilters } from '../_services/Models';
import './Navbar.css';
import { NavbarView } from './NavbarView.jsx';

function Navbar(navProps) {
  const { reset, sortTable } = navProps;
  // TODO: on click functions (sort, filter cuisine, filter city)
  const [selectedSort, setSelectedSort] = useState('Name');
  // const [selectedCuisine, setSelectedCuisine] = useState('');
  // const [selectedCity, setSelectedCity] = useState('');

  const onClearFilters = () => {
    setSelectedSort('Name');
    // setSelectedCity('');
    // setSelectedCuisine('');
    reset();
  }

  // ? Watch with useEffect on choice change?
  // const onSortSelection = (option) => {
  //   setSelectedSort(option);
  //   sortTable(selectedSort);
  // };

  const props = { onClearFilters, selectedSort, setSelectedSort };

  return <NavbarView {...props} />;

}

export default Navbar;
