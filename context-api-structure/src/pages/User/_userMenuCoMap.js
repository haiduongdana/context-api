import React, { Component } from 'react';
import { Link } from "react-router-dom";
//import { UserForm } from './_form';
import UserForm from './_form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { showAddForm } from '../../actions/adduserform';

class UserMenu extends Component {
  static propTypes = {
    showAddUserForm: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  showAddUserForm = () => {
    //this.setState({showAddUserForm: true});
    console.log("Test");
    const { dispatch } = this.props
    dispatch(showAddForm());
  };

  render() {
    return (
      <>
        <ul className="list-group">
          <li className="list-group-item active text-center" aria-current="true"><h4>User menu</h4></li>
          <li className="list-group-item"><Link to="/users" >Users</Link></li>
          <li className="list-group-item"><a onClick={this.showAddUserForm} data-bs-toggle="modal" data-bs-target="#addUserModal">Add new User</a></li>
          <li className="list-group-item">Another item</li>
        </ul>
        <UserForm isOpen={this.props.showAddUserForm} />
      </>
    );
  }
}


const mapStateToProps = state => ({
  showAddUserForm: state.adduser.showAddUserForm
});

export default connect(mapStateToProps)(UserMenu);