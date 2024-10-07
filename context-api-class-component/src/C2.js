import MyContext from './MyContext';

const C2 = () => (
  <MyContext.Consumer>
	{(context) => (
	  <div>
		<div>Theme value: {context.theme}</div>
		<hr/>
		<p>User Age: {context.state.age}</p>	
	  </div>
    )}
  </MyContext.Consumer>
);

export default C2;