import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import Button from "../../Button"
import Container from "../../Container"
const PortfolioSection = () => {
  return (
    <StyledSection>
      <Container>
        <div className="content">
          <h2>
            Recent <span>Projects</span>
          </h2>

          <div className="projects">
            <div className="videos">
              <div className="video" />
              <div className="video" />
              <div className="video" />
            </div>
            <div className="images">
              <StaticImage
                src="../../../images/ProductionSet.png"
                quality={100}
                width={1000}
                alt="Media production set"
                formats={["AUTO", "WEBP", "AVIF"]}
              />
              <StaticImage
                src="../../../images/ProductionSet.png"
                quality={100}
                width={1000}
                alt="Media production set"
                formats={["AUTO", "WEBP", "AVIF"]}
              />
              <StaticImage
                src="../../../images/ProductionSet.png"
                quality={100}
                width={1000}
                alt="Media production set"
                formats={["AUTO", "WEBP", "AVIF"]}
              />
              <StaticImage
                src="../../../images/ProductionSet.png"
                quality={100}
                width={1000}
                alt="Media production set"
                formats={["AUTO", "WEBP", "AVIF"]}
              />
            </div>
          </div>
          <Button text="Our Portfolio" linkTo="/" center="center" />
        </div>
      </Container>
    </StyledSection>
  )
}
const StyledSection = styled.section`
  position: relative;
  width: 100%;
  margin: 200px auto 6em auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 600px;

  &:after {
    content: "";
    position: absolute;
    bottom: -200px;
    display: block;
    background: #020202;
    width: 100%;
    height: 200px;
    transform: skewY(-5deg);
    z-index: 15;
  }
  .content {
    display: block;
    position: relative;
    z-index: 20;
  }
  .projects {
    position: relative;

    margin: 0 auto;
    text-align: center;
    .gatsby-image-wrapper {
      margin: 1em;
      width: 300px;
      height: 200px;
    }
    .videos {
      margin-top: 2em;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      .video {
        background: #333333;
        width: 300px;
        height: 200px;
        margin: 1em;
      }
    }
  }
  hr {
    margin: 0 auto;
    width: 70%;
    background: #ed1c24;
  }
  h2 {
    text-align: center;
    font-size: 2.5em;
    font-weight: 300;
    span {
      color: #ed1c24;
    }
  }
`
export default PortfolioSection
