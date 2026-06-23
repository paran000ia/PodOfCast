import "./css/Footer.css";

import logo2 from "../assets/logo2.png";

import {
  FaTwitter,
  FaInstagram,
  FaTiktok,
  FaSpotify,
  FaYoutube,
  FaPodcast,
  FaApple,
  FaGooglePlay
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-brand">

          <img
            src={logo2}
            alt=""
          />

          <p>
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit.
          </p>

          <div className="socials">

            <FaTwitter />
            <FaInstagram />
            <FaTiktok />

          </div>

        </div>

        <div className="footer-links">

          <a href="/">About</a>
          <a href="/">Testimonials</a>
          <a href="/">Features</a>

        </div>

        <div className="footer-links">

          <a href="/">Episodes</a>
          <a href="/">Pricing</a>
          <a href="/">Blog</a>

        </div>

        <div className="footer-platforms">

          <p>
            Listen to episodes on:
          </p>

          <div>

            <FaPodcast />
            <FaSpotify />
            <FaYoutube />

          </div>

          <p>
            App available on:
          </p>

          <div>

            <FaApple />
            <FaGooglePlay />

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        <span>
          ©2022. All Rights Reserved.
        </span>

        <div>
          <a href="/">Terms</a>
          <a href="/">Privacy</a>
        </div>

      </div>

    </footer>
  );
}