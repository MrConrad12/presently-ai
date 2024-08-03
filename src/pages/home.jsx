import React from 'react';
import "./css/home.css";

const HomePage = () => {
    React.useEffect(() => {
        const anchors = document.querySelectorAll('a[href^="#"]');
        const handleAnchorClick = (e) => {
            e.preventDefault();
            document.querySelector(e.currentTarget.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        };

        anchors.forEach(anchor => {
            anchor.addEventListener('click', handleAnchorClick);
        });

        const handleScroll = () => {
            const scrollPosition = window.pageYOffset;
            document.querySelector('.shape-1').style.transform = `translateY(${scrollPosition * 0.2}px)`;
            document.querySelector('.shape-2').style.transform = `translateY(${scrollPosition * -0.1}px) rotate(${scrollPosition * 0.1}deg)`;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            anchors.forEach(anchor => {
                anchor.removeEventListener('click', handleAnchorClick);
            });
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <main>
                <section id="home" className="banner">
                    <div className="banner-background"></div>
                    <div className="banner-shapes">
                        <div className="shape shape-1"></div>
                        <div className="shape shape-2"></div>
                    </div>
                    <div className="banner-content">
                        <img src="src/assets/logo0.png" className='banner-logo' alt="Presently AI logo" />
                        <h1>Welcome to Presently AI</h1>
                        <p>Create impactful presentations effortlessly with AI</p>
                        <a href="#features" className="cta-button">Get Started</a>
                    </div>
                </section>

                <section id="features" className="features">
                    <div className="container">
                        <h2>Our Features</h2>
                        <div className="feature-grid">
                            <div className="feature-card">
                                <div className="feature-icon">📝</div>
                                <h3>Automated Text Generation</h3>
                                <p>Input a title, description, and tone to receive tailored, engaging text for your slides.</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">🎨</div>
                                <h3>Canva Integration</h3>
                                <p>Easily edit and customize your slides with Canva’s extensive design tools.</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">🖱️</div>
                                <h3>Drag-and-Drop Functionality</h3>
                                <p>Arrange and adjust text on slides effortlessly with intuitive drag-and-drop controls.</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">✏️</div>
                                <h3>Customizable Summaries</h3>
                                <p>Refine and personalize generated content to fit your presentation goals.</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">🔤</div>
                                <h3>Text Styling Options</h3>
                                <p>Customize text appearance with various styling options to match your presentation’s design.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer id="contact">
                <div className="container">
                    <p>&copy; 2024 Presently AI. All rights reserved.</p>
                    <p>Contact us: <a href="mailto:info@presentlyai.example.com">info@presentlyai.example.com</a></p>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
