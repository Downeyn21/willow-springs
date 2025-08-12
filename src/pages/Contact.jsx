import ContactForm from "../components/contact/ContactForm";

function Contact() {


    return (
        <>
            <div className="contactWrapper">
                <div className="contactHeader">
                    <h3>Contact us</h3>
                </div>
                <div className="contactMainContainer">
                    <ContactForm />
                </div>
            </div>
        </>
    );
}

export default Contact;