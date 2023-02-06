import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ApiService from '../_services/ApiService';
import './MenuModal.css';

// ? useEffect(() => { api.getCuisineMenu() }, []);

function MenuModal({ restInfo }) {
  const api = new ApiService();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    // TODO: fetchMenu()
    setShow(true);
  }

  // TODO: Call api
  // const fetchMenu = (cuisine) => {api.getMenu(cuisine)}

  return (
    <>
      <Button variant="primary" id="see-menu-btn" onClick={handleShow}   disabled={restInfo.Grade === 'F'}>
        See Menu
      </Button>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton variant="white">
          <Modal.Title className="text-secondary">{restInfo.RestName} - {restInfo.City}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-4">
          <div>
            <table className="table table-borderless text-white">
              <tbody>
                <tr id="lead" className="lead">Appetizers</tr>
                <tr> {/* *ngFor="let item of apps" className="mb-1" */}
                  <td className="col-10">(item.ItemName)</td>
                  <td className="col-2">(item.ItemPrice)</td>
                </tr>
              </tbody>
            </table>
            <table className="table table-borderless text-white">
              <tbody>
                <tr id="lead" className="lead">Entrees</tr>
                <tr> {/* *ngFor="let item of entrees" */}
                  <td className="col-10">(item.ItemName)</td>
                  <td className="col-2">(item.ItemPrice)</td>
                </tr>
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
