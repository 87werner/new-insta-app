import Nav from './components/Nav'
import Footer from './components/Footer'
import Main from "./components/Main-feed"
// import {BrowserRouter, Switch, Route} from 'react-router-dom';
// import Home from './components/Home';
// import Send from './components/Send';
// import Navigator from './components/Navigator';
// import Heart from './components/Heart';

import './App.css';


function App() {
  return (
  

<div id="webpage">
  <p id="nav"><Nav/></p>
  <p id="main"><Main/></p>
  <p id="footer"><Footer/></p>

</div> 
    
  );
}

export default App;


