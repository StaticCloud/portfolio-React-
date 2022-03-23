import './App.css';
import Header from './components/Header';
import { useState } from 'react';

const App = () => {

  const pages = ['About', 'Portfilio', 'Contact', 'Résumé'];

  return (
    <Header
      pages={pages}
    />
  );
}

export default App;
