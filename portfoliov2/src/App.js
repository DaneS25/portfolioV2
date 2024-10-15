import React from 'react';
import PortfolioGrid from './Components/PortfolioGrid';
import './App.css'; // Import your CSS file for the App component
import myGif from './Assets/2024-10-15-Dane-Sorensen.gif';

const App = () => {
  return (
    <div className="app-container">
      <img
        className='name-gif'
        src={myGif}
        alt='Name GIF'
      />
      <PortfolioGrid />
    </div>
  );
};

export default App;


