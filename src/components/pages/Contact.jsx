import '../../assets/styles/contact.css';

export default function Contact() {
    return (
        <div className="container py-5 contact-container">
            <h1 className="text-center mb-4 contact-title">Contact Me</h1>
            <p className="lead text-center mb-5 contact-description">
                I’d love to hear from you! Whether you have questions about my work or want to discuss a potential project, feel free to reach out through the form below.
            </p>
            {/* Contact Form */}
            <form className="mt-4 contact-form">
                <div className="form-group mb-4">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Your Name" required />
                </div>
                <div className="form-group mb-4">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Your Email" required />
                </div>
                <div className="form-group mb-4">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" rows="4" placeholder="Your Message" required></textarea>
                </div>
                <button type="submit" className="btn btn-submit">Send Message</button>
            </form>
        </div>
    );
}
