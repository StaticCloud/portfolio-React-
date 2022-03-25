import { motion } from "framer-motion"

const Resume = ({ pdf }) => {
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
        <h1>Résumé</h1>
        <div className="left-border">
            <p>I'm a full-stack web developer with experience in JavaScript, Node.js, Sequelize, SQL, NoSQL (MongoDB), Express.js, and React. A full summary of who I am, my technical skills, and projects can be downloaded here.</p>
            <button id="resume"><a href={pdf} target="_blank">Download</a></button>
        </div>
        </motion.div>
    )
}

export default Resume;