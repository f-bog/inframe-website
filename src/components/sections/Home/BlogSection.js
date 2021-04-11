import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import url from "../../../images/inframe-media-production-staff.png"
import Container from "../../Container"
const BlogSection = () => {
  return (
    <StyledSection>
      <div className="overlay">
        <Container>
          <Link to="/">
            OUR BLOG{" "}
            <FontAwesomeIcon className="arrow" icon={faArrowCircleRight} />
          </Link>
        </Container>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  width: 100%;
  height: 400px;
  background-image: url(${url});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 10% 20%;
  .overlay {
    width: 100%;
    height: 100%;
    background: rgba(237, 28, 36, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      font-family: Helvetica;
      text-decoration: none;
      font-size: 2em;
      color: white;
      .arrow {
        transition: all 0.2s linear;
      }
      &:hover {
        .arrow {
          transform: translateX(15px);
        }
      }
    }
  }
  @media only screen and (min-width: 768px) {
    .overlay {
      background: rgba(237, 28, 36, 0.8);
      clip-path: polygon(0 0, 66% 0, 48% 100%, 0% 100%);
    }
  }
`

export default BlogSection
