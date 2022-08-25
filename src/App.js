import React from "react";

import Home from './component/home';
import Footer from './component/footer/index.js';
import Header from "./Header.js";
import ButtonAppBar from "./component/buttonAppBar.js"

function App() {
  return (
  <div>
    <div id="Header"><Header /></div>
    <div id="Home"><Home /></div>
    <div id="Footer"><Footer/></div>
  </div>
  );
}
export default App;


