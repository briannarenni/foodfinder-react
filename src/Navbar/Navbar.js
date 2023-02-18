import { React, useEffect } from 'react';
import './Navbar.css';
import { cuisineFilters, cityFilters, sortFilters } from '../_services/Models';
import { CuisineDrop, CityDrop, SortByDrop } from '../Components.module';

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

  return (
    <>
      <nav className="d-flex justify-content-between m-0 px-1">
        <div id="title" className="h1">Food Finder App</div>
        <div className="nav-btns">

          <CuisineDrop selectedCuisine={ selectedCuisine } onCuisineSelection={ onCuisineSelection }
            cuisineFilters={ cuisineFilters } />

          <CityDrop selectedCity={ selectedCity } onCitySelection={ onCitySelection } cityFilters={ cityFilters } />

          <SortByDrop selectedSort={ selectedSort } onSortSelection={ onSortSelection } sortFilters={ sortFilters } />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
