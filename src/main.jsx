import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const coffees = [
  {
    name: 'Monteiro',
    origin: 'Brazil',
    price: '10,50 €',
    notes: 'Nuts · Milk chocolate · Brown sugar',
    method: 'ESPRESSO',
    tone: 'yellow',
  },
  {
    name: 'Ntwari',
    origin: 'Burundi',
    price: '17,00 €',
    notes: 'Nectarine · Grapefruit · Melon',
    method: 'FILTER',
    tone: 'pink',
  },
  {
    name: 'Bahire',
    origin: 'Burundi',
    price: '16,00 €',
    notes: 'SPECIALTY COFFEE',
    method: 'FILTER',
    tone: 'blue',
  },
];

function CoffeeCard({ coffee, index }) {
  return (
    <article className={`coffeeCard coffeeCard--${coffee.tone}`}>
      <div className="coffeeCardVisual" aria-hidden="true">
        <span className="cardBurst">✦</span>
        <span className="cardBean">●</span>
        <div className="coffeeBag">
          <span className="bagTop">SYRA</span>
          <strong>{coffee.name}</strong>
          <small>{coffee.origin}</small>
          <i>{String(index + 1).padStart(2, '0')}</i>
        </div>
      </div>
      <div className="coffeeCardBody">
        <div className="coffeeCardMeta">
          <span>{coffee.method}</span>
          <span>{coffee.price}</span>
        </div>
        <h3>{coffee.name}</h3>
        <p>{coffee.notes}</p>
        <a className="cardLink" href="#shop">Discover coffee <span>↗</span></a>
      </div>
    </article>
  );
}

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

      <section className="featured" id="shop">
        <div className="sectionIntro">
          <div>
            <p className="eyebrow">01 · FIND YOUR CUP</p>
            <h2>Meet the<br /><span>coffee.</span></h2>
          </div>
          <div className="sectionAside">
            <p>Three starting points. Different origins, different moods, one simple way into specialty coffee.</p>
            <a className="textLink" href="#finder">I don't know what to choose <span>→</span></a>
          </div>
        </div>

        <div className="coffeeGrid">
          {coffees.map((coffee, index) => (
            <CoffeeCard key={coffee.name} coffee={coffee} index={index} />
          ))}
        </div>

        <div className="shopMore">
          <span>10+ coffees · beans or ground</span>
          <a className="button buttonSecondary" href="#shop">Shop all coffee <span>↗</span></a>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
