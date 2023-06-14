import React from 'react';
import "./HomePage.css"
const Contact = () => {
    return (
        <section id="address-section">
            <div id="address-wrapper">
                <div>
                    <p className="green-heading">Contact Us</p>
                    <h3 className="section-heading">Address Information</h3>
                    <p className="section-description">Overeating is one of the most common causes of overweight and
                        digestive problems.</p>
                    <h4 className="address-heading">London Store</h4>
                    <p className="address-lines">
                        Roeterseiland Campus Building E <br />
                        6th floor London <br />
                        Monday to Friday : 9am to 8pm <br />
                        examplemail.mail.com
                    </p>
                    <h4 className="address-heading">Berlin Store</h4>
                    <p className="address-lines">
                        Roeterseiland Campus Building E <br />
                        6th floor London <br />
                        Monday to Friday : 9am to 8pm <br />
                        examplemail.mail.com
                    </p>
                </div>
                <div>
                    <p className="green-heading">Meet Our Team</p>
                    <h3 className="section-heading">Get In Touch</h3>
                    <p className="section-description">The task of proper nutrition - to remove from the diet harmful
                        food and enrich it useful.</p>
                    <form>
                        <input className="input-box" type="text" name="name" placeholder="Name" />
                        <input className="input-box" type="text" name="phone" placeholder="Phone" />
                        <input className="input-box" type="text" name="subject" placeholder="Subject" />
                        <input className="input-box" type="text" name="email" placeholder="E-mail" />
                        <textarea className="input-box">Message</textarea>
                        <input id="btn-submit" className="primary-button" type="submit" value="'Submit Now" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;