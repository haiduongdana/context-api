import MyContext from './MyContext';

const C3 = () => (
  <MyContext.Consumer>
	{(context) => (
		<div>Theme value: {context.themes.dark.foreground}</div>
    )}
  </MyContext.Consumer>
);

export default C3;