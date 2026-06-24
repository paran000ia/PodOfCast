import "./css/Header.css";

import logo2 from "../assets/logo2.png";


export default function Header() {
  return (
    <header className="header">
    <div className="header__container">

    <div className="header__logo">
      <a href="/Home"><img src={logo2} alt="Logo 2" /></a>
    </div>

      <nav className="header__nav">
        <a href="/Episodes">Episodes</a>
        <a href="/About">About</a>
        <a href="/More">More</a>
      </nav>

      <div className="header__buttons">
        <a href="/blog"><button className="episodes-btn">
          Recent Episodes
        </button>
        </a>

        <button className="subscribe-btn">
          Subscribe
        </button>
      </div>
    </div>
  </header>
  );
}

