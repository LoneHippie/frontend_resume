import React, { useState } from 'react';

import './../styles/contactForm.scss';

const ContactForm = () => {

    const [ formSubject, setFormSubject ] = useState('');
    const [ formBody, setFormBody ] = useState('');

    const formHandlers = {
        changeSubject: (e) => {
            setFormSubject(e.target.value)
        },
        changeBody: (e) => {
            setFormBody(e.target.value);
        },
        handleSubmit: (e) => {
            e.preventDefault();
            window.open(`mailto:lonehippie.dev@gmail.com?subject=${formSubject}&body=${formBody}`);
        }
    }

    return (
        <div className="contact" id="contact">
            <div className="contact__form">
                <form className="form" id="contact-form" onSubmit={(e) => formHandlers.handleSubmit(e)}>

                    <h2>Get in touch</h2>

                    <div className="form__group">
                        <input 
                            type="text" 
                            className="form__input"
                            placeholder="Subject"
                            value={formSubject}
                            onChange={(e) => formHandlers.changeSubject(e)}
                            required
                        ></input>
                        <label htmlFor="name" className="form__label">Subject</label>
                    </div>

                    <div className="form__group">
                        <textarea 
                            className="form__input form__textarea"
                            placeholder="Your Message" 
                            value={formBody}
                            onChange={(e) => formHandlers.changeBody(e)}
                            required
                        ></textarea>
                        <label htmlFor="message" className="form__label">Your Message</label>
                    </div>

                    <div className="form__group">
                        <input 
                            className="form__button"
                            type="submit"
                            value="SEND EMAIL &rarr;"
                            form="contact-form"
                        ></input>
                    </div>

                </form>
            </div>
        </div>
    )
};

export default ContactForm;
