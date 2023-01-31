import React from 'react';
// import MenuModal from '../MenuModal/MenuModal';

export const Results = ({restaurants, isLoading}) => {

  return (
    <div>
      {
        isLoading ? (
          <p className='text-center'>Loading results...</p>
        ) : (
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
              {restaurants.map((entry, index) => (
                <tr key={index} className={`p-2 lead ${entry.Grade === 'F' ? 'text-danger' : 'text-white'}`}>
                  <td>{entry.RestName}</td>
                  <td>{entry.Cuisine}</td>
                  <td>{entry.City}</td>
                  <td className="text-center">{entry.Rating}</td>
                  <td className="text-center">{entry.Grade}</td>
                  <td className="text-center">
                    {/* Menu Modal
                {entry.Grade !== 'F' && <MenuModal restInfo={entry} />} */}
                  </td>
                </tr>
              ))}
            </tbody>

          </table >
        )}
    </div>
  )
}
