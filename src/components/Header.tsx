import "./css/Header.css";

import { Link } from "react-router-dom";

import logo2 from "../assets/logo2.png";


export default function Header() {
  return (
    <header className="header">
    <div className="header__container">

    <div className="header__logo">
      <Link to="/Home"><img src={logo2} alt="Logo 2" /></Link>
    </div>

      <nav className="header__nav">
        <Link to="/Episodes">Episodes</Link>
        <Link to="/About">About</Link>
        <Link to="/More">More</Link>
      </nav>

      <div className="header__buttons">
        <Link to="/blog"><button className="episodes-btn">
          Recent Episodes
        </button>
        </Link>

        <button className="subscribe-btn">
          Subscribe
        </button>
      </div>
    </div>
  </header>
  );
}