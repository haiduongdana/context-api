import { Link, useLocation } from "react-router-dom";

import logo from './../media/img/logo.svg';
import './../media/css/App.css';

function Header() {
  let  location = useLocation().pathname.substring(1);

  return (
	  <header className="App-header">
		<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
			<div className="container-fluid">
			  <a href="#" className="navbar-brand d-flex align-items-center">
				<img src={logo} className="App-logo" alt="logo" />
			  </a>
			  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			  </button>
			  <div className="collapse navbar-collapse" id="navbarCollapse">
				<ul className="navbar-nav me-auto mb-2 mb-md-0">
				  <li className="nav-item">
				  	<Link to="/" className={ 'nav-link'+ (location == ''? ' active': '') }>Home</Link>
				  </li>
				  <li className="nav-item">
				  	<Link to="/about" className={ 'nav-link'+ (location == 'about'? ' active': '') } >About</Link>
				  </li>
				  <li className="nav-item">
						<a className={ 'nav-link'+ (location == 'users'? ' active': '') } href="/users">Users</a>
				  </li>
					<li className="nav-item">
						<Link className={ 'nav-link'+ (location == 'blogs'? ' active': '') } to="/blogs">Blogs</Link>
					</li>
					<li className="nav-item">
						<Link className={ 'nav-link'+ (location == 'groceries'? ' active': '') } to="/groceries">Groceries</Link>
					</li>
					<li className="nav-item">
						<Link className={ 'nav-link'+ (location == 'grocery'? ' active': '') } to="/grocery">Grocery</Link>
					</li>
				  <li className="nav-item">
						<a className={ 'nav-link'+ (location == 'contact'? ' active': '') } href="/contact">Contact</a>
					</li>
				  <li className="nav-item">
						<a className="nav-link disabled">Disabled</a>
				  </li>
				  <li className="nav-item">
						<a className="nav-link">{location}</a>
				  </li>
				</ul>
				<form className="d-flex" role="search">
				  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
				  <button className="btn btn-outline-success" type="submit">Search</button>
				</form>
			  </div>
			</div>
		</nav>
	  </header>
  );
}

export default Header;