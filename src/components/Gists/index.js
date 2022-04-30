import { motion } from "framer-motion"
import { mount, unmount } from '../../utils/animations';

// contact form page
const Gists = ({ pageChanged }) => {

    const gists = [
        { title: "Regex Tutorial", desc: "Regex, short for regular expressions, is a popular tool used to identify patterns in strings. Regular expressions consist of a series of characters that represent a search pattern. This is very useful for trying to identify and validate certain inputs such as email addresses or URLs.", url: "https://gist.github.com/StaticCloud/c58069c315c9c8191f1f9ebf377bf52d" },
        { title: "Introduction to 'this'", desc: "The 'this' keyword in JavaScript is very ambiguous to say the least. It can mean something completely different depending on the context it's used inside. Because of it's ever-changing context and meaning when being used, most programmers prefer to use composition and factory functions. Whether we like it or not, it's still important to understand how this works in JavaScript.", url: "https://gist.github.com/StaticCloud/7cdbf55b8ca9c4e9cec250be96f99ea1" },
        { title: "Data Structures in JavaScript", desc: "A rundown of some essential data structures.", url: "https://gist.github.com/StaticCloud/00d0d12923c57c187fe7b686c600fefe" }
    ]

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
            <h1>Gists</h1>
            <div className="left-border">
                <p>I enjoy writing Github Gists as a way to solidify my understanding of a topic of my choice and as a way to inform those who also wish to understand a topic better or learn about it for the first time.</p>
                {gists.map(gist => (
                    <div key={gist.title} className="gist-wrapper">
                        <a href={gist.url} target="_blank">
                            <h1><i className="bi bi-github"></i>{' '}{gist.title}</h1>
                            <hr size="1px"/>
                            <p>{gist.desc}</p>
                        </a>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}

export default Gists;