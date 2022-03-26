import { motion } from "framer-motion"
import { useState, useEffect } from "react";

const Portfolio = ({ projects }) => {

    const [currentHover, setCurrentHover] = useState('Check out my work!');

    useEffect(() => {
        document.getElementById('display-title').innerText = currentHover;
    }, [currentHover])

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
            <h1>Portfolio</h1>
            <div className="portfolio">
                {projects.map(project => (
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
                            })}
                            onMouseEnter={() => setCurrentHover(project.title)}
                            onMouseLeave={() => setCurrentHover('Check out my work!')}>
                        </motion.div>
                        </a>
                        <h1>
                            <a target="_blank" href={project.github}>
                                <i className="bi bi-github"></i>
                            </a>
                        </h1>
                    </div>
                ))}
            </div>
            <motion.h2
                id="display-title"
                animate={{
                    y: [100, 0],
                    opacity: [0, 1]
                }}>
            </motion.h2>
        </motion.div>
    );
}

export default Portfolio;