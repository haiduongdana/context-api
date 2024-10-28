import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { showAddForm, hideAddForm } from '../../actions/adduserform';
import { useDispatch } from 'react-redux';

const UserForm = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const dispatch = useDispatch();
  /*
  useEffect(() => {
    setIsOpen(props.isOpen);
  })
  */
  useEffect(
    () => {
      setIsOpen(props.isOpen);
    }, 
    []
  )
  useEffect(() => {
      console.log('Prop Received: ', props.isOpen);
      setIsOpen(props.isOpen);      
  }, [props.isOpen])

  const showModal = () => {
    //setIsOpen(true);
    dispatch(showAddForm());
  };

  const hideModal = () => {
    //setIsOpen(false);
    dispatch(hideAddForm());
  };

  return (
    <>
      <ul className="list-group">
        <li className="list-group-item">
          <a onClick={showModal} data-bs-toggle="modal" data-bs-target="#addUserModal">Add new User</a>
        </li>
      </ul>
      <Modal show={isOpen} onHide={hideModal} dialogClassName="modal-xl">
        <form>
          <Modal.Header>
            <h5 className="modal-title">Add User</h5>
            <button onClick={hideModal} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </Modal.Header>
          <Modal.Body>
            <div className="row mb-3">
              <label htmlFor="inputName3" className="col-sm-2 col-form-label">Name</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="inputName3"/>
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="inputUsername3" className="col-sm-2 col-form-label">Username</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="inputUsername3"/>
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
              <div className="col-sm-10">
                <input type="email" className="form-control" id="inputEmail3"/>
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="inputPhone3" className="col-sm-2 col-form-label">Phone</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="inputPhone3"/>
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="inputWebsite3" className="col-sm-2 col-form-label">Website</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="inputWebsite3"/>
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="inputAddress3" className="col-sm-2 col-form-label">Address</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="inputAddress3"/>
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="inputCompany3" className="col-sm-2 col-form-label">Company</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="inputCompany3"/>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={hideModal} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default UserForm;