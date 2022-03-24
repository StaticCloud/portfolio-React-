import './App.css';
import Header from './components/Header';
import About from './components/About'
import Footer from './components/Footer'
import { useState } from 'react';

const App = () => {

  const pages = ['About', 'Portfolio', 'Contact', 'Résumé'];

  const icons = [
    { class: "bi bi-github", link: "https://github.com/StaticCloud" },
    { class: "bi bi-linkedin", link: "https://www.linkedin.com/in/diego-marrs-460196223/" },
    { class: "bi bi-stack-overflow", link: "https://stackoverflow.com/users/6872014/diego-marrs" }
  ]

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
      <Footer
        icons={icons}
      />
    </>
  );
}

export default App;
