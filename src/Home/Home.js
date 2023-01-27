import React, { useState, useEffect } from 'react';
import './Home.css';
import { Restaurant } from '../_services/Models';
import Navbar from '../Navbar/Navbar';
import Results from './HomeResults.jsx';
// import MenuModal from '../MenuModal/MenuModal';

function Home({ api }) {
  const [restaurants, setRestaurants] = useState([]);
  const [currTableList, setCurrTableList] = useState([]);

  useEffect(() => {
    api.getRestaurants()
      .then(response => {
        setRestaurants(response);
        setCurrTableList(response);
      })
      .catch(e => {
        e = "Response not returned"
        console.log(e);
      });
  }, []);

  const props = {restaurants, currTableList, setCurrTableList};

  return (
    <div>
      <Navbar {...props} />
      <Results {...props} />
    </div>
  );

}

export default Home;

