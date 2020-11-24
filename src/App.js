import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NavBar } from './components';

function App() {
  return (
    <Router>
      {/* Utilisation du styled component GlobalStyle pour appliquer le style générique */}
      <GlobalStyle />
      <NavBar />
    </Router>
  );
}

export default App;
