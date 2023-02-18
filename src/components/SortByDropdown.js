import React from 'react';

export default function SortByDropdown(props) {
  const { selectedSort, onSortSelection, sortFilters } = props;

  return (
    <div className="btn-group">
      <div data-bs-toggle="dropdown">
        <div className="d-inline-block">
          <button id="sort-btn" className="btn btn-outline-info dropdown-toggle mx-1">
            <span>Sort: </span> { selectedSort }
          </button>
          <ul className="dropdown-menu dropdown-menu-dark text-center">
            { sortFilters.map((option) => (
              <li key={ option }>
                <button
                  className={ `dropdown-item ${selectedSort === option ? "active" : ""}` }
                  onClick={ () => onSortSelection(option) }>
                  { option }
                </button>
              </li>
            )) }
          </ul>
        </div>
      </div>
    </div>
  );
}
