import React from 'react';

export default function CityDropdown(props) {
  const { selectedCity, onCitySelection, cityFilters } = props;

  return (
    <div className="btn-group">
      <div data-bs-toggle="dropdown">
        <button id="city-btn" className="btn btn-outline-info dropdown-toggle mx-1" type="button">
          <span>Filter City: </span>
          { selectedCity.city }
        </button>
        <ul className="dropdown-menu dropdown-menu-dark text-center">
          { cityFilters.map((city) => (
            <li key={ city }>
              <button
                className={ `dropdown-item ${selectedCity.city === city ? "active" : ""}` }
                onClick={ () => onCitySelection(city) }>
                { city }
              </button>
            </li>
          )) }
        </ul>
      </div>
    </div>
  );
}
