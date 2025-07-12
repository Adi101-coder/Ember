import React from 'react';
import '../stylesheets/LandingPage.css';
import Footer from './Footer';
import { motion } from 'framer-motion';

const LandingPage = () => {
  return (
    <div className="landing-root">
      {/* Background grid and dots */}
      <div className="landing-bg-grid"></div>
      {/* Navbar */}
      <nav className="landing-navbar">
        <div className="landing-logo">
          <span className="logo-icon">&#128293;</span>
          <span className="logo-text">ember</span>
        </div>
        <div className="landing-nav-links">
          <a href="#tips" className="landing-nav-link">Safety Tips</a>
          <button className="landing-nav-btn">Browse Sites</button>
        </div>
      </nav>
      {/* Hero Section */}
      <main className="landing-hero">
        <h1 className="landing-hero-title">
          Stream Anything.<br />
          Anywhere. Free.
        </h1>
        <p className="landing-hero-desc">
          Discover the best free streaming sites for movies, TV shows, anime, and more.<br />
          Your ultimate guide to entertainment without limits.
        </p>
        <div className="landing-hero-actions">
          <button className="landing-hero-btn">Explore Streaming Sites</button>
        </div>
        <div className="landing-hero-learn">
          <a href="#tips" className="landing-hero-learn-link">Safety Tips</a>
          <div className="landing-hero-arrow">↓</div>
        </div>
      </main>

      {/* Safety Tips Section */}
      <section id="tips" className="tips-section">
        <div className="tips-container">
          <h2 className="tips-title">Safety Tips</h2>
          <div className="tips-grid">
            <div className="tip-card">
              <h3>Use Throwaway Emails</h3>
              <p>Always use disposable email addresses when signing up for streaming sites to protect your privacy.</p>
            </div>
            <div className="tip-card">
              <h3>Try a VPN</h3>
              <p>If sites are blocked in your region, use a VPN to access them safely and securely.</p>
            </div>
            <div className="tip-card">
              <h3>Check Our Grading</h3>
              <p>Review our grading system to see scores, pros & cons for each streaming site before using.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Streaming Sites Section */}
      <section id="streaming" className="streaming-section">
        <div className="streaming-container">
          <h2 className="streaming-title">Streaming Sites</h2>
          <p className="streaming-desc">The best free streaming platforms for movies, TV shows, anime, and more</p>

          {/* General Streaming */}
          <div className="streaming-category">
            <h3 className="category-title">General Streaming</h3>
            <div className="site-grid">
              <motion.div className="site-card"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0 }}
                whileHover={{ scale: 1.04 }}
              >
                <div className="site-logo">
                  <img src="https://fmovies.to/favicon.ico" alt="Fmovies" onError={(e) => { (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiByeD0iNCIgZmlsbD0iIzNiODJmNiIvPgo8cGF0aCBkPSJNMTYgOEwxNiAyNEw4IDE2TDE2IDhNMjQgMTZMMTYgMjRMMjQgMTZaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K'; }} />
                </div>
                <h4>Cineby / Fmovies+</h4><p className="site-features">Movies / TV / Anime / Auto-Next / Watch Parties</p><a href="https://www.fmovies.cat/" target="_blank" className="site-btn">Visit Site</a>
              </motion.div>
              <div className="site-card"><h4>XPrime</h4><p className="site-features">Movies / TV / Anime / Auto-Next / Watch Parties</p><a href="https://xprime.tv/" target="_blank" className="site-btn">Visit Site</a></div>
              <div className="site-card"><h4>VeloraTV / 456movie</h4><p className="site-features">Movies / TV / Anime / Auto-Next / Watch Parties</p><a href="https://veloratv.ru/" target="_blank" className="site-btn">Visit Site</a></div>
              <div className="site-card"><h4>SpenFlix</h4><p className="site-features">Movies / TV / Anime / Auto-Next / Watch Parties</p><a href="https://spenflix.com" target="_blank" className="site-btn">Visit Site</a></div>
              <div className="site-card"><h4>Rive</h4><p className="site-features">Movies / TV / Anime / Auto-Next / Status</p><a href="https://rive.to" target="_blank" className="site-btn">Visit Site</a></div>
              <div className="site-card"><h4>FlickyStream</h4><p className="site-features">Movies / TV / Anime</p><a href="https://flickystream.com" target="_blank" className="site-btn">Visit Site</a></div>
              <div className="site-card"><h4>1Shows / RgShows</h4><p className="site-features">Movies / TV / Anime / Auto Next / Guide</p><a href="https://1shows.com" target="_blank" className="site-btn">Visit Site</a></div>
              <div className="site-card"><h4>Netplay</h4><p className="site-features">Movies / TV / Anime / Auto-Next</p><a href="https://netplay.to" target="_blank" className="site-btn">Visit Site</a></div>
              <div className="site-card"><h4>MovieMaze</h4><p className="site-features">Movies / TV / Anime</p><a href="https://moviemaze.com" target="_blank" className="site-btn">Visit Site</a></div>
              <div className="site-card"><h4>PopcornMovies</h4><p className="site-features">Movies / TV / Anime</p><a href="https://popcornmovies.com" target="_blank" className="site-btn">Visit Site</a></div>
              <div className="site-card"><h4>Vidjoy</h4><p className="site-features">Movies / TV / Anime / Auto-Next</p><a href="https://vidjoy.com" target="_blank" className="site-btn">Visit Site</a></div>
              <div className="site-card"><h4>catflix</h4><p className="site-features">Movies / TV</p><a href="https://catflix.com" target="_blank" className="site-btn">Visit Site</a></div>
              <div className="site-card"><h4>Smashystream</h4><p className="site-features">Movies / TV / Anime</p><a href="https://smashystream.com" target="_blank" className="site-btn">Visit Site</a></div>
              <div className="site-card"><h4>CineGo</h4><p className="site-features">Movies / TV</p><a href="https://cinego.com" target="_blank" className="site-btn">Visit Site</a></div>
              <div className="site-card"><h4>PrimeWire</h4><p className="site-features">Movies / TV / Anime / 3rd Party Hosts</p><a href="https://primewire.li" target="_blank" className="site-btn">Visit Site</a></div>
              <div className="site-card"><h4>ProjectFreeTV</h4><p className="site-features">Movies / TV / Anime / 3rd Party Hosts</p><a href="https://projectfreetv.one" target="_blank" className="site-btn">Visit Site</a></div>
              <div className="site-card"><h4>Downloads-Anymovies</h4><p className="site-features">Movies / 3rd Party Hosts</p><a href="https://anymovies.com" target="_blank" className="site-btn">Visit Site</a></div>
              <div className="site-card"><h4>Streaming CSE</h4><p className="site-features">Multi-Site Search</p><a href="https://cse.google.com" target="_blank" className="site-btn">Visit Site</a></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage; 