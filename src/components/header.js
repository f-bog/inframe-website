import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import HamburgerIcon from "./navigation/mobile/HamburgerIcon"
import NavLinks from "./navigation/NavLinks"
const Header = ({ siteTitle }) => (
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
      <HamburgerIcon />
      <NavLinks />
    </div>
  </StyledHeader>
)

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
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
