import './App.css';
import Header from './components/Header';
import About from './components/About'
import Footer from './components/Footer'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import { useState } from 'react';

import ypi from './assets/ypi.png';
import pantry from './assets/pantry.png';
import pg from './assets/pg.png';
import mtb from './assets/mtb.png';
import bt from './assets/bt.png';
import nt from './assets/nt.png';

const App = () => {

  const pages = ['About', 'Portfolio', 'Contact', 'Résumé'];

  const icons = [
    { class: "bi bi-github", link: "https://github.com/StaticCloud" },
    { class: "bi bi-linkedin", link: "https://www.linkedin.com/in/diego-marrs-460196223/" },
    { class: "bi bi-stack-overflow", link: "https://stackoverflow.com/users/6872014/diego-marrs" }
  ];

  const projects = [
    { title: "Your Portland Itinerary", image: ypi, link: "https://josephjamescoop.github.io/your-portland-itinerary/", github: "https://github.com/JosephJamesCoop/your-portland-itinerary" },
    { title: "Pantry", image: pantry, link: "https://whispering-reef-71968.herokuapp.com/", github: "https://github.com/zaclark369/Pantry" },
    { title: "Password Generator", image: pg, link: "https://staticcloud.github.io/Password-Generator/", github: "https://github.com/StaticCloud/Password-Generator/deployments/activity_log?environment=github-pages" },
    { title: "Budget Tracker", image: bt, link: "https://cryptic-escarpment-57941.herokuapp.com/", github: "https://github.com/StaticCloud/budget-tracker" },
    { title: "My Tech Blog", image: mtb, link: "https://limitless-river-31622.herokuapp.com/", github: "https://github.com/StaticCloud/my-tech-blog"},
    { title: "Note Taker", image: nt, link: "https://intense-fortress-45190.herokuapp.com/", github: "https://github.com/StaticCloud/Note-Taker" },
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
            case pages[1]:
              return (
                <Portfolio
                  projects={projects}
                />
              )
            case pages[2]:
              return (
                <Contact/>
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
