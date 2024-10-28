import React, { useState } from 'react';
import { Link } from "react-router-dom";
import UserForm from '../../pages/User/_form';

export const UserMenu = () => {
  return (
    <>
      <ul className="list-group">
        <li className="list-group-item active text-center" aria-current="true"><h4>User menu</h4></li>
        <li className="list-group-item"><Link to="/users" >Users</Link></li>
        <li className="list-group-item"><a data-bs-toggle="modal" data-bs-target="#addUserModal">Add new User</a></li>
        <li className="list-group-item">Another item</li>
      </ul>
      <UserForm/>
    </>
  );
}