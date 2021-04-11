import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useState } from "react"
import styled, { keyframes } from "styled-components"
import Container from "../../Container"
import LeftRazor from "../../LeftRazor"
import { useSpring, animated } from "react-spring"

const TestimonialSection = () => {
  const testimonials = [
    {
      review: `Meong meogre meow meo. Meong muwaa' njäu nyā meong miaŭ njäu. Muwaa' nyā mňau ngeung miyāʾūṉ miauw muning miyāʾūṉ miao. Mjau meow miauw muning mjau meow miauw mjau miav miao. Miao nyā miaŭ meow. Meo nyav meogre muning ngiyaw mi'au mi'au. Mjau mjau niaou mjau myām̥ō nyav. Miao nyā ya-ong miaŭ myau. Nyav miao ya-ong miyav meo miav. Ya-ong muning mao miyav myau miyav.`,
      author: "Steve Jobs",
    },
    {
      review: `“Studio B, That band of amazing misfits. We’ve produced literally hundreds of stratospherically successful motion graphics and live action videos together. From documentary films, demos and product tours, high end animated video, we even shot the first augmented reality music video together. They seriously kill every project we’ve ever thrown at them. It is an absolute pleasure working with such a talented and committed team. Their range and capabilities are extremely rare in a production agency. They have been a production partner of ours for years and will be for years to come.”
        `,
      author: "Joe Rogan",
    },
    {
      review: `Meong meogre meow meo. Meong muwaa' njäu nyā meong miaŭ njäu. Muwaa' nyā mňau ngeung miyāʾūṉ miauw muning miyāʾūṉ miao. Mjau meow miauw muning mjau meow miauw mjau miav miao. Miao nyā miaŭ meow. Meo nyav meogre muning ngiyaw mi'au mi'au. Mjau mjau niaou mjau myām̥ō nyav. Miao nyā ya-ong miaŭ myau. Nyav miao ya-ong miyav meo miav. Ya-ong muning mao miyav myau miyav. blah!`,
      author: "Elon Musk",
    },
  ]

  const [testimonial, setTestimonial] = useState(testimonials[0])
  const [currentIndex, setCurrentIndex] = useState(0)
  const handleDotClick = index => {
    setTestimonial(testimonials[index])
    setCurrentIndex(index)
  }

  const handleNextSlide = () => {
    // check to see what slide we are on.
    if (testimonials.slice(-1)[0].author === testimonial.author) {
      // reset if conditions are met
      setTestimonial(testimonials[0])
      setCurrentIndex(0)
    } else {
      setTestimonial(testimonials[currentIndex + 1])
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handlePreviousSlide = () => {
    // check to see what slide we are on.
    if (testimonials[0].author === testimonial.author) {
      // reset if conditions are met
      setTestimonial(testimonials[testimonials.length - 1])
      setCurrentIndex(testimonials.length - 1)
    } else {
      setTestimonial(testimonials[currentIndex - 1])
      setCurrentIndex(currentIndex - 1)
    }
  }
  return (
    <StyledSection>
      <Container>
        <h2>
          Our <span>Testimonials</span>
        </h2>
        <div className="wrapper">
          <div className="testimonial-box">
            <button className="previous-button">
              <FontAwesomeIcon
                icon={faChevronLeft}
                onClick={handlePreviousSlide}
              />
            </button>
            <div style={{ maxWidth: "90%" }}>
              <p>{testimonial.review}</p>
              <p>- {testimonial.author}</p>
            </div>
            <button className="next-button" onClick={handleNextSlide}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
          <div className="dots">
            {testimonials.map((dot, index) => (
              <button
                className={`dot ${
                  testimonials[index].review === testimonial.review && "active"
                }`}
                key={dot.review}
                onClick={() => handleDotClick(index)}
              ></button>
            ))}
          </div>
        </div>
      </Container>
      {/* <LeftRazor text="Our Production Process" linkTo="/" /> */}
    </StyledSection>
  )
}

const StyledSection = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    padding-top: 3em;
    font-size: 2.8em;
    text-align: center;
    font-family: Helvetica;
    font-weight: 300;
    span {
      color: #ed1c24;
    }
  }
  .dots {
    display: flex;
    justify-content: center;
    .dot {
      background: #666666;
      height: 10px;
      margin: 0.5em;
      padding: 5px;
      border: none;
      border-radius: 10px;
      width: 10px;
      cursor: pointer;
      transition: all 0.2s ease;
      &:hover {
        background: #ed1c24;
        transform: scale(1.2);
      }
    }
    .active {
      background: #ed1c24;
      transform: scale(1.2);
    }
  }
  .testimonial-box {
    font-family: Helvetica;
    justify-content: space-around;
    align-items: center;
    display: flex;
    margin: 0 auto;
    ${"" /* background: rgba(50, 50, 50); */}
    min-height: 300px;
    padding: 0px 1.5em;
    text-align: left;
    .next-button,
    .previous-button {
      color: #666666;
      background: none;
      border: none;
      cursor: pointer;
      font-size: 2em;
      transition: color 0.2s ease;
      &:hover {
        color: #ed1c24;
      }
    }
  }
`

export default TestimonialSection
