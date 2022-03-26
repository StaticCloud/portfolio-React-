import { motion } from "framer-motion"
import { useState } from 'react'

// contact form page
const Contact = () => {
    const [formState, setFormState] = useState(
        {
            name: '',
            email: '',
            message: ''
        }
    )

    const [error, setError] = useState('')

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const str = e.target.value;
            const valid = /^.+\@.+\..{2,6}$/.test(str);
            setError(valid ? '' : `An email is required.`)
        } else {
            if (!e.target.value.length) {
                setError(`A ${e.target.name} is required.`);
            } else {
                setError('');
            }
        }
        
        if (!error) {
            setFormState({...formState, [e.target.name]: e.target.value})
        }
    }

    const handleState = (e) => {
        e.preventDefault()
    }

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
            <h1>Contact</h1>
            <div className="left-border">
                <form onSubmit={handleState}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" onChange={handleChange} defaultValue={formState.name}/>
                    </div>
                    <div>
                        <label htmlFor="email">Email address:</label>
                        <input type="email" name="email" onChange={handleChange} defaultValue={formState.email}/>
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea name="message" rows="5" onChange={handleChange} defaultValue={formState.message}/>
                    </div>
                    {error && (
                        <p style={{paddingBottom: "10px"}}>{error}</p>
                    )}  
                    <button type="submit">Submit</button>
                </form>
            </div>
        </motion.div>
    );
}

export default Contact;