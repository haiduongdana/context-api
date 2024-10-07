//import MyContext from './MyContext';
import C1 from './C1';
import C2 from './C2';
/*
const Parent = (props) => (
  <div className="parent">
  	<MyContext.Consumer>
	    <C1 />
	    <C2 />
  	</MyContext.Consumer>
  </div>
)
*/
const Parent = (props) => (
    <div className="parent">
	    <C1 />
	    <C2 />
    </div>
);

export default Parent;