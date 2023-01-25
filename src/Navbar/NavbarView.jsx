import React from 'react';

export const NavbarView = (props) => {
  const { clearFilters, sortTable, filterTable, cuisines, cities, sortOptions, filterState, handleSelectedCuisine, handleSelectedCity } = props;
  const { selectedCuisine, selectedCity, selectedSortOption } = filterState;

  return (
    <nav className="d-flex justify-content-between align-content-center mx-1">
      <section className="left-nav mx-1">
        <div className="btn-group">
          <div data-bs-toggle="dropdown" className="d-inline-block">
            <div className="d-inline-block">
              <button id="cuisine-btn" className="btn btn-outline-info dropdown-toggle px-4" type="button">
                Filter Cuisine: {filterState.selectedCuisine}
              </button>
              <ul className="dropdown-menu dropdown-menu-dark text-center">
                {cuisines.map((cuisine) => (
                  <li key={cuisine}>
                    <button
                      className={`dropdown-item ${filterState.selectedCuisine === cuisine ? 'active' : ''}`}
                      onClick={() => {
                        handleSelectedCuisine(cuisine);
                        filterTable();
                      }}>
                      {cuisine}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        <div className="btn-group p-1">
          <div data-bs-toggle="dropdown" className="d-inline-block">
            <button id="city-btn" className="btn btn-outline-info dropdown-toggle px-4" type="button">
              Filter City: {filterState.selectedCity}
            </button>
            <ul className="dropdown-menu dropdown-menu-dark text-center">
              {cities.map((city) => (
                <li key={city}>
                  <button
                    className={`dropdown-item ${filterState.selectedCity === city ? 'active' : ''}`}
                    onClick={() => {
                      handleSelectedCity(city);
                      filterTable();
                    }}>
                    {city}
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div >

        {/* Clear Filters */}
        <div className="row">
          <button id="clear-btn" className="btn btn-outline-ternary w-50 mx-auto p-1" onClick={clearFilters}> Clear Filters</button>
        </div >
      </section >

      <div id="title" className="h1">Food Finder</div>

      <section className="right-nav mx-1">
        <div className="btn-group">
          <div data-bs-toggle="dropdown" className="d-inline-block">
            <div className="d-inline-block">
              <button id="sort-btn" className="btn btn-outline-info dropdown-toggle mx-1 px-2">
                Sort By: {selectedSortOption}
              </button>
              <ul className="dropdown-menu dropdown-menu-dark text-center">

                {sortOptions.map((option) => (
                  <li key={option}>
                    <button
                      className={`dropdown-item ${selectedSortOption === option ? 'active' : ''}`}
                      onClick={() => sortTable(option)}>
                      {option}
                    </button>
                  </li>
                ))}

              </ul>
            </div>
          </div>
        </div >
      </section>
    </nav >
  )
}
