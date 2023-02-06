import React, { useState } from 'react';
import MenuModal from '../MenuModal/MenuModal';

export const Results = ({ restaurants }) => {
  return (
    <div>
      <table className="table text-white table-responsive table-borderless mt-3">
        <thead className="fs-4 text-secondary">
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
          {
            restaurants.length < 1 ? (
              <tr>
                <td colSpan="6" className="text-center p-2 lead">No results</td>
              </tr>
            ) : (
              restaurants.map((rest, index) => (
                <tr key={index} className={`p-2 lead ${rest.Grade === 'F' ? 'text-danger' : 'text-white'}`}>
                  <td>{rest.RestName}</td>
                  <td>{rest.Cuisine}</td>
                  <td>{rest.City}</td>
                  <td className="text-center">{rest.Rating}</td>
                  <td className="text-center">{rest.Grade}</td>
                  <td className="text-center">
                    <MenuModal restInfo={rest} />
                  </td>
                </tr>
              ))
            )
          }
        </tbody>
      </table>
    </div>
  )
}
