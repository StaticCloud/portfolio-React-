import { motion } from "framer-motion"
import { useState } from "react";

// import images for the portfolio page
import ypi from '../../assets/ypi.png';
import pantry from '../../assets/pantry.png';
import pg from '../../assets/pg.png';
import mtb from '../../assets/mtb.png';
import bt from '../../assets/bt.png';
import nt from '../../assets/nt.png';
import bh from '../../assets/bh.png';

const Projects = () => {

    // projects including links, images, titles, and github
    const projects = [
        { title: "Your Portland Itinerary", 
        desc: "An all-in-one itinerary for Portland, Oregon visitors or residents! End-users may view the time, the weather, and local attractions. Users may view local attractions and add them to an itinerary. Each attraction also includes a their location on Google maps so the user can easily access the location of the attraction.",
        role: "This was a collaborative project so the work was divided. I handled fetching data (names, pictures, map links, etc.) from the Travel Advisor API for attractions and locations and displaying it to the user. I also did some front-end CSS work for the attraction cards and the itinerary itself.",
        tech: ["OpenWeather API", "Travel Advisor API", "Bulma CSS Framework"],
        image: ypi, link: "https://josephjamescoop.github.io/your-portland-itinerary/", github: "https://github.com/JosephJamesCoop/your-portland-itinerary" },
        { title: "Pantry",
        desc: "Have you ever wanted to make dinner but can't think of anything. This application will take what you have in your pantry and suggest appropriate recipes using the ingredients you already have. Create an account and you can save your favorites for future viewing. Keyword buttons will help you quickly reach an easy meal to make and visual recipe cards will show you how good home cooking can look.",
        role: "This was a collaborative project so the work was divided. I did most of the front-end work, specifically the front page, the login page, and making recipe page responsive. I used express-session to implement user sessions and authentication. Assisted with database schema using Sequelize.",
        tech: ["Node.js", "Express.js", "Handlebars", "Sequelize"],
        image: pantry, link: "https://whispering-reef-71968.herokuapp.com/", github: "https://github.com/zaclark369/Pantry" },
        { title: "Password Generator",
        desc: "This is a newer version of my previous password generator. Not only did I give it a fresh new coat of paint, but also used this revamp as a way to exercise my understanding of recursive functions. I also reworked my password generator in wake of Hive System's recent password security table, it would take a computer 438 trillion years to brute force an 18-character password with upper case and lower case letters, numbers, and symbols. This password generator is created with this criteria in mind, including an experimental shuffle rate feature.",
        role: "This was a solo project. Designed the front-end and, the recursive algorithm for shuffling the initial array of characters for the password, and the code for generating the password.",
        tech: ["JavaScript", "HTML", "CSS"],
        image: pg, link: "https://staticcloud.github.io/Password-Generator/", github: "https://github.com/StaticCloud/Password-Generator/deployments/activity_log?environment=github-pages" },
        { title: "Budget Tracker",
        desc: "A progressive web application that allows you to manage your expenses. The end user may add expenses even offline. When the user loses connection the expenses are stored in the browser's cache through IndexedDB. The service workers allow for the user to view the homepage and add expenses even without a connection. Once the user reconnects to the internet the stored expenses in indexedDB will be appended to the online database. The user may even download the webpage and use it on a desktop or mobile device.", 
        role: "My responsibility was making an existing app a PWA by implementing IndexedDB and service workers. I handled storing data in IndexedDB if the end-user lost connection and added the data back into the database once the user went back online. I also implemented the service workers to intercept any requests from the user and send back the current page if there was no connection. I also added the ability for users to download the webpage via a manifest.json file.",
        tech: ["IndexedDB", "Service Workers", "Mongoose", "Express.js"],
        image: bt, link: "https://cryptic-escarpment-57941.herokuapp.com/", github: "https://github.com/StaticCloud/budget-tracker" },
        { title: "My Tech Blog", 
        desc: "A simple blog website where developers may discuss and share their thoughts on anything tech related. Visitors can sign up, make posts, and comment on other's posts. This utilizes Express Sessions as well as handlebars.js to handle users and authentication as well as rendering webpages.",
        role: "This was my first full-stack project. Included front-end work for the HTML, CSS, and front-end fetch request code as well as the back-end including Express.js server routing, CRUD operations, MySQL/Sequelize queries, user-authentication and sessions.",
        tech: ["Node.js", "Express.js", "Sequelize", "MySQL2 (dev)", "Bcrypt"],
        image: mtb, link: "https://limitless-river-31622.herokuapp.com/", github: "https://github.com/StaticCloud/my-tech-blog"},
        { title: 'Beet Hub',
        desc: 'A platform for discussing music built with the MERN stack! Create collections of albums, favorite albums, and preview albums!',
        role: 'Handled the bulk of the back-end including GQL schemas and Mongoose models as well as hooking the front-end to the server. Implemented profile, collections, and favorites on both the front-end and the back-end.',
        tech: ['MongoDB/Mongoose', 'Express.js', 'React', 'Node.js', 'ApolloServer', 'GraphQL', 'JWT'],
        image: bh, link: 'https://blooming-tundra-89879.herokuapp.com/', github: 'https://github.com/heatherviolet/beat-hub'}
    ]

    const [onProjectPage, setOnProjectPage] = useState(false);

    const [focusedProject, setFocusedProject] = useState(projects[0]);
    
    if (!onProjectPage) {
        return (
            <motion.div 
                className="content"
                id="project-wrapper"
                animate={{ 
                    opacity: [0, 1],
                    y: [20, 0]
                }}
                transition={{ 
                    duration: 0.5,
                    type: "easeOut"
                }}> 
                <h1>Projects</h1>
                <div className="portfolio">
                    {projects.map((project, i) => (
                        <div className="project-container" key={project.title} style={{margin: "20px"}}>
                            <a target="_blank" href={project.link}>
                                <motion.div 
                                    style={{
                                        backgroundImage: `url(${project.image})`,
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "cover",
                                        height: "300px",
                                        width: "300px",
                                        padding: "20px",
                                        borderRadius: "50%"
                                    }}
                                    initial={{
                                        border: "0px solid #df007a"
                                    }}
                                    whileHover={({
                                        border: "10px solid #df007a"
                                    })}>
                                </motion.div>
                            </a>
                            <h1>
                                <a target="_blank" href={project.github} style={{paddingRight: "10px"}}>
                                    <i className="bi bi-github"></i>
                                </a>
                                <a onClick={() => {
                                    setOnProjectPage(true)
                                    setFocusedProject(projects[i])
                                }} id="info">
                                    <i className="bi bi-info-circle-fill"></i>
                                </a>
                            </h1>
                        </div>
                    )).reverse()}
                </div>
            </motion.div>
        );
    } else {
        return (
            <div className="content" id="project-wrapper">
                <div className="left-border">
                    <h1>{focusedProject.title}</h1>
                    <div style={{
                        backgroundImage: `url(${focusedProject.image})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "300px",
                        padding: "20px",
                        borderRadius: "5px"
                    }}>
                    </div>
                    <h2>Description</h2>
                    <p>{focusedProject.desc}</p>
                    <h2>Involvement</h2>
                    <p>{focusedProject.role}</p>
                    <h2>Technologies Used</h2>
                    <ul>
                        {focusedProject.tech.map(tool => <li style={{margin: "8px 0px"}}><i>{tool}</i></li>)}
                    </ul>
                    <button onClick={() => setOnProjectPage(false)}>Go Back</button>
                </div>
            </div>
        );
    }
}

export default Projects;