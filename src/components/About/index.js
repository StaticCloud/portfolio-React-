import { motion } from "framer-motion"

const About = () => {
    return (
        <motion.div 
            className="content"
            animate={{ 
                opacity: [0, 1],
                y: [20, 0]
            }}
            transition={{ 
                duration: 0.5,
                type: "easeOut"
            }}>
            <div className="about">
                <div>
                    <div className="portrait"/>
                </div>
                <div className="left-border">
                    <h1>About</h1>
                    <p>
                        Hello, I'm Diego! I'm a web developer with a certificate in full-stack web development from University of Oregon and an Associate Degree for computer science from Clark College in Vancouver, Washington. I have experience with HTML, CSS, JavaScript, Node.js, Sequelize, Express.js, React, MongoDB, and React. Former experience with data structures and object-oriented programming. <br/> <br/> A notable project of mine was a Portland itinerary for tourists using jQuery and the Bulma CSS library, as well as utilizing a weather API and an API for local attractions. Also developed an application that gives you recipes based on what's available inside of your pantry. Open to new and exciting challenges that create opportunities for leveraging skills. Driven by feedback from coworkers and customers alike. Specializes in intuitive and visually-engaging user experiences.
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

export default About;