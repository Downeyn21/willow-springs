import { useState } from "react";

function ContactForm() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [body, setBody] = useState('')

    function contactHandle() {
        console.log('form submit');
        
    }

    function handleNameChange(e) {
        setName(e.target.value)
    }

    function handleEmailChange(e) {
        setEmail(e.target.value)
    }

    function handleBodyChange(e) {
        setBody(e.target.value)
    }

    return (  
        <>
            <div className="contactFormWrapper">
                <form onSubmit={contactHandle}>
                    <label>
                        Full Name:
                        <input 
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                    />
                    </label>
                    <br />
                    <label>
                        Email:
                        <input 
                        type="text"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    </label>
                    <br />
                    <label className="msgWrapper">
                        Message
                        <input
                        type="text" 
                        value={body}
                        onChange={handleBodyChange}
                    />
                        </label>
                </form>
            </div>
        </>
    );
}

export default ContactForm;