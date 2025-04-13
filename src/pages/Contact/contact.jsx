import React from "react";
import "./contact.css";
import Footer from "../../component/footer/footer";
import contactBg from "../../assets/contactbg.png"; // Import the background image

export default function Contact() {
    return (
        <div>
            <div className="contact" style={{ backgroundImage: `url(${contactBg})` }}>
                <div className="contact__overlay">
                    <div className="contact__info">
                        <h1 className="fst-italic">Get in touch</h1>
                        <p>Fill up your form and our team will get in touch with you within 24 hours</p>
                        <ul>
                            <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-geo-alt-fill me-2" viewBox="0 0 16 16">
                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                            </svg>
                                 QPFP+HCS Ebène, Mauritius</li>
                            <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-telephone-fill me-2" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                            </svg>
                                 +855 1123334231</li>
                            <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-envelope-fill me-2" viewBox="0 0 16 16">
                                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
                            </svg>
                                 abcdef@gmail.com</li>
                        </ul>
                    </div>
                    <div className="contact__form">
                        <form>
                            <label>Name</label>
                            <input type="text" placeholder="Enter your name" required />
                            <label>Email Address</label>
                            <input type="email" placeholder="Enter your email" required />
                            <label>Message</label>
                            <textarea placeholder="Enter your message" required></textarea>
                            <button type="submit">SEND MESSAGE</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}