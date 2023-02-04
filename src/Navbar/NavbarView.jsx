import React from 'react';
import { cuisineFilters, cityFilters, sortFilters } from '../_services/Models';

const sortOptions = sortFilters;
const cuisineOptions = cuisineFilters;
const cityOptions = cityFilters;

export const NavbarView = (props) => {
  const { onClearFilters, selectedSort, onSortSelection } = props;
  const { selectedCuisine, onCuisineSelection, selectedCity, onCitySelection } = props;

  return (
    <nav className="d-flex justify-content-between align-content-end m-0 px-1">
      <div id="title" className="h1">Food Finder App</div>

      <section className="nav-btns">
        <button id="clear-btn" type="button" className="btn btn-link text-ternary" onClick={() => onClearFilters()}>
          Clear Filters
        </button>

        <div className="btn-group">
          <div data-bs-toggle="dropdown">
            <div className="d-inline-block">
              <button id="cuisine-btn" className="btn btn-outline-info dropdown-toggle mx-1"
                type="button">
                <span>Filter Cuisine: </span>
                {selectedCuisine}
              </button>
              <ul className="dropdown-menu dropdown-menu-dark text-center">
                {cuisineFilters.map((cuisine) => (
                  <li key={cuisine}>
                    <button
                      className={`dropdown-item ${selectedCuisine === cuisine ? "active" : ""}`}
                      onClick={() => onCuisineSelection(cuisine)}>
                      {cuisine}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="btn-group">
          <div data-bs-toggle="dropdown">
            <button id="city-btn" className="btn btn-outline-info dropdown-toggle mx-1" type="button">
              <span>Filter City: </span>
              {selectedCity}
            </button>
            <ul className="dropdown-menu dropdown-menu-dark text-center">
              {cityFilters.map((city) => (
                <li key={city}>
                  <button
                    className={`dropdown-item ${selectedCity === city ? "active" : ""}`}
                    onClick={() => onCitySelection(city)}>
                    {city}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="btn-group">
          <div data-bs-toggle="dropdown">
            <div className="d-inline-block">
              <button id="sort-btn" className="btn btn-outline-info dropdown-toggle mx-1">
                <span>Sort: </span> {selectedSort}
              </button>

              <ul className="dropdown-menu dropdown-menu-dark text-center">
                {sortOptions.map((option) => (
                  <li key={option}>
                    <button
                      className={`dropdown-item ${selectedSort === option ? 'active' : ''}`}
                      onClick={() => onSortSelection(option)}>
                      {option}
                    </button>
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </div >

      </section >
    </nav >
  )
}
