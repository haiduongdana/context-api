import logo from './logo.svg';
import './App.css';

import ThemeContext from './theme';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/
/*
const App = () => (
   <ThemeContext.Provider value='dark'>
      <ThemeContext.Consumer>
        {theme => <div>Our theme is:  {theme}</div>}  
      </ThemeContext.Consumer>
   </ThemeContext.Provider>
);
*/
const App = () => (
  <ThemeContext.Consumer>
    {theme => <div>Our theme is:  {theme.theme.light.foreground}</div>}  
  </ThemeContext.Consumer>
);

export default App;