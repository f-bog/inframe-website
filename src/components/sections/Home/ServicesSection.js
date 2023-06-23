import React from "react"

import styled from "styled-components"

import Button from "../../Button"

const ServicesSection = () => {
  return (
    <StyledSection>
      <div className="black-content">
        <div className="width-container">
          <h2>
            Gold Coast <br />
            <span>Media Production</span> Services
          </h2>
          <p>
            InFrame Media Productions is a full service Gold Coast based video
            production and creative services company. But really…we help your
            stories. It’s people creativity and passion, that fuels our team to
            deliver a product that truly and uniquely made for you.
          </p>
          <p>
            We’ve been doing what we love locally since 2015. The tools of our
            trade are curiosity, creativity, attentiveness, and partnership. We
            specialize in creating media that connects with your audience in
            powerful ways.
          </p>
          <p>
            We want you to think of our team as your own in-house video
            production. Whether you need a web commercial, event video,
            corporate media communications, employee stories, testimonial,
            customer stories, instructional video, motion graphics or live event
            coverage, even social media content, InFrame Media will work with
            you to develop and produce engaging content that successfully
            connects with your audience.
          </p>
          <p>Getting your idea in to the frame.</p>
          <Button linkTo="/services" text="Our Services" />
        </div>
      </div>
      <div className="red-content">
        <div className="width-container">
          <p>
            Transfer what's
            <br /> on your mind, into
            <br /> the frame.
          </p>
        </div>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0;
  border: none;
  font-family: Helvetica;
  background: #ed1c24;
  .width-container {
    width: 90%;
  }
  .black-content {
    padding-top: 150px;
    padding-bottom: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 70vh;
    background: #020202;
    ul {
      margin-bottom: 3em;
    }
    h2 {
      font-weight: 300;
      font-size: 2em;
      span {
        color: #ed1c24;
      }
    }
    hr {
      background: #ed1c24;
    }
  }
  .red-content {
    display: flex;

    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50vh;
    background: #ed1c24;
    text-transform: uppercase;
    p {
      line-height: 1em;
      font-size: 2.5em;
      color: black;
      padding: 0;
      margin: 0;
      font-weight: 900;
    }
  }
  @media only screen and (min-width: 768px) {
    flex-direction: row;

    .black-content,
    .red-content {
      width: 50%;
    }
    .width-container {
      max-width: 580px;
    }
    .black-content {
      align-items: flex-end;
      justify-content: center;
      padding-right: 2em;
      hr {
        width: 80%;
      }
    }

    .red-content {
      position: relative;
      top: 0;
      height: 500px;
      p {
        position: absolute;
        transform: rotate(90deg);
        z-index: 20;
        margin-top: 150px;
      }
      &:after {
        content: "";
        position: absolute;
        bottom: -120%;
        display: block;
        background: #ed1c24;
        width: 100%;
        height: 300px;
        transform: skewY(10deg);
        z-index: 15;
      }
    }
  }
`

export default ServicesSection
