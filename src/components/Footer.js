import {
  faFacebookSquare,
  faInstagram,
  faLinkedin,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"

import Container from "./Container"
const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <div className="footer-wrapper">
          <div className="footer-column-1">
            <StaticImage
              src="../images/inframe-logo.png"
              width={300}
              quality={100}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="InFrame Logo"
            />
            <div className="social-links">
              <a href="/">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="/">
                <FontAwesomeIcon icon={faFacebookSquare} />
              </a>
              <a href="/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              {/* <a href="/">
                <FontAwesomeIcon icon={faTwitterSquare} />
              </a> */}
            </div>
            <p>
              Gold Coast Queensland <br />
              Video Production and Creative Services.
            </p>
          </div>
          <div className="footer-column-2">
            <div className="nav-links">
              <h3>Navigation</h3>
              <nav>
                <Link to="/">Home</Link>
                <Link to="/">Portfolio</Link>
                <Link to="/">Services</Link>
                <Link to="/">About</Link>
                <Link to="/">Contact</Link>
                <Link to="/">Jobs</Link>
              </nav>
            </div>
            <div className="nav-links">
              <h3>Our Process</h3>
              <nav>
                <Link to="/">Pre-Production</Link>
                <Link to="/">Production</Link>
                <Link to="/">Post-Production</Link>
                <Link to="/">Distribution</Link>
              </nav>
            </div>
          </div>
        </div>
      </Container>
      <div className="credits">
        © {new Date().getFullYear()} - InFrame Media Productions
        {` `}
      </div>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  width: 100%;
  min-height: 500px;
  background: #020202;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: Helvetica;
  h3 {
    border-left: solid 2px #ed1c24;
    padding-left: 10px;
    font-weight: 300;
    text-transform: uppercase;
  }
  .footer-wrapper {
    min-height: 400px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 2em;
    align-items: center;
    padding-bottom: 2em;
    .footer-column-2 {
      max-width: 400px;
      width: 90%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      a {
        text-decoration: none;
        margin-bottom: 5px;
        color: white;
      }
    }
    .footer-column-1 {
      text-align: center;
      p {
        margin-top: 1em;
      }
    }
  }
  .nav-links {
    font-size: 1em;
    text-align: left;
    a {
      display: block;
      color: white;
    }
  }
  .social-links {
    font-size: 2em;
    a {
      display: inline-block;
      margin: 5px;
      color: white;
      transition: all 0.2s ease;
      &:hover {
        color: #ed1c24;
        transform: scale(1.2);
      }
    }
  }
  .credits {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    height: 40px;
    padding: 0px;
    width: 100%;
    color: #555555;
    background: #020202;
    text-align: center;
  }
  @media only screen and (max-width: 800px) {
    .footer-wrapper {
      justify-content: space-around;
      .footer-column-2 {
      }
    }
  }
`

export default Footer
