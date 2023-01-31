import React, { useState, useEffect } from 'react';
import { cuisines, cities, sortOptions } from '../_services/Models';
import './Navbar.css';
import { NavbarView } from './NavbarView.jsx';

function Navbar(navProps) {
  const { reset, filterTable, sortTable, selectedCuisine, selectedCity, selectedSort, setSelectedCuisine, setSelectedCity, setSelectedSort } = navProps ;

  const [cuisinesState, setCuisines] = useState(cuisines);
  const [citiesState, setCities] = useState(cities);
  const [sortOptionsState, setSortOptions] = useState(sortOptions);

  // TODO: on click functions (sort, filter cuisine, filter city)
  // const onSortSelection = (option) => {
  //   setSelectedSort(option);
  //   sortTable(selectedSort);
  // };

  // ! refactor with ...parent
  const props = { reset, setSelectedCuisine, setSelectedCity};

  return <NavbarView {...props} />;
}

export default Navbar;
