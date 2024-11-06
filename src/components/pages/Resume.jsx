export default function Resume() {
    return (
        <div className="container py-5">
            <h1 className="text-center mb-4">Take a look at my Resume</h1>
            <p className="lead">
                My diverse background in art and design, combined with my growing expertise in coding, allows me to create innovative solutions that bridge the gap between creativity and technology. I am eager to bring my unique skill set and passion for learning to new opportunities, where I can continue to grow and contribute to impactful projects.
            </p>
            <div className="text-center">
                <a
                    href="/assets/documents/resume.pdf"
                    download
                    className="btn btn-custom"
                >
                    Click here to download my Resume
                </a>
            </div>
        </div>
    );
}
