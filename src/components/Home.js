import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <video className="background-video" autoPlay loop muted>
        <source src="KitchenBackground.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
      <div className="content">
        <Link to="/create" className="button">Create</Link>
        <Link to="/posts" className="button">Look at Posts</Link>
      </div>
    </div>
  );
}

export default Home;