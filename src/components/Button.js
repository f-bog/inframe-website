import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
const Button = ({ text, linkTo, center }) => {
  return (
    <StyledButton center={center}>
      <Link to={linkTo}>{text}</Link>
    </StyledButton>
  )
}

const StyledButton = styled.div`
  margin: ${props => props.center && "10px auto"};
  width: 150px;
  height: 50px;
  margin-top: 2em;
  border: 2px solid white;
  font-family: helvetica;
  font-size: 18px;
  font-weight: 300;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  display: flex;
  align-items: center;
  background: #020202;
  color: white;
  justify-content: center;
  position: relative;
  z-index: 20;
  transition: 0.3s ease-in-out;
  a {
    text-decoration: none;
    color: white;
    transition: 0.3s ease-in-out;
  }

  &:before,
  &:after {
    position: absolute;
    background: #020202;
    z-index: -1;
    transition: 0.3s width, 0.3s height;
    content: "";
  }

  &:before {
    width: 0;
  }

  &:after {
    height: 0px;
  }

  .noselect {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  &:hover:before {
    width: 0px;
    height: 50px;
    width: 130px;
  }

  &:hover:after {
    height: 0px;
    width: 150px;
    height: 30px;
  }

  &:hover {
    color: #ed1c24;
    border: 2px solid #ed1c24;
    background: #020202;
    a {
      color: #ed1c24;
    }
  }
`
export default Button
