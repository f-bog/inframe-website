import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import razor from "../images/red-razor-left.png"
import Container from "./Container"
const LeftRazor = ({ text, linkTo }) => {
  return (
    <StyledRazor>
      <Container>
        <Link style={{ textAlign: "left" }} to={linkTo}>
          {text}{" "}
          <FontAwesomeIcon className="arrow" icon={faArrowAltCircleRight} />
        </Link>
      </Container>
    </StyledRazor>
  )
}

const StyledRazor = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;

  justify-content: flex-end;
  left: 0;
  bottom: 0;
  height: 200px;
  width: 100%;
  background-image: url(${razor});
  background-repeat: no-repeat;
  background-position: right;
  background-size: 100% 100%;

  a {
    display: block;
    text-align: right;
    font-size: 1.2em;
    color: white;
    text-decoration: none;
    margin-bottom: 2.5em;
    .arrow {
      transition: transform 0.2s ease-out;
    }
    &:hover {
      .arrow {
        transform: translateX(10px);
      }
    }
  }

  @media only screen and (min-width: 768px) {
  }
`

export default LeftRazor
