import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

function App() {
  return (
    <main className="page">
      <nav className="nav" aria-label="Main navigation">
        <a className="logo" href="#top" aria-label="Syra Coffee home">syra<span>°</span></a>
        <div className="navLinks">
          <a href="#shop">Shop</a>
          <a href="#finder">Find your coffee</a>
          <a href="#subscribe">Subscribe</a>
          <a href="#stores">Stores</a>
        </div>
        <button className="cart" type="button" aria-label="Shopping cart">Cart <b>0</b></button>
      </nav>

      <section className="hero" id="top">
        <div className="heroCopy">
          <p className="eyebrow">SPECIALTY COFFEE · EVERYDAY</p>
          <h1>Good coffee.<br /><em>Good mood.</em></h1>
          <p className="intro">Specialty coffee made easy to discover, brew and enjoy.</p>
          <div className="actions">
            <a className="button buttonPrimary" href="#shop">Discover coffee <span>↗</span></a>
            <a className="button buttonSecondary" href="#stores">Find a shop</a>
          </div>
        </div>

        <div className="heroArt" aria-hidden="true">
          <div className="sun">☼</div>
          <div className="blob blobOne"></div>
          <div className="blob blobTwo"></div>
          <div className="cup">
            <div className="cupHandle"></div>
            <div className="coffee"></div>
            <span>SYRA</span>
          </div>
          <div className="bean beanOne">•</div>
          <div className="bean beanTwo">•</div>
          <div className="sticker">GOOD<br />MOOD<br /><small>☕</small></div>
        </div>
      </section>

      <div className="ticker" aria-label="Syra message">
        <span>COFFEE FOR EVERYDAY PEOPLE</span><span>✦</span><span>ROASTED WITH CARE</span><span>✦</span><span>GOOD COFFEE, GOOD MOOD</span>
      </div>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
