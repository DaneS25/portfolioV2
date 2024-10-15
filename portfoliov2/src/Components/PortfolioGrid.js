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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit, ligula at tincidunt tristique, nunc nulla hendrerit est, eget vehicula urna lacus nec elit. Donec vel ante sit amet dolor interdum tempus. Praesent scelerisque nisi ut tortor egestas, ut pharetra eros ultrices. Aenean sit amet malesuada lorem. Etiam ultricies urna vitae lectus convallis, nec dignissim tortor fermentum. Phasellus id risus ut mi vehicula auctor. Suspendisse id orci nec ipsum suscipit vulputate non nec tortor. Proin consectetur, velit a facilisis placerat, libero purus ullamcorper purus, in finibus felis mi et lacus.
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
                <h1 className='project-title'>PROJECTS</h1>
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
            <div className="grid-item item9">Item 9</div>
            <div className="grid-item item10">Item 10</div>
            <div className="grid-item item11">Item 11</div>
            <div className="grid-item item12">Item 12</div>
            <div className="grid-item item13">Item 13</div>
            <div className="grid-item item14">Item 14</div>
            <div className="grid-item item15">Item 15</div>
            <div className="grid-item item16">Item 16</div>
        </div>
    );
};

export default PortfolioGrid;
