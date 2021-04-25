import React from 'react';
import './HomePage.css'

function HomePage() {
    return (
        <div className="p-home">
            <h1>Welcome to The Movie App</h1>
            <img src={process.env.PUBLIC_URL+"/movie.png"} alt="img"></img>
        </div>
    );
}

export default HomePage;