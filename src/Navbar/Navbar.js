import { React, useState, useEffect } from 'react';
import './Navbar.css';
import { NavbarView } from './NavbarView.jsx';

function Navbar(navProps) {
  const { sortBy, filterBy } = navProps;
  const { selectedCuisine, selectedCity, selectedSort, setSelectedSort, setSelectedCuisine, setSelectedCity } = navProps;

  useEffect(() => {
    filterBy(selectedCuisine, selectedCity, selectedSort);
  }, [selectedCuisine, selectedCity, selectedSort]);

  const onSortSelection = (option) => {
    setSelectedSort(option);
    sortBy(option);
  };

  const onCuisineSelection = (cuisineOption) => {
    setSelectedCuisine(prevState =>
      prevState.cuisine === cuisineOption ? { cuisine: '' } : { cuisine: cuisineOption }
    );
  }

  const onCitySelection = (cityOption) => {
    setSelectedCity(prevState =>
      prevState.city === cityOption ? { city: '' } : { city: cityOption }
    );
  }

  const props = { selectedSort, selectedCuisine, selectedCity, onSortSelection, onCuisineSelection, onCitySelection };

  return <NavbarView { ...props } />;
}

export default Navbar;
