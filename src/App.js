import logo from './logo.svg';
import './App.css';
import { YoutubeContainer } from './SearchBlock';
function App() {

  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#top">Navbar</a>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#ytCT">Search</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#reac">Spinning Logo</a>
                        </li>
                        </ul>
                        <span class="navbar-text">
                        </span>
                    </div>
                </nav>
      <YoutubeContainer id="ytCT"></YoutubeContainer>
      <header className="App-header" id="reac">
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
        </a>
      </header>
    </div>
  );
}

export default App;
