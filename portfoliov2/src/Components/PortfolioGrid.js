import React, { useEffect, useState } from 'react';
import './PortfolioGrid.css';
import GitHubIcon from '../Assets/github.jpg'
import LinkedInIcon from '../Assets/linkedin.jpg'
import InstagramIcon from '../Assets/instagram.png'
import PictureOfMe from '../Assets/mepicture.jpg'
import PictureOfMe2 from '../Assets/mepicture2.jpg'

const PortfolioGrid = () => {
    const [isSwapped, setIsSwapped] = useState(false); // State to track image swap

    useEffect(() => {
        const timer = setInterval(() => {
            setIsSwapped(prev => !prev); // Toggle swap state every 3 seconds
        }, 3000); // Change interval as desired (3000ms = 3 seconds)

        return () => clearInterval(timer); // Clean up timer on component unmount
    }, []);

    return (
        <div className="portfolio-grid">
            <div className="grid-item item1">
                <p className='para1'>
                    Welcome to my portfolio, I'm Dane Sorensen, a 29-year-old IT professional based in Kapiti Coast, Wellington.<br></br> I hold a Bachelor of Information Technology from Otago Polytechnic, where I graduated with distinction in mid-2023. Since then, I have been working in IT support for the New Zealand Police, currently serving as second in charge of my team. This role has provided me with valuable leadership experience and hands-on technical problem-solving in a fast-paced environment.
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
            <div className="grid-item item4">Item 4</div>
            <div className="grid-item item5"><p className='para1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit, ligula at tincidunt tristique, nunc nulla hendrerit est, eget vehicula urna lacus nec elit. Donec vel ante sit amet dolor interdum tempus. Praesent scelerisque nisi ut tortor egestas, ut pharetra eros ultrices. Aenean sit amet malesuada lorem. Etiam ultricies urna vitae lectus convallis, nec dignissim tortor fermentum. Phasellus id risus ut mi vehicula auctor. Suspendisse id orci nec ipsum suscipit vulputate non nec tortor. Proin consectetur, velit a facilisis placerat, libero purus ullamcorper purus, in finibus felis mi et lacus.</p></div>
            <div className="grid-item item6">
                <div className="icon-container">
                    <img src={GitHubIcon} alt="Github Icon" className="grid-icon" />
                    <img src={LinkedInIcon} alt="Linkedin Icon" className='grid-icon'/>
                    <img src={InstagramIcon} alt="Instagram Icon" className='grid-icon'/>
                </div>
            </div>
            <div className="grid-item item7">Item 7</div>
            <div className="grid-item item8">Item 8</div>
            <div className="grid-item item9"><p className='para1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit, ligula at tincidunt tristique, nunc nulla hendrerit est, eget vehicula urna lacus nec elit. Donec vel ante sit amet dolor interdum tempus. Praesent scelerisque nisi ut tortor egestas, ut pharetra eros ultrices. Aenean sit amet malesuada lorem. Etiam ultricies urna vitae lectus convallis, nec dignissim tortor fermentum. Phasellus id risus ut mi vehicula auctor. Suspendisse id orci nec ipsum suscipit vulputate non nec tortor. Proin consectetur, velit a facilisis placerat, libero purus ullamcorper purus, in finibus felis mi et lacus.</p></div>
            <div className="grid-item item10">Item 10</div>
            <div className="grid-item item11">Item 11</div>
            <div className="grid-item item12"><p className='para1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit, ligula at tincidunt tristique, nunc nulla hendrerit est, eget vehicula urna lacus nec elit. Donec vel ante sit amet dolor interdum tempus. Praesent scelerisque nisi ut tortor egestas, ut pharetra eros ultrices. Aenean sit amet malesuada lorem. Etiam ultricies urna vitae lectus convallis, nec dignissim tortor fermentum. Phasellus id risus ut mi vehicula auctor. Suspendisse id orci nec ipsum suscipit vulputate non nec tortor. Proin consectetur, velit a facilisis placerat, libero purus ullamcorper purus, in finibus felis mi et lacus.</p></div>
            <div className="grid-item item13"><p className='para1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit, ligula at tincidunt tristique, nunc nulla hendrerit est, eget vehicula urna lacus nec elit. Donec vel ante sit amet dolor interdum tempus. Praesent scelerisque nisi ut tortor egestas, ut pharetra eros ultrices. Aenean sit amet malesuada lorem. Etiam ultricies urna vitae lectus convallis, nec dignissim tortor fermentum. Phasellus id risus ut mi vehicula auctor. Suspendisse id orci nec ipsum suscipit vulputate non nec tortor. Proin consectetur, velit a facilisis placerat, libero purus ullamcorper purus, in finibus felis mi et lacus.</p></div>
            <div className="grid-item item14">Item 14</div>
            <div className="grid-item item15">Item 15</div>
            <div className="grid-item item16"><p className='para1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit, ligula at tincidunt tristique, nunc nulla hendrerit est, eget vehicula urna lacus nec elit. Donec vel ante sit amet dolor interdum tempus. Praesent scelerisque nisi ut tortor egestas, ut pharetra eros ultrices. Aenean sit amet malesuada lorem. Etiam ultricies urna vitae lectus convallis, nec dignissim tortor fermentum. Phasellus id risus ut mi vehicula auctor. Suspendisse id orci nec ipsum suscipit vulputate non nec tortor. Proin consectetur, velit a facilisis placerat, libero purus ullamcorper purus, in finibus felis mi et lacus.</p></div>
        </div>
    );
};

export default PortfolioGrid;
