import React from "react"
import { Link } from "gatsby"
import { useSpring } from "react-spring"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookSquare,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
const NavLinks = () => {
  return (
    <StyledNav>
      <Link to="/" activeStyle={{ color: "#ed1c24" }}>
        Home
      </Link>
      <Link to="/portfolio" activeStyle={{ color: "#ed1c24" }}>
        Portfolio
      </Link>
      {/* <div> */}
      <Link to="/services" activeStyle={{ color: "#ed1c24" }}>
        Services
      </Link>
      {/* <div className="dropdown-menu">
          <Link to="/services/branding-videos">Branding Videos</Link>
          <Link to="/services/product-videos">Product Videos</Link>
          <Link to="/services/web-videos">Web Videos</Link>
          <Link to="/services/commercial-videos">Commercials</Link>
          <Link to="/services/testimonial-videos">Testimonial Videos</Link>
          <Link to="/services/training-videos">Training Videos</Link>
          <Link to="/services/event-videos">Live Event Videos</Link>
          <Link to="/services/motion-graphics">Motion Graphics</Link>
          <Link to="/services/sporting-videos">Sporting Videos</Link>
        </div> */}
      {/* </div>
      <div> */}
      <Link to="/media-production" activeStyle={{ color: "#ed1c24" }}>
        Process
      </Link>
      <Link to="/weddings" activeStyle={{ color: "#ed1c24" }}>
        Weddings
      </Link>
      {/* <div className="dropdown-menu">
          <Link to="/media-production/pre-production">Pre-Production</Link>
          <Link to="/media-production/production">Production</Link>
          <Link to="/media-production/post-production">Post-Production</Link>
          <Link to="/media-production/distribution">Distribution</Link>
        </div> */}
      {/* </div> */}
      <Link to="/about" activeStyle={{ color: "#ed1c24" }}>
        About
      </Link>
      <Link to="contact" activeStyle={{ color: "#ed1c24" }}>
        Contact
      </Link>
      <a
        className="social"
        href="https://www.instagram.com/inframe_media_prod/?hl=en"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a
        className="social"
        href="https://www.facebook.com/inframemediaproductions"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faFacebookSquare} />
      </a>
      <a
        className="social"
        href="https://au.linkedin.com/company/inframe-media-productions"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      {/* <Link to="careers" activeStyle={{ color: "#ed1c24" }}>
        Jobs
      </Link> */}
    </StyledNav>
  )
}
const StyledNav = styled.div`
  display: none;
  /* max-width: 700px; */
  font-family: Helvetica;
  text-transform: uppercase;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
  color: lightgrey;
  font-size: 0.8em;
  .dropdown-link {
    position: relative;
    &:hover {
      .dropdown-menu {
        display: flex;
        opacity: 1;
        max-height: 400px;
      }
    }
  }
  .dropdown-menu {
    display: flex;
    min-height: 0;
    overflow: hidden;
    max-height: 0px;
    top: 45px;
    left: 20px;
    border-left: 3px solid #ed1c24;

    ${"" /* border-bottom-left-radius: 5px; */}
    flex-direction: column;
    position: absolute;
    width: 200px;
    justify-content: space-around;
    align-items: flex-start;
    background: #020202;
    padding: 1em 0.5em;
    opacity: 0;
    transition: all 0.5s ease-in-out;
    z-index: 0;
    a {
      font-size: 14px;
      margin: 0;
      padding: 0.5em;
    }
  }
  a {
    color: white;
    text-decoration: none;
    margin-right: 2em;
    transition: all 0.2s ease;
    &:hover {
      color: #ed1c24;
    }
  }

  .social {
    font-size: 18px;
    margin-left: 1em;
    margin-left: 0px;
  }
  @media only screen and (min-width: 768px) {
    display: flex;
  }
`

export default NavLinks
