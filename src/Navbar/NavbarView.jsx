import React from 'react';

export const NavbarView = (props) => {
  return (
    <nav className="d-flex justify-content-between align-content-center mx-1">
      <section className="left-nav mx-1">
        <div class="btn-group">
          <div data-bs-toggle="dropdown" class="d-inline-block">
            {/* <div className="d-inline-block">
              <button id="cuisine-btn" className="btn btn-outline-info dropdown-toggle px-2 mx-1">
                {selectedCuisine ? selectedCuisine : 'Filter Cuisine'}
              </button>
              <ul className="dropdown-menu dropdown-menu-dark text-center">
                {cuisines.map((cuisine) => (
                  <li key={cuisine}>
                    <button
                      className={`dropdown-item ${selectedCuisine === cuisine ? 'active' : ''}`}
                      onClick={() => filterTable('cuisine', cuisine)}
                    >
                      {cuisine}
                    </button>
                  </li>
                ))}
              </ul>
            </div> */}

          </div>
        </div>

        <div class="btn-group p-1">
          <div data-bs-toggle="dropdown" class="d-inline-block">
            {/*  <button id="city-btn" className="btn btn-outline-info dropdown-toggle px-2">
              {selectedCity ? selectedCity : 'Filter City'}
            </button>
            <ul className="dropdown-menu dropdown-menu-dark text-center">
              {cities.map((city) => (
                <li key={city}>
                  <button
                    className={`dropdown-item ${selectedCity === city ? 'active' : ''}`}
                    onClick={() => filterTable('city', city)}
                  >
                    {city}
                  </button>
                </li>
              ))}
            </ul> */}
          </div>
        </div >

        {/* Clear Filters */}
        <div class="row">
          {/* <button id="clear-btn" className="btn btn-outline-ternary w-50 mx-auto p-1" onClick={clearFilters}>Clear Filters</button> */}
        </div >
      </section >

      <div id="title" class="h1">Food Finder</div>

      <section className="right-nav mx-1">
        <div class="btn-group">
          <div data-bs-toggle="dropdown" class="d-inline-block">
            {/* <div className="d-inline-block">
              <button id="sort-btn" className="btn btn-outline-info dropdown-toggle mx-1 px-2">
                Sort By: {selectedSortOption}
              </button>
              <ul className="dropdown-menu dropdown-menu-dark text-center">
                {sortOptions.map((option) => (
                  <li key={option}>
                    <button
                      className={`dropdown-item ${selectedSortOption === option ? 'active' : ''}`}
                      onClick={() => sortTable(option)}
                    >
                      {option}
                    </button>
                  </li>
                ))}
              </ul>
            </div> */}
          </div>
        </div >
      </section>
    </nav >
  )
}
