import React, { Component } from 'react';
import { Link } from "react-router-dom";
//import { UserForm } from './_form';
import UserForm from './_form';
//import { connect } from 'react-redux'

class UserMenu extends Component {
  constructor() {
    super();
    this.state = {isOpen: false}
  }

  showModal = () => {
    console.log("showModal before: ", this.state.isOpen);
    this.setState({isOpen: true});
    /*
    this.setState(() => ({
      isOpen: true
    }));
    */

    console.log("showModal after: ", this.state.isOpen);
  };

  render() {
    return (
      <>
        <ul className="list-group">
          <li className="list-group-item active text-center" aria-current="true"><h4>User menu</h4></li>
          <li className="list-group-item"><Link to="/users" >Users</Link></li>
          <li className="list-group-item"><a onClick={this.showModal} data-bs-toggle="modal" data-bs-target="#addUserModal">Add new User</a></li>
          <li className="list-group-item">Another item</li>
        </ul>
        <UserForm isOpen={this.state.isOpen} />
      </>
    );
  }
}

//export default connect(mapStateToProps)(UserMenu)
export default UserMenu;