import React from 'react';

//import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import logo from '../../media/img/logo.svg';
import '../../media/css/home.css';

export const Home = () => {
	return (
		<>
			<div className="text-center">
				<img src={logo} className="main-logo" alt="logo" />
			</div>
	        <p>
	          Edit <code>src/App.js</code> and save to reload.
	        </p>
	        <span>
	          <span>Learn </span>
	          <a
	            className="App-link"
	            href="https://reactjs.org/"
	            target="_blank"
	            rel="noopener noreferrer"
	          >
	            React
	          </a>
	          <span>, </span>
	          <a
	            className="App-link"
	            href="https://redux.js.org/"
	            target="_blank"
	            rel="noopener noreferrer"
	          >
	            Redux
	          </a>
	          <span>, </span>
	          <a
	            className="App-link"
	            href="https://redux-toolkit.js.org/"
	            target="_blank"
	            rel="noopener noreferrer"
	          >
	            Redux Toolkit
	          </a>
	          ,<span> and </span>
	          <a
	            className="App-link"
	            href="https://react-redux.js.org/"
	            target="_blank"
	            rel="noopener noreferrer"
	          >
	            React Redux
	          </a>
	        </span>
		</>
	);
}