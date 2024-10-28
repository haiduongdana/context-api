//import React, { useState, useEffect } from 'react';
//import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { getUser } from '../../actions/user';
import { connect } from 'react-redux';

//const User = (props) => {
class UserAPI extends Component {

	static propTypes = {
	    user: PropTypes.object.isRequired,
	    loading: PropTypes.bool.isRequired,
	    error: PropTypes.string,
	    dispatch: PropTypes.func.isRequired
	}

	componentDidMount() {
    	const { dispatch } = this.props
	    dispatch(getUser());
	}

	render() {
  		const { user, error, loading } = this.props;
    	return (
			<>
				<h1> User Detail  page</h1>
				{loading && (<h3 className="loading">Searching... </h3>)}
				{error && (<h3 className="error">{error.message}</h3>)}
				{user && (
					<table className="table table-bordered">
					  <thead>
					    <tr>
					      <th scope="col">Field</th>
					      <th scope="col">Value</th>
					    </tr>
					  </thead>
					  <tbody>
							{ users.map((user, i) => 
								<tr key={i}>
					    			<td>{user.id}</td>
					    			<td>{user.name } ({ user.username })</td>
					    		</tr>
					    	)}
					  </tbody>
			    	</table>
			    )}
			</>
		);
	}
}

const mapState = state => ({
  user: state.user,
  error: state.error,
  loading: state.loading
});

export default connect(mapState, null)(UserAPI);