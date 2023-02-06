import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ApiService from '../_services/ApiService';
import './MenuModal.css';

// ? useEffect(() => { api.getCuisineMenu() }, []);

function MenuModal({ rest }) {
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
      <Button variant="primary" onClick={handleShow}>
        See Menu
      </Button>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton variant="white">
          <Modal.Title className="text-primary">(restInfo.RestName) - ( restInfo.City)</Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-4">
          <div>
            <table className="table table-borderless text-white">
              <tbody>
                <tr className="lead fw-semibold text-decoration-underline">Appetizers</tr>
                <tr> {/* *ngFor="let item of apps" className="mb-1" */}
                  <td className="col-10">(item.ItemName)</td>
                  <td className="col-2">(item.ItemPrice)</td>
                </tr>
              </tbody>
            </table>
            <table className="table table-borderless text-white">
              <tbody>
                <tr className="lead fw-semibold text-decoration-underline p-2">Entrees</tr>
                <tr> {/* *ngFor="let item of entrees" */}
                  <td className="col-10">(item.ItemName)</td>
                  <td className="col-2">(item.ItemPrice)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MenuModal;
