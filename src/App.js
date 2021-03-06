// import React along with components
import './App.css';
import Header from './components/Header';
import About from './components/About'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Gists from './components/Gists'
import { useState, useEffect } from 'react';

// deploy to gh pages:
// install: npm install -D gh-pages
// add under scripts in package.json:
// "predeploy": "npm run build",
// "deploy": "gh-pages -d build
// run:
// npm run deploy

// app component
const App = () => {

  // pages for nav
  const pages = ['About', 'Projects', 'Gists'];

  // links for footer
  const icons = [
    { class: "bi bi-github", link: "https://github.com/StaticCloud" },
    { class: "bi bi-linkedin", link: "https://www.linkedin.com/in/diego-marrs-460196223/" },
    { class: "bi bi-stack-overflow", link: "https://stackoverflow.com/users/6872014/diego-marrs" }
  ];

  // set the default page to the first icon
  const [currentPage, setCurrentPage] = useState(pages[0])
  const [pageChanged, hasPageChanged] = useState(false);

  // set the page title to the corresponding page
  useEffect(() => {
    document.title = `Diego Marrs | ${currentPage}`;
  }, [currentPage])

  // render the page starting with the header, the main component, and the footer
  return (
    <>
    {/* render the nav bar */}
      <Header
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pageChanged={pageChanged}
        hasPageChanged={hasPageChanged}
      />
      {/* conditionally render components based on the value of the current page */}
        <main>
          {(() => {
            switch(currentPage) {
              case pages[0]:
                return (
                  <About pageChanged={pageChanged}/>
                )
              case pages[1]:
                return (
                  <Projects pageChanged={pageChanged}/>
                )
              case pages[2]:
                return (
                  <Gists pageChanged={pageChanged}/>
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
