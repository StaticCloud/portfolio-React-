import { motion } from "framer-motion"

const Footer = ({ icons }) => {
    return (
        <footer>
            {icons.map((icon, i) => (
                <motion.h2 
                    key={icon.link}
                    animate={{ 
                        scale: [0, 1.4, 1]
                    }}
                    transition={{
                        delay: i * 0.2
                    }}
                    >
                    <a href={icon.link} target="_blank">
                        <i className={icon.class}></i>
                    </a>
                </motion.h2>
            ))}
        </footer>
    );
}

export default Footer;