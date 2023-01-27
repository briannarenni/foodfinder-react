import React from 'react';
// import MenuModal from '../MenuModal/MenuModal';

function Results(props) {
  const { restaurants, currTableList } = props;

  return (
    <div>
      <table className="table text-white table-responsive table-borderless mt-3">
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
          {currTableList.map((result, index) => (
            <tr key={index} className={`p-2 lead ${result.Grade === 'F' ? 'text-danger' : 'text-white'}`}>
              <td>{result.RestName}</td>
              <td>{result.Cuisine}</td>
              <td>{result.City}</td>
              <td className="text-center">{result.Rating}</td>
              <td className="text-center">{result.Grade}</td>
              <td className="text-center">
                {/* Menu Modal */}
                {/* {result.Grade !== 'F' && <MenuModal restInfo={result} />} */}
              </td>
            </tr>
          ))}
        </tbody>
      </table >
    </div>
  )
}

export default Results;
