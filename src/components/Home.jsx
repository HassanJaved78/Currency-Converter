import React from 'react';
import './styles/Home.css'; // Link to the CSS below

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <h1>Welcome to SwiftConvert 💱</h1>
        <p>
          Instantly convert between world currencies with live exchange rates. Fast, simple, and accurate — perfect for travelers, traders, and anyone dealing with global finances.
        </p>
        <a href="#converter" className="home-button">Start Converting</a>
      </div>
    </section>
  );
};

export default Home;
