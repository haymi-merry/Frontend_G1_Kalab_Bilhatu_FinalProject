import React from 'react'
import logo from '../assets/ishublogo.jpg';
import './Home.css'
function Homepage(){
    return(
        <div className="container">
            <header className='header'>
                <div className="logo-section">
                <h1 className='ishublogo'><img  src={logo}alt="ishublogo" /> Is Hub frontend</h1>
                </div>
                <div className="actions">
                    <div className="search-bar">
                        <input type="text" className="input" placeholder='Search ...' />
                        <button className='search-btn'> search icon</button>

                    </div>
                    <button className='profile'>
                        profile icon
                    </button>
                </div>
            </header>
        
        <section className='welcome'>
            <h2>Welcome back, kalex!</h2>
        </section>
        {/* progress track */}
        <section className="progress">
            <h3>Your Progress</h3>
            <ul className="progress-list">
                <li className="progress-item">
                    <span className='course'>HTMl </span>
                    <span className='percent'>60% </span>
                </li>
                <li className="progress-item">
                    <span className='course'>Css </span>
                    <span className='percent'>40% </span>
                </li>
                <li className="progress-item">
                    <span className='course'>javascript </span>
                    <span className='percent'>30% </span>
                </li>
                <li className="progress-item">
                    <span className='course'>react </span>
                    <span className='percent'>10% </span>
                </li>
            </ul>
        </section>
        {/* playlist */}
        <section className="playlist">
            <h3>Courses Playlist</h3>
            <ul className="playlist-list">
                <li className="playlist-item">HTML </li>
                <li className="playlist-item">css </li>
                <li className="playlist-item">javascript </li>
                <li className="playlist-item">react </li>
            </ul>
        </section>
        {/* Quiz section */}
        <section className="Quiz">
            <h3>Quiz Section</h3>
            <div className="question">
                <p>Question 1</p>
            </div>
        </section>
        {/* video section */}
        <section className="video">
            <h3>Html </h3>
            <div className="video-player"></div>
            <div className="controls">
                <button className='play-btn'> play icon</button>
                <button className='favorite-btn'> favorite icon</button>
            </div>
        </section>
        {/* achivements */}
        <section className="achivements">
            <h3>Achivements</h3>
            <ul className="achievemets-list">
                <li className="item">HTMl</li>
                <li className="item">CSS</li>
                <li className="item">Js</li>
                <li className="item">React</li>
            </ul>
        </section>
        </div>
    )
}
export default Homepage;