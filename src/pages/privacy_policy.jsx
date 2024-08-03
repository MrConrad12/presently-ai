import React from 'react';
import "./css/privacy_policy.css";

const PrivacyPolicy = () => {
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
                <h1>Privacy Policy</h1>
            </header>

            <div className="container">
                <div id="toc">
                    <h2>Table of Contents</h2>
                    <ul>
                        <li><a href="#introduction">1. Introduction</a></li>
                        <li><a href="#information-we-collect">2. Information We Collect</a></li>
                        <li><a href="#how-we-use-your-information">3. How We Use Your Information</a></li>
                        <li><a href="#sharing-your-information">4. Sharing Your Information</a></li>
                        <li><a href="#data-security">5. Data Security</a></li>
                        <li><a href="#your-choices">6. Your Choices</a></li>
                        <li><a href="#childrens-privacy">7. Children's Privacy</a></li>
                        <li><a href="#changes">8. Changes to This Privacy Policy</a></li>
                        <li><a href="#contact">9. Contact Us</a></li>
                    </ul>
                </div>

                <div className="section" id="introduction">
                    <h2>1. Introduction</h2>
                    <p>Welcome to Presently AI. We are committed to safeguarding your privacy and protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and secure your data when you use our services or interact with our website. By accessing or using our services, you consent to the practices described herein.</p>
                </div>

                <div className="section" id="information-we-collect">
                    <h2>2. Information We Collect</h2>
                    <h3>2.1. Personal Information</h3>
                    <p>We collect personal information that you provide to us directly, including:</p>
                    <ul>
                        <li>Name</li>
                        <li>Email address</li>
                        <li>Phone number</li>
                        <li>Payment information (if applicable)</li>
                    </ul>
                    <h3>2.2. Usage Data</h3>
                    <p>We gather information about how you interact with our website and services, including:</p>
                    <ul>
                        <li>IP address</li>
                        <li>Browser type</li>
                        <li>Device information</li>
                        <li>Pages visited</li>
                        <li>Time spent on pages</li>
                        <li>Referring site</li>
                    </ul>
                    <h3>2.3. Cookies and Tracking Technologies</h3>
                    <p>We use cookies and other tracking technologies to enhance your experience, such as:</p>
                    <ul>
                        <li>Essential cookies for authentication and security</li>
                        <li>Analytics cookies to understand usage patterns</li>
                        <li>Advertising cookies for personalized marketing</li>
                    </ul>
                    <p>You can control your cookie preferences through your browser settings.</p>
                </div>

                <div className="section" id="how-we-use-your-information">
                    <h2>3. How We Use Your Information</h2>
                    <p>We utilize the information collected for various purposes, including:</p>
                    <ul>
                        <li>Providing and maintaining our services</li>
                        <li>Processing transactions and managing payments</li>
                        <li>Communicating with you, including sending updates and marketing materials</li>
                        <li>Enhancing our website and services based on user feedback</li>
                        <li>Complying with legal obligations and protecting our rights</li>
                    </ul>
                </div>

                <div className="section" id="sharing-your-information">
                    <h2>4. Sharing Your Information</h2>
                    <p>We may share your information with:</p>
                    <h3>4.1. Service Providers</h3>
                    <p>Third parties who perform services on our behalf, such as payment processors and analytics providers.</p>
                    <h3>4.2. Legal Authorities</h3>
                    <p>When required by law or to respond to legal requests and protect our rights.</p>
                    <h3>4.3. Business Transfers</h3>
                    <p>In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.</p>
                    <p>We do not sell or rent your personal information to third parties for their own marketing purposes without your explicit consent.</p>
                </div>

                <div className="section" id="data-security">
                    <h2>5. Data Security</h2>
                    <p>We implement appropriate security measures to safeguard your personal information from unauthorized access, disclosure, or destruction. However, please be aware that no method of transmission over the Internet or electronic storage is entirely secure, and we cannot guarantee absolute security.</p>
                </div>

                <div className="section" id="your-choices">
                    <h2>6. Your Choices</h2>
                    <p>You have the following rights:</p>
                    <ul>
                        <li>Access, update, or delete your personal information</li>
                        <li>Opt out of receiving marketing communications</li>
                        <li>Disable cookies through your browser settings</li>
                    </ul>
                    <p>To exercise these rights, please contact us using the details provided below.</p>
                </div>

                <div className="section" id="childrens-privacy">
                    <h2>7. Children's Privacy</h2>
                    <p>Our services are not designed for children under the age of 13. We do not knowingly collect personal information from individuals under 13. If we become aware of such data, we will take steps to delete it promptly.</p>
                </div>

                <div className="section" id="changes">
                    <h2>8. Changes to This Privacy Policy</h2>
                    <p>We may update this Privacy Policy periodically. Changes will be posted on this page with an updated effective date. We encourage you to review this Privacy Policy regularly to stay informed about how we protect your information.</p>
                </div>

                <div className="section" id="contact">
                    <h2>9. Contact Us</h2>
                    <p>If you have any questions or concerns regarding this Privacy Policy or our data practices, please contact us at:</p>
                    <ul>
                        <li>Email: <a href="mailto:jranto003@gmail.com">support@presentlyai.com</a></li>
                    </ul>
                </div>
            </div>

            <div className="scroll-top" id="scrollTop">↑</div>
        </div>
    );
};

export default PrivacyPolicy;
