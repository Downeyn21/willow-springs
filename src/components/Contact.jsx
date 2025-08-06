import { useEffect, useState } from "react";

function Contact() {
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
            <div className="contactWrapper">
                <div className="contactHeader">
                    <h3>Contact us</h3>
                </div>
                <div className="contactMainContainer">
                    <div className="contactFormContainer">
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
                            <label>
                                Message
                                <input
                                type="text" 
                                value={body}
                                onChange={handleBodyChange}
                            />
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;