import logo from './logo.svg';
import './App.css';

//import MyContext from './MyContext';
import MyProvider from './MyProvider';
import MyConsumer from './MyConsumer';
import UseMyContext from './UseMyContext';
import Parent from './Parent';
import C3 from './C3';

const MyApp = () => (
<div>	
    <MyProvider value='dark'>
   		<Parent/>
    </MyProvider>
    <hr/>
    <C3/>
    <hr/>
    <UseMyContext/>
</div>	
);

export default MyApp