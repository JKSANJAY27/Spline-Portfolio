import React from 'react';
import Spline from '@splinetool/react-spline';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="spline-container" id="spline-container">
        <Spline
            scene="https://prod.spline.design/MqQE1fUYG6LJbDDG/scene.splinecode" 
        />
      </div>
    </section>
  );
};

export default Home;
