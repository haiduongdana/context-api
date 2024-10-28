import React , {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { getUser } from '../../actions/user';
//import { UserMenu } from './../components/usermenu';
//import UserMenu from './_userMenuC';
import UserMenu from './_userMenuCoMap';

export const User = () => {
	let { username } = useParams();
	const dispatch = useDispatch();

	useEffect(
		() => {
	    	dispatch(getUser(username));
	  }, 
	  []
	);
	let { user, loading, error } = useSelector(state => state.user);
	/*
	const user = useSelector(state =>
    state.users.users.find(user => user.username === username)
  )
 	*/
 	/*
  const users = useSelector(state => state.users.users);
  if(users && users.length)
  	user = users.find(user => user.username === username);
  */
  /*
	if (!user) {
    return (
      <section>
        <h2>User not found!</h2>
      </section>
    )
  }
	*/
  return (
			<div className="row">
				<h1 className="col-md-12"> User Detail page</h1>
				<div className="col-md-9">
					{loading && (<h3 className="alert alert-info text-center">Searching... </h3>)}
					{error && (<h3 className="alert alert-danger text-center">{error.message}</h3>)}
					{user && (
						<table className="table table-bordered">
						  <thead>
						    <tr>
						      <th scope="col">Field</th>
						      <th scope="col">Value</th>
						    </tr>
						  </thead>
						  <tbody>
								{ Object.keys(user).map((k) => 
									<tr key={k}>
						    			<td>{k}</td>
						    			<td>{typeof user[k] === 'object'? JSON.stringify(user[k]) : user[k] }</td>
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