import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Home from './pages/Home';
// import CardUI from "./components/cardUI/CardUI"

ReactDOM.render(
  <React.StrictMode>
    {/* <Home />
     */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

