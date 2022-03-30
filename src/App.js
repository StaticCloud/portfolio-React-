// import React along with components
import './App.css';
import Header from './components/Header';
import About from './components/About'
import Footer from './components/Footer'
import Portfolio from './components/Portfolio'
import Gists from './components/Gists'
import Resume from './components/Resume'
import { useState } from 'react';

// import images for the portfolio page
import ypi from './assets/ypi.png';
import pantry from './assets/pantry.png';
import pg from './assets/pg.png';
import mtb from './assets/mtb.png';
import bt from './assets/bt.png';
import nt from './assets/nt.png';

import pdf from './assets/resume/Resume.pdf'

// app component
const App = () => {

  // pages for nav
  const pages = ['About', 'Portfolio', 'Gists', 'Résumé'];

  // links for footer
  const icons = [
    { class: "bi bi-github", link: "https://github.com/StaticCloud" },
    { class: "bi bi-linkedin", link: "https://www.linkedin.com/in/diego-marrs-460196223/" },
    { class: "bi bi-stack-overflow", link: "https://stackoverflow.com/users/6872014/diego-marrs" }
  ];

  // projects including links, images, titles, and github
  const projects = [
    { title: "Your Portland Itinerary", image: ypi, link: "https://josephjamescoop.github.io/your-portland-itinerary/", github: "https://github.com/JosephJamesCoop/your-portland-itinerary" },
    { title: "Pantry", image: pantry, link: "https://whispering-reef-71968.herokuapp.com/", github: "https://github.com/zaclark369/Pantry" },
    { title: "Password Generator", image: pg, link: "https://staticcloud.github.io/Password-Generator/", github: "https://github.com/StaticCloud/Password-Generator/deployments/activity_log?environment=github-pages" },
    { title: "Budget Tracker", image: bt, link: "https://cryptic-escarpment-57941.herokuapp.com/", github: "https://github.com/StaticCloud/budget-tracker" },
    { title: "My Tech Blog", image: mtb, link: "https://limitless-river-31622.herokuapp.com/", github: "https://github.com/StaticCloud/my-tech-blog"},
    { title: "Note Taker", image: nt, link: "https://intense-fortress-45190.herokuapp.com/", github: "https://github.com/StaticCloud/Note-Taker" },
  ]

  // set the default page to the first icon
  const [currentPage, setCurrentPage] = useState(pages[0])

  // render the page starting with the header, the main component, and the footer
  return (
    <>
    {/* render the nav bar */}
      <Header
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      {/* conditionally render components based on the value of the current page */}
      <main>
        {(() => {
          switch(currentPage) {
            case pages[0]:
              return (
                <About/>
              )
            case pages[1]:
              return (
                <Portfolio
                  projects={projects}
                />
              )
            case pages[2]:
              return (
                <Gists/>
              )
            case pages[3]:
              return (
                <Resume
                  pdf={pdf}
                />
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
