import React from 'react';

export default function CuisineDropdown(props) {
  const { selectedCuisine, onCuisineSelection, cuisineFilters } = props;

  return (
    <div className="btn-group">
      <div data-bs-toggle="dropdown">
        <div className="d-inline-block">
          <button id="cuisine-btn" className="btn btn-outline-info dropdown-toggle mx-1"
            type="button">
            <span>Filter Cuisine: </span>
            { selectedCuisine.cuisine }
          </button>
          <ul className="dropdown-menu dropdown-menu-dark text-center">
            { cuisineFilters.map((cuisine) => (
              <li key={ cuisine }>
                <button
                  className={ `dropdown-item ${selectedCuisine.cuisine === cuisine ? "active" : ""}` }
                  onClick={ () => onCuisineSelection(cuisine) }>
                  { cuisine }
                </button>
              </li>
            )) }
          </ul>
        </div>
      </div>
    </div>
  );
}

