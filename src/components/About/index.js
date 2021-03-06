import { motion } from "framer-motion"
import { mount, unmount } from '../../utils/animations';

// about component
const About = ({ pageChanged }) => {
    return (
        <motion.div 
            className="content"
            animate={
                pageChanged ? unmount : mount
            }
            transition={{ 
                duration: 0.3,
                type: "easeOut"
            }}>
            <div className="about">
                <div>
                    <div className="portrait"/>
                </div>
                <div className="left-border">
                    <h1>About</h1>
                    <p style={{maxWidth: "770px"}}>
                        Hello, I'm Diego! I'm a web developer with a certificate in full-stack web development from University of Oregon and an Associate Degree for computer science from Clark College in Vancouver, Washington. Technical skills include JavaScript, HTML, CSS, Bootstrap, Bulma, OOP, Node.js, Jest, Expressjs, REST APIs, Handlebars, SQL, Sequelize, MVC, NoSQL, Mongoose, React, Apollo Server, Apollo Client, GraphQL, Redux, bcrypt, TDD, Heroku, MySQL2, and MySQL. Former experience with data structures and object-oriented programming. 
                        <br/> 
                        <br/> 
                        A notable project of mine was a Portland itinerary for tourists using the RapidWeb API, the Travel Advisor API, and the Bulma CSS library. Also developed an application that gives you recipes based on what's available inside of your pantry. My best work to date is Beet Hub, a platform created using the MERN stack for sharing and reviewing music albums! Open to new and exciting challenges that create opportunities for leveraging skills. Driven by feedback from coworkers and customers alike. 
                        <br/>
                        <br/> 
                        As someone who enjoys web development and generally creating things, I'm always open to learning new web development skills. I'm a great team player who loves receiving feedback as well as sharing some feedback of my own. I write Github Gists as an opportunity to learn new technical skills in my field, and to assist others with leveraging their skills.
                        <br/>
                        <br/>
                        Reach out to me at:
                        <br/>
                        <i style={{fontWeight: 'bold'}}><a type="email" href="mailto: stacloud@protonmail.com">stacloud@protonmail.com</a></i>
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

export default About;