import React, { useState, useEffect } from 'react';
import './MenuModal.css';
import { Button, Modal } from 'react-bootstrap';
import ApiService from '../_services/ApiService';

function MenuModal({ restInfo }) {
  const api = new ApiService();
  const [show, setShow] = useState(false);
  const [apps, setApps] = useState([]);
  const [entrees, setEntrees] = useState([]);

  useEffect(() => {
    let cuisine = restInfo.Cuisine;
    api.getMenu(cuisine)
      .then(menuItems => {
        let appetizers = menuItems.filter(item => item.ItemGroup === 'appetizer');
        let entrees = menuItems.filter(item => item.ItemGroup !== 'appetizer');
        setApps(appetizers);
        setEntrees(entrees);
      });
  }, [restInfo]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" id="see-menu-btn" onClick={handleShow} disabled={restInfo.Grade === 'F'}>
        See Menu
      </Button>

      <Modal show={show} onHide={handleClose} size="lg" backdrop="static">
        <Modal.Header closeButton variant="white">
          <Modal.Title className="text-secondary">{restInfo.RestName} - {restInfo.City}</Modal.Title>
        </Modal.Header>
        <Modal.Body apps={apps} entrees={entrees} className="px-4">
          <div>
            <table className="table table-borderless text-white">
              <tbody>
                <tr id="lead" className="lead">
                  <td>Appetizers</td>
                </tr>
                {
                  apps.map((item, index) => (
                    <tr key={index}>
                      <td className="col-10">{item.ItemName}</td>
                      <td className="col-2">{item.ItemPrice}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
            <table className="table table-borderless text-white">
              <tbody>
                <tr id="lead" className="lead">
                  <td>Entrees</td>
                </tr>
                {
                  entrees.map((item, index) => (
                    <tr key={index}>
                      <td className="col-10">{item.ItemName}</td>
                      <td className="col-2">{item.ItemPrice}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" className="btm-btn-close" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MenuModal;
