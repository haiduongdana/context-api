import React from 'react';
import MyContext from './MyContext';

const C1 = () => (
  <MyContext.Consumer>
	{(context) => (
        <React.Fragment>
	        <p>Age: {context.state.age}</p>
	        <p>Name: {context.state.name}</p>
	        <button onClick={context.growAYearOlder}>🍰🍥🎂</button>
	        <hr/>
        </React.Fragment>
    )}
  </MyContext.Consumer>
);

export default C1;