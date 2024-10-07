import logo from './logo.svg';
import './App.css';
import UserProvider from './UserProvider';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="AppContent">
        <UserProvider />
      </div>
    </div>
  );
}

export default App;