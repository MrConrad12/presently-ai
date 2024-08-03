import React from 'react';
import "./css/privacy_policy.css";

const TermsAndConditions = () => {
    React.useEffect(() => {
        const scrollTop = document.getElementById('scrollTop');

        const handleScroll = () => {
            if (window.pageYOffset > 100) {
                scrollTop.style.display = 'block';
            } else {
                scrollTop.style.display = 'none';
            }
        };

        const handleClick = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        };

        const handleAnchorClick = (e) => {
            e.preventDefault();
            document.querySelector(e.currentTarget.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        };

        window.addEventListener('scroll', handleScroll);
        scrollTop.addEventListener('click', handleClick);

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', handleAnchorClick);
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            scrollTop.removeEventListener('click', handleClick);
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.removeEventListener('click', handleAnchorClick);
            });
        };
    }, []);

    return (
        <div>
            <header>
                <h1>Terms and Conditions</h1>
            </header>

            <div className="container">
                <div id="toc">
                    <h2>Table of Contents</h2>
                    <ul>
                        <li><a href="#introduction">1. Introduction</a></li>
                        <li><a href="#use-of-services">2. Use of Our Services</a></li>
                        <li><a href="#content-and-intellectual-property">3. Content and Intellectual Property</a></li>
                        <li><a href="#privacy-policy">4. Privacy Policy</a></li>
                        <li><a href="#disclaimer">5. Disclaimer of Warranties</a></li>
                        <li><a href="#limitation-of-liability">6. Limitation of Liability</a></li>
                        <li><a href="#indemnification">7. Indemnification</a></li>
                        <li><a href="#governing-law">8. Governing Law</a></li>
                        <li><a href="#changes">9. Changes to These Terms</a></li>
                        <li><a href="#contact">10. Contact Us</a></li>
                    </ul>
                </div>

                <div className="section" id="introduction">
                    <h2>1. Introduction</h2>
                    <p>Welcome to Presently AI. These Terms and Conditions ("Terms") govern your use of our website and services. By accessing or using Presently AI, you agree to comply with and be bound by these Terms. If you do not agree with any part of these Terms, you must not use our website or services.</p>
                </div>

                <div className="section" id="use-of-services">
                    <h2>2. Use of Our Services</h2>
                    <p>You must be at least 13 years old to use Presently AI. To access certain features, you may need to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.</p>
                    <p>You agree not to use our services for illegal purposes, interfere with their performance, attempt unauthorized access, or use automated means without permission.</p>
                </div>

                <div className="section" id="content-and-intellectual-property">
                    <h2>3. Content and Intellectual Property</h2>
                    <p>You retain ownership of your content, but grant Presently AI a license to use it. All intellectual property rights in Presently AI are owned by or licensed to us. You may not use our content without permission.</p>
                </div>

                <div className="section" id="privacy-policy">
                    <h2>4. Privacy Policy</h2>
                    <p>Your privacy is important to us. Please review our <a href="/privacy-policy">Privacy Policy</a> to understand how we collect, use, and protect your personal information.</p>
                </div>

                <div className="section" id="disclaimer">
                    <h2>5. Disclaimer of Warranties</h2>
                    <p>Presently AI is provided "as is" without warranties. We do not guarantee uninterrupted or error-free service.</p>
                </div>

                <div className="section" id="limitation-of-liability">
                    <h2>6. Limitation of Liability</h2>
                    <p>We are not liable for indirect, incidental, or consequential damages arising from your use of our services.</p>
                </div>

                <div className="section" id="indemnification">
                    <h2>7. Indemnification</h2>
                    <p>You agree to indemnify Presently AI from any claims arising out of your use of our services or violation of these Terms.</p>
                </div>

                <div className="section" id="governing-law">
                    <h2>8. Governing Law</h2>
                    <p>These Terms are governed by the laws of [Your Country/State]. Any disputes will be resolved in the courts of [Your Country/State].</p>
                </div>

                <div className="section" id="changes">
                    <h2>9. Changes to These Terms</h2>
                    <p>We may update these Terms. Continued use of our services means you accept the changes. Check this page regularly for updates.</p>
                </div>

                <div className="section" id="contact">
                    <h2>10. Contact Us</h2>
                    <p>If you have questions, contact us:</p>
                    <ul>
                        <li>By email: <a href="mailto:jranto003@gmail.com">support@presentlyai.com</a></li>
                    </ul>
                </div>
            </div>

            <div className="scroll-top" id="scrollTop">↑</div>
        </div>
    );
};

export default TermsAndConditions;
