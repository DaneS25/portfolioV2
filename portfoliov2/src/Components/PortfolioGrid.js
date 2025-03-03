import React, { useEffect, useState } from 'react';
import './PortfolioGrid.css';
import '../App.css';
import GitHubIcon from '../Assets/github.jpg'
import LinkedInIcon from '../Assets/linkedin.jpg'
import InstagramIcon from '../Assets/instagram.png'
import DiscordIcon from '../Assets/discordpic.jpeg'
import PictureOfMe from '../Assets/mepicture.jpg'
import PictureOfMe2 from '../Assets/mepicture2.jpg'
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PortfolioGrid = () => {
    const [isSwapped, setIsSwapped] = useState(false); // State to track image swap
    const [recaptchaValue, setRecaptchaValue] = useState(null);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth); // State for screen width

    const handleRecaptchaChange = (value) => {
        setRecaptchaValue(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!recaptchaValue) {
            toast.error('Please complete the reCAPTCHA.');
            return;
        }

        // Send form data via EmailJS
        emailjs.sendForm('service_iozmobz', 'template_7642osm', e.target, '3_FB-mibcvcaR-QGj')
            .then((result) => {
                console.log(result.text);
                toast.success('Message sent successfully!');
            }, (error) => {
                console.log(error.text);
                toast.error('An error occurred. Please try again.');
            });

        // Clear form fields after submission
        e.target.reset();
    };

    useEffect(() => {
        const scrollContainer = document.querySelector('.app-container'); // Target the correct container
        const titleContainer = document.querySelector('.item3'); // Select the title container (item3)
    
        const handleScroll = () => {
            const scrollPosition = scrollContainer.scrollTop;
    
            if (scrollPosition > 1200 && scrollPosition <= 1450) {
                // Fade out between 1200px and 1450px
                const fadeOutFactor = (1450 - scrollPosition) / 300; // Slow down fade-out over 300px
                titleContainer.style.opacity = fadeOutFactor; // Adjust opacity based on scroll
            } else if (scrollPosition > 1450) {
                // Fully faded out after 1450px
                titleContainer.style.opacity = '0';
            } else if (scrollPosition <= 1450 && scrollPosition > 1200) {
                // Reverse fade-in between 1200px and 1450px
                const fadeInFactor = (scrollPosition - 1200) / 300; // Gradually fade in over 300px
                titleContainer.style.opacity = fadeInFactor; // Adjust opacity based on scroll
            } else if (scrollPosition <= 1200) {
                // Fully visible again before 1200px
                titleContainer.style.opacity = '1';
            }
        };
    
        scrollContainer.addEventListener('scroll', handleScroll);
    
        return () => {
            scrollContainer.removeEventListener('scroll', handleScroll);
        };
    }, []);           

    useEffect(() => {
        const timer = setInterval(() => {
            setIsSwapped(prev => !prev); // Toggle swap state every 3 seconds
        }, 3000); // Change interval as desired (3000ms = 3 seconds)

        return () => clearInterval(timer); // Clean up timer on component unmount
    }, []);

      // Effect to update screen width on resize
    useEffect(() => {
        const handleResize = () => {
        setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="portfolio-grid">
            <div className="grid-item item1">
                <p className='para1'>
                    Welcome to my portfolio, I'm Dane Sorensen (aka e1n), a 29-year-old IT professional based in Kapiti Coast, Wellington.<br></br> I hold a Bachelor of Information Technology from Otago Polytechnic, where I graduated with distinction in mid-2023. Since then, I have been working in IT support for the New Zealand Police, currently serving as second in charge of my team. This role has provided me with valuable leadership experience and hands-on technical problem-solving in a fast-paced environment.
                    <br></br>
                    <br></br>
                    I'm passionate about cybersecurity and continuously expanding my knowledge. I'm actively studying through Hack The Box Academy, and recently earned my ISC2 Certified in Cybersecurity (CC) certification. I also pursue other IT certifications to deepen my expertise in this field.
                    <br></br>
                    I possess strong proficiency in technologies like React JS, JavaScript, HTML/CSS, NextJS, Svelte, and Kotlin. As a master-tier GitHub user, I excel in version control and collaborative development. My experience includes a solid foundation in networking and DevOps, focusing on AWS/Azure Cloud platforms and Cisco networking devices. Additionally, I've contributed as both a Scrum Master and developer in diverse teams, always aiming to implement best practices and drive successful project outcomes.
                    <br></br>
                    <br></br>
                    I'm eager to grow my career and take on new challenges. Feel free to reach out if you'd like to connect or discuss opportunities!
                </p>
            </div>
            <div className="grid-item item2">
                <div className='image-container'>
                    <div className={`image-wrapper ${isSwapped ? 'swapped' : ''}`}>
                        <img src={PictureOfMe} alt="Me" className='grid-image'/>
                    </div>
                    <div className={`image-wrapper ${isSwapped ? 'swapped' : ''}`}>
                        <img src={PictureOfMe2} alt="Me" className='grid-image'/>
                    </div>
                </div>
            </div>
            <div className="grid-item item3">
                <div className="title-container">
                    <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWxqdGMybnBlZ3ZycWs2dmxvOXV2dWU3NXU4NGV2ajg3d3c3cG16cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/1lDE8yNG4a8oqdOajv/giphy.webp" alt="Left" className="side-image" />
                    <h1 className="project-title">PROJECTS</h1>
                    <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWxqdGMybnBlZ3ZycWs2dmxvOXV2dWU3NXU4NGV2ajg3d3c3cG16cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/1lDE8yNG4a8oqdOajv/giphy.webp" alt="Right" className="side-image" />
                </div>
            </div>
            <div className="grid-item item4">
                <div className="button-container-1">
                    <a href="https://todo-dane.web.app/" target="_blank" rel="noopener noreferrer" className="custom-button-1">
                        <span className="button-text-1">Todo List App</span>
                    </a>
                    <a href="https://dane-poker.web.app/" target="_blank" rel="noopener noreferrer" className="custom-button-1">
                        <span className="button-text-1">Poker Game</span>
                    </a>
                </div>
            </div>
            <div className="grid-item item5">
                <h3 className='project-text-title'>Todo App</h3>
                <p className='project-text'>
                    <br></br>The Todo App is developed using React and leverages Firebase as its content management system (CMS). Its primary objective is to provide a web-based task management solution that allows users to access and manage their todo lists both online and offline. Tasks can be added, modified, and deleted, ensuring that they are stored indefinitely in the cloud.<br></br>
                    In offline mode, any tasks created will be synchronized with the Firebase database automatically once the application detects an internet connection, ensuring seamless user experience and data integrity.
                </p>
                <p className='project-text-1'>Login Credentials</p>
                <p className='project-text'>
                    Email: admin@email.com<br></br>Password: adminpass
                </p>

                <h3 className='project-text-title'>Poker Game</h3>
                <p className='project-text'>
                    <br></br>This multiplayer poker game is built using React and integrates Firebase as the content management system (CMS), similar to the architecture used in the Todo App. The game implements a 5-card draw poker format, allowing players to discard and replace any number of cards in their hand once per round. Discarded cards are removed from the game and cannot be reused by other players, ensuring each game instance remains unique.<br></br>
                    After the draw phase, players' hands are evaluated and assigned a numeric value based on standard poker hand rankings, determining the strength of each hand.<br></br>
                    As a multiplayer experience, the game requires at least two participants. To simulate gameplay, you can open two separate browser sessions (e.g., Chrome and an Incognito session, or Chrome and Edge) and log into different accounts to create a match.
                </p>
                <p className='project-text-1'>Login Credentials</p>
                <p className='project-text'>
                    Email: admin@email.com<br></br>Password: adminpass<br></br>
                    Email: test@email.com<br></br>Password: testpass
                </p>
            </div>
            <div className="grid-item item6">
            <h3 className='project-title-1'>Streetle</h3>
                <p className='project-text-2'>
                    Streetle is a web-based game that combines elements from GeoGuessr, Wordle, and Worldle. Developed as a capstone project for my Bachelor's degree, it leverages the Google Street View API to immerse players in a randomly selected country. The challenge is to identify the country without moving from the starting point, with each player having up to five attempts per round to make the correct guess.
                    <br /><br />
                    Built with React, the project was a valuable experience due to the complex cardinal algorithms involved in its creation. These algorithms are used to calculate and display feedback after each guess, providing key statistics like the distance and direction between the guess and the correct location. The game also informs players whether their guess lies within the same hemisphere or shares a border with the correct country.
                    <br /><br />
                    Due to the absence of an active API key, the game currently operates in developer mode with a demo configuration. To experience the full functionality, the demo location is set to Bolivia.
                </p>
            </div>
            <div className="grid-item item7">
                <div className="button-container-2">
                    <a href="https://streetle-29d87.web.app/" target="_blank" rel="noopener noreferrer" className="custom-button-2">
                        <span className="button-text-2">Streetle</span>
                    </a>
                </div>
            </div>
            <div className="grid-item item8">
            <div className="button-container-3">
                    <a href="https://rsvp-ten-fawn.vercel.app/" target="_blank" rel="noopener noreferrer" className="custom-button-3">
                        <span className="button-text-2">RSVP</span>
                    </a>
                </div>
            </div>
            <div className="grid-item item9">
            <h3 className='project-title-1'>RSVP</h3>
                <p className='project-text-2'>
                    The RSVP application was developed using React for its responsive user interface, and EmailJS for handling client-side email submission. The core feature of the app is a modal form that allows users to RSVP by providing their details, which are then sent directly to a predefined email address (in this case, my personal email) via the EmailJS service.
                    <br /><br />
                    To enhance security and prevent automated spam, the form is protected by Google reCAPTCHA, which verifies human interaction before submission. The form is designed to be fully responsive, adapting to various screen sizes, and utilizes React's state management to handle form inputs and error handling. Upon successful form submission, a notification system provides feedback to the user, improving the overall user experience.
                    <br /><br />
                    This solution avoids backend overhead by leveraging serverless architecture, enabling lightweight and scalable email handling without the need for server-side infrastructure.
                </p>
            </div>
{/*             <div className="grid-item item10"><p className='para1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit, ligula at tincidunt tristique, nunc nulla hendrerit est, eget vehicula urna lacus nec elit. Donec vel ante sit amet dolor interdum tempus. Praesent scelerisque nisi ut tortor egestas, ut pharetra eros ultrices. Aenean sit amet malesuada lorem. Etiam ultricies urna vitae lectus convallis, nec dignissim tortor fermentum. Phasellus id risus ut mi vehicula auctor. Suspendisse id orci nec ipsum suscipit vulputate non nec tortor. Proin consectetur, velit a facilisis placerat, libero purus ullamcorper purus, in finibus felis mi et lacus.</p></div>
            <div className="grid-item item11">Item 11</div> */}
            <div className="grid-item item12">
                <div className="title-container">
                    <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWxqdGMybnBlZ3ZycWs2dmxvOXV2dWU3NXU4NGV2ajg3d3c3cG16cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/1lDE8yNG4a8oqdOajv/giphy.webp" alt="Left" className="side-image" />
                    <h1 className="project-title">CONTACT</h1>
                    <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWxqdGMybnBlZ3ZycWs2dmxvOXV2dWU3NXU4NGV2ajg3d3c3cG16cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/1lDE8yNG4a8oqdOajv/giphy.webp" alt="Right" className="side-image" />
                </div>
            </div>
            <div className="grid-item item13">
                <p className='para1'>Thank you for visiting my portfolio. If you'd like to get in touch, I'm easily reachable through several channels, including email, LinkedIn, Instagram, Discord, or mobile (+64 22 321 7388). I'm open to discussing any opportunities, whether they involve permanent positions, contract or temp work, or even one-off freelance projects.
                    <br></br><br></br>While I am more than happy to provide a free quote for freelance work, my preference lies in more stable, long-term opportunities. I'm excited to hear from you, regardless of the nature of your inquiry, and I will make every effort to respond as promptly as possible.
                    <br></br><br></br>For the fastest response, I recommend using the contact form on this website. However, rest assured that any method you choose will reach me—it may just take a bit longer for me to get back to you.
                    <br></br><br></br>Thank you again for taking the time to explore my portfolio. I look forward to hearing from you soon, and I hope you have a wonderful day!
                </p>
            </div>
            <div className="grid-item item14">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" placeholder="Your Name" required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Your Email" required />

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="4" placeholder="Your Message" required></textarea>

                    <ReCAPTCHA
                        sitekey="6LcBG2AqAAAAAD8B1C1Bii_a8Wftn0azwAh99RIU"
                        onChange={handleRecaptchaChange}
                        theme="dark"
                        size={screenWidth <= 500 ? "compact" : "normal"} // Change size based on screen width
                    />

                    <button type="submit" className="send-button">Send</button>
                </form>
            </div>
            <div className="grid-item item15">
                <div className="icon-container">
                    <a href="https://github.com/DaneS25" target="_blank" rel="noopener noreferrer">
                        <img src={GitHubIcon} alt="Github Icon" className="grid-icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/dane-sorensen-4604b8273/" target="_blank" rel="noopener noreferrer">
                        <img src={LinkedInIcon} alt="LinkedIn Icon" className="grid-icon" />
                    </a>
                    <a href="https://www.instagram.com/d4ne.s/" target="_blank" rel="noopener noreferrer">
                        <img src={InstagramIcon} alt="Instagram Icon" className="grid-icon" />
                    </a>
                    <a href="https://discord.com/users/298385807142813697" target="_blank" rel="noopener noreferrer">
                        <img src={DiscordIcon} alt="Discord Icon" className="grid-icon" />
                    </a>
                </div>
            </div>
            <div className="grid-item item16"><p className='para1'>This website was created by e1n web designs</p></div>
            <ToastContainer 
                theme="dark"
            />
        </div>
    );
};

export default PortfolioGrid;
