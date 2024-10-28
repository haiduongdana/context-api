import React, { useState } from 'react';
import { Link } from "react-router-dom";
//import { UserForm } from './_form';
import UserForm from './_formC';
import Modal from "react-bootstrap/Modal";

const UserMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <ul className="list-group">
        <li className="list-group-item active text-center" aria-current="true"><h4>User menu</h4></li>
        <li className="list-group-item"><Link to="/users" >Users</Link></li>
        <li className="list-group-item"><a onClick={showModal} data-bs-toggle="modal" data-bs-target="#addUserModal">Add new User</a></li>
        <li className="list-group-item">Another item</li>
      </ul>
      <UserForm isOpen={isOpen} />
    </>
  );
}

export default UserMenu;