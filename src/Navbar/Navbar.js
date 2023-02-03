import React, { useState, useEffect } from 'react';
import { cuisines, cities, sortOptions } from '../_services/Models';
import './Navbar.css';
import { NavbarView } from './NavbarView.jsx';

function Navbar(navProps) {
  const { reset } = navProps;
  // const [selectedCuisine, setSelectedCuisine] = useState('');
  // const [selectedCity, setSelectedCity] = useState('');
  // const [selectedSort, setSelectedSort] = useState('Name');
  // const [cuisinesState, setCuisines] = useState(cuisines);
  // const [citiesState, setCities] = useState(cities);
  // const [sortOptionsState, setSortOptions] = useState(sortOptions);

  // TODO: Reset
  const onClearFilters = () => {
    // setSelectedCity('');
    // setSelectedCuisine('');
    // setSelectedSort('Name');
    reset();
  }

  // TODO: on click functions (sort, filter cuisine, filter city)
  // const onSortSelection = (option) => {
  //   setSelectedSort(option);
  //   sortTable(selectedSort);
  // };

  const props = { onClearFilters };

  return <NavbarView {...props} />;

}

export default Navbar;
