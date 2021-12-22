import logo from './logo.svg';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from './Components/Navigation/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
      </Router>
    </div>
  );
}

export default App;
