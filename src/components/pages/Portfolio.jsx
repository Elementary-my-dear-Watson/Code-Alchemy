import '../../assets/styles/portfolio.css';
import tarot from '../../assets/images/tarot.jpg';
import scroll from '../../assets/images/scroll-seeker.jpg';
import debt from '../../assets/images/debt.jpg';

export default function Portfolio() {
    return (
        <div className="container py-5">
            <h1 className="text-center mb-4">My Portfolio</h1>

            <div className="row mt-5 justify-content-center">
                <div className="col-md-4">
                    <div className="portfolio-item mb-4">
                        <a href="https://github.com/Elementary-my-dear-Watson/tarot" className="portfolio-link">
                            <div className="portfolio-thumbnail-container">
                                <img src={tarot} className="portfolio-thumbnail" alt="Tarot Project" />
                                <div className="portfolio-hover-text">
                                    <h5>Tarot</h5>
                                    <p>Creative exploration through visual storytelling.</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="portfolio-item mb-4">
                        <a href="https://github.com/Elementary-my-dear-Watson/scroll-seeker" className="portfolio-link">
                            <div className="portfolio-thumbnail-container">
                                <img src={scroll} className="portfolio-thumbnail" alt="Scroll Seeker Project" />
                                <div className="portfolio-hover-text">
                                    <h5>Scroll Seeker</h5>
                                    <p>A journey of discovery through imagery and design.</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="portfolio-item mb-4">
                        <a href="https://github.com/Elementary-my-dear-Watson/dept" className="portfolio-link">
                            <div className="portfolio-thumbnail-container">
                                <img src={debt} className="portfolio-thumbnail" alt="Debt Relief Project" />
                                <div className="portfolio-hover-text">
                                    <h5>Debt Relief</h5>
                                    <p>Visually representing financial empowerment and relief.</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <p className="lead text-center mt-5">
                As a passionate and versatile designer, I bring creativity and technical expertise to every project. <br /><br />
                With a strong foundation in both traditional art forms and modern digital design, I am dedicated to crafting visually captivating and functional solutions. <br /><br />
                My work reflects a blend of artistic flair and problem-solving skills, ensuring that each design is both aesthetically pleasing and user-friendly. I am constantly seeking new challenges to further hone my skills and push the boundaries of my creativity.
            </p>
        </div>
    );
}
