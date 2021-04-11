import React from "react"
import styled, { keyframes } from "styled-components"
// import animated from "react-spring"
import Button from "../../Button"
import Container from "../../Container"
import RightRazor from "../../RightRazor"
import background from "../../../images/ProductionSet.png"
const HomeHero = () => {
  return (
    <StyledSection>
      <Container>
        <div className="intro-content">
          <h1>
            Gold Coast <br />
            Media <span>Production.</span>
          </h1>
          <p>
            InFrame Media Productions is a full service
            <br /> video production company and creative agency.{" "}
          </p>
          <Button linkTo="/" text="Get a Quote" />
        </div>
      </Container>
      {/* <img className="home-razor" src={HomeRazor} /> */}
      <div className="home-razor" />
      <RightRazor text="Recent Projects" linkTo="/" />
    </StyledSection>
  )
}

const razorAnimation = keyframes`
  0% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }

  100% {
    clip-path: polygon(0 0, 82% 0, 45% 100%, 0% 100%);
  }
`

const StyledSection = styled.section`
  position: relative;
  width: 100%;
  margin: 0 auto;
  height: 90vh;
  display: flex;
  align-items: center;
  font-family: Helvetica;
  background-image: url(${background});
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  .home-razor {
    position: absolute;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 50%);
    ${"" /* clip-path: polygon(0 0, 82% 0, 45% 100%, 0% 100%); */}
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    height: 100%;
    width: 100%;
    z-index: ;
  }

  .intro-content {
    position: relative;
    z-index: 100;
    h1 {
      font-family: Helvetica;
      font-weight: 300;
      font-size: 2.5em;
      span {
        color: #ed1c24;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .home-razor {
      clip-path: polygon(0 0, 82% 0, 45% 100%, 0% 100%);
      background: rgba(0, 0, 0, 70%);
      animation: 2s ${razorAnimation} linear;
    }
    .intro-content {
      h1 {
        font-size: 3.5em;
      }
    }
  }
`

export default HomeHero
