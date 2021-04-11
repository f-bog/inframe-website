import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
const NavDrawer = ({ toggleOpen }) => {
  return (
    <StyledDrawer toggleOpen={toggleOpen}>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/">Portfolio</Link>
        <Link to="/services">Services</Link>
        <Link to="/media-production">Process</Link>
        <Link to="/about">About</Link>
        <Link to="contact">Contact</Link>
        <Link to="/jobs">Jobs</Link>
      </nav>
    </StyledDrawer>
  )
}

const StyledDrawer = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 1);
  height: 100vh;
  width: 100%;
  top: 60px;
  right: 0;
  z-index: 1000;
  font-family: Helvetica;
  transition: transform 0.3s ease;
  transform: ${props =>
    !props.toggleOpen ? "translateX(100%)" : "translateX(0%)"};
  nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding-right: 2em;
    text-align: right;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    row-gap: 35px;
    z-index: 1001;
    a {
      color: white;
      text-decoration: none;
      font-size: 2em;
    }
  }
  @media only screen and (min-width: 768px) {
    display: none;
  }
`

export default NavDrawer
