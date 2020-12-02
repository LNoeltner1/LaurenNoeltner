import './App.css';
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/" component={Login} />
            <Route exact path="/" component={Login} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
