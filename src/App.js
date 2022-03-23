import './App.css';
import Header from './components/Header';
import About from './components/About'
import { useState } from 'react';

const App = () => {

  const pages = ['About', 'Portfolio', 'Contact', 'Résumé'];

  const [currentPage, setCurrentPage] = useState(pages[0])

  return (
    <>
      <Header
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <main>
        {(() => {
          switch(currentPage) {
            case pages[0]:
              return (
                <About/>
              )
          }
        })()}
      </main>
    </>
  );
}

export default App;
