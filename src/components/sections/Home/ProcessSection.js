import React, { useState } from "react"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"
import Button from "../../Button"
import Container from "../../Container"
import DashedLine from "../../DashedLine"
import LeftRazor from "../../LeftRazor"
import { Link } from "gatsby"

const ProcessSection = () => {
  const processes = {
    "pre-production": {
      type: "pre-production",
      content: `It’s our chance to ask and listen and really begin to learn what your story, audience,
      goals, and where the challenges are. This phase includes conversations, your
      market, your products, your people. Through this research we find and ask for
      inspirational material that may influence the overall concept of the visual product.
      These can be links to existing commercials, videos, films. It can even be books.
      Anything that will inform the style and tone of the piece. This is also the time for us to
      evaluate what your competition is doing, to make sure that we differentiate your
      brand from theirs.`,
    },
    "post-production": {
      type: "post-production",
      content: `Some say that this is where the story really comes together. Even if you’ve filmed to
      a well-planned script or gotten the exact answers to interview questions you wanted,
      things often change and get better during the edit phase. Beyond the story, this is
      where the pace and the tone are often defined. It’s an exciting phase that leads to
      many creative opportunities around music, style, structure, composition, etc.
      This is where you’ll start to feel what the audience will feel.`,
    },
    production: {
      type: "production",
      content: `At InFrame Media Productions, it’s not only about delivering eye-catching results.
      We would like you to enjoy the process along the way. We strive to make your
      experience comfortable and exciting.
      For those who are just starting and might be unsure about their brand or business
      creative direction, InFrame Media Productions is unique in that we also offer creative
      direction.
      Typically, you work with a creative agency for your brand direction, and a video
      production company to actually produce videos or photos.
      We can do both—and we do them both well.`,
    },
    distribution: {
      type: "distribution",
      content: `The ideal platform for your online distribution will change depending on the length
      and content of your video, and your own branding strategies. Videos on Facebook
      and Twitter will reach a different audience than those on LinkedIn or Google+. When
      you put your video out into the world, we’ll help you keep in mind the social networks
      that work the best for your story and provide recommendations for the type of
      tracking tools and management services that will help you see how far your reach
      goes.`,
    },
  }

  const [selectedProcess, setSelectedProcess] = useState(
    processes["pre-production"]
  )

  const handleProcessChange = e => {
    setSelectedProcess(processes[e.target.value])
    // console.log(processes[e.target.value])
  }
  return (
    <StyledSection>
      <Container>
        <h2>
          Our Production <span>Process</span>
        </h2>
        <div className="process-wrapper">
          <div className="process-controls">
            <div className="process-button">
              <button
                className={
                  selectedProcess.type === "pre-production"
                    ? "active"
                    : undefined
                }
                value="pre-production"
                onClick={e => handleProcessChange(e)}
              >
                Pre-Production
              </button>
              {selectedProcess.type === "pre-production" ? (
                <DashedLine />
              ) : undefined}
            </div>

            <div className="process-button">
              <button
                className={
                  selectedProcess.type === "production" ? "active" : undefined
                }
                value="production"
                onClick={e => handleProcessChange(e)}
              >
                Production
              </button>
              {selectedProcess.type === "production" ? (
                <DashedLine />
              ) : undefined}
            </div>
            <div className="process-button">
              <button
                className={
                  selectedProcess.type === "post-production"
                    ? "active"
                    : undefined
                }
                value="post-production"
                onClick={e => handleProcessChange(e)}
              >
                Post-Production
              </button>
              {selectedProcess.type === "post-production" ? (
                <DashedLine />
              ) : undefined}
            </div>
            <div className="process-button">
              <button
                className={
                  selectedProcess.type === "distribution" ? "active" : undefined
                }
                value="distribution"
                onClick={e => handleProcessChange(e)}
              >
                Distribution
              </button>
              {selectedProcess.type === "distribution" ? (
                <DashedLine />
              ) : undefined}
            </div>
          </div>
          <div className="process-content">
            <h3>{selectedProcess.type.toUpperCase()}</h3>
            <p>{selectedProcess.content}</p>
            <Link to="/media-production">
              Read More <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
      </Container>
      {/* <Button text={`Read more`} /> */}
      {/* <LeftRazor text="Our Production Process" linkTo="/" /> */}
    </StyledSection>
  )
}

const StyledSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  background-color: #020202;
  width: 100%;
  color: white;
  ${"" /* padding-bottom: 100px; */}
  font-family: Helvetica;
  h3 {
    font-family: Helvetica;
  }
  h2 {
    padding-top: 150px;
    margin-bottom: 50px;
    font-family: Helvetica;
    font-weight: 300;
    font-size: 2.5em;
    text-align: center;

    span {
      color: #ed1c24;
    }
  }
  .process-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .process-controls {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 50px;
      .process-button {
        position: relative;

        button {
          border: none;
          font-size: 1em;
          color: white;
          background: #020202;
          position: relative;
          z-index: 20;
          font-family: Helvetica;
          text-align: left;
          padding: 0.3em;
          ${"" /* border-left: 3px outset grey; */}
          transition: all 0.2s linear;
          margin: 5px;
          cursor: pointer;
          &:hover {
            color: #ed1c24;
          }
        }
        .active {
          color: #ed1c24;
          ${"" /* border-left: 3px groove #ed1c24; */}
        }
      }
      svg {
        display: block;
        margin: 5px;
      }
    }

    .process-content {
      position: relative;
      z-index: 20;
      width: 100%;
      color: black;
      padding: 2em;
      ${"" /* border: solid 2px white; */}
      ${"" /* border-left: solid 3px #ed1c24; */}
      background: #ed1c24;
      a {
        display: block;

        color: black;
        font-weight: 900;
        text-decoration: none;
        text-align: left;
      }
      p {
        position: relative;
        z-index: 2;
      }
    }
  }
  @media only screen and (min-width: 768px) {
    .process-wrapper {
      flex-direction: row;
      .process-controls {
        display: block;
        width: 30%;
        margin-bottom: 0;
        .process-button {
          button {
            font-size: 1.5em;
          }
        }
      }
      .process-content {
        width: 70%;
      }
    }
  }
`

export default ProcessSection
