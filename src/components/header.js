import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import HamburgerIcon from "./navigation/mobile/HamburgerIcon"
import NavLinks from "./navigation/NavLinks"
import NavDrawer from "./navigation/mobile/NavDrawer"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookSquare,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
const Header = ({ siteTitle }) => {
  const [toggleOpen, setToggleOpen] = useState(false)

  const handleToggle = () => {
    setToggleOpen(!toggleOpen)
    console.log(toggleOpen)
  }
  return (
    <>
      <StyledHeader>
        <div className="wrapper">
          <Link to="/">
            <StaticImage
              src="../images/inframe-logo.png"
              width={150}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              style={{ width: "150px" }}
              alt="InFrame Logo"
            />
          </Link>
          <div className="social-links">
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
          </div>
          <HamburgerIcon handleToggle={handleToggle} />
          <NavLinks />
        </div>
      </StyledHeader>
      <NavDrawer toggleOpen={toggleOpen} />
    </>
  )
}

const StyledHeader = styled.header`
  position: fixed;
  left: 0px;
  top: 0px;
  height: 70px;
  width: 100%;
  z-index: 999;
  background: rgba(0, 0, 0, 0.95);
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    height: 100%;
    width: 90%;
    max-width: 1160px;
  }

  .social-links {
    @media only screen and (min-width: 768px) {
      display: none;
    }
  }
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
