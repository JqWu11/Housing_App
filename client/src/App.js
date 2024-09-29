import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>Hi there</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="http://localhost:4000/auth/google"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sign In with Google
        </a>
      </header>
    </div>
  );
}

export default App;

