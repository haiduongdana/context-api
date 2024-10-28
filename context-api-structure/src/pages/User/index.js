//import React, { useState, useEffect } from 'react';
//import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { getUsers, searchUsersAc } from '../../actions/users';
import { connect } from 'react-redux';
//import UserMenu from './_userMenuC';
import UserMenu from './_userMenuCoMap';

//const User = (props) => {
class Users extends Component {
	static propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    dispatch: PropTypes.func.isRequired
	}

	componentDidMount() {
		//const myModal = new bootstrap.Modal('#addUserModal');
  	const { dispatch } = this.props
    dispatch(getUsers());
	}

	searchUsers = (e) => {
		if(e.key === "Enter") {
	  	const { dispatch } = this.props
	    dispatch(searchUsersAc(e.target.value));
		}
	}

	render() {
		const { users, error, loading } = this.props;
  		return (
			<div className="row">
				<div className="col-md-9"><h1 className="col-md-12"> Users page</h1></div>
				<div className="col-md-3">
						<input onKeyDown={e => this.searchUsers(e)} className="form-control me-2" type="search" placeholder="Search User" aria-label="Search"/>
				</div>
				<div className="col-md-9">
					{loading && (<h3 className="alert alert-info text-center">Searching... </h3>)}
					{error && (<h3 className="alert alert-danger text-center">{error.message}</h3>)}
					{users && (
						<table className="table table-bordered">
						  <thead>
						    <tr>
						      <th scope="col">#</th>
						      <th scope="col">Name</th>
						      <th scope="col">Email</th>
						      <th scope="col">Address</th>
						      <th scope="col">Phone</th>
						      <th scope="col">Actions</th>
						    </tr>
						  </thead>
						  <tbody>
								{ users.map((user, i) => 
									<tr key={i}>
						    			<td>{user.id}</td>
						    			<td>{user.name } ({ user.username })</td>
						    			<td>{user.email}</td>
						    			<td>{user.address.street +" - "+user.address.city} </td>
						    			<td>{user.phone}</td>
						    			<td> 
						    				<Link to={`/user/${user.username}`} className="button muted-button">
										        View 
										    </Link> | Edit | Del </td>
						    		</tr>
						    	)}
						  </tbody>
				    	</table>
				    )}
				</div>
				<div className="col-md-3">
					<UserMenu/>
				</div>
			</div>
		);
	}
}

const mapState = state => ({
  users: state.users.users,
  error: state.users.error,
  loading: state.users.loading
});

export default connect(mapState, null)(Users);