import React from 'react';

function Results(props) {
  const { restaurants, currTableList } = props;

  return (
    <div>
      <div id="title" className="h1 text-center mt-4">Food Finder</div>

      <table className="table text-white table-responsive table-borderless mt-2">
        <thead className="fs-4 text-primary">
          <tr>
            <th scope="col">Restaurant</th>
            <th scope="col">Cuisine</th>
            <th scope="col">City</th>
            <th scope="col" className="text-center">Rating</th>
            <th scope="col" className="text-center">Grade</th>
            <th scope="col" className="text-center p-2"></th>
          </tr>
        </thead>
        <tbody>
          <td className="text-center">
            {/* Render from currTableList here */}
            {/* Menu Modal */}
          </td>
        </tbody>
      </table >
    </div>
  )
}

export default Results;
