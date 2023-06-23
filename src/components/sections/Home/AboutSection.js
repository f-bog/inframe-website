import React from "react"
import styled from "styled-components"
import Button from "../../Button"
import Container from "../../Container"
const AboutSection = () => {
  return (
    <StyledSection>
      <Container>
        <div className="content">
          <div className="kicker" role="doc-subtitle">
            A full service video production company.
          </div>
          <h2>
            <span>Who</span> we are and <span>why</span> we love what we do
          </h2>

          <p>
            InFrame Media Productions is a highly sought-after multimedia
            production, as its reputation for high level professional media
            services remains unsurpassed. Kim Rafael Llige earned a bachelor’s
            degree in digital film Making. Since then, he has over 12 years’
            experience in different aspects of video production. Developing
            skills like, camera operation, video editing, segment producing and
            event directing. Following in his father’s footsteps, Kim Rafael
            Llige has opened InFrame Media Productions’ first studio on the Gold
            Coast in Australia.
          </p>
          <Button
            className="button"
            text="Read More"
            linkTo="/about"
            center="center"
          />
        </div>
      </Container>
    </StyledSection>
  )
}
const StyledSection = styled.section`
  width: 100%;
  position: relative;
  background: #020202;
  min-height: 70vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Helvetica;
  .content {
    padding-top: 3em;
    position: relative;
    z-index: 17;
  }
  &:after {
    content: "";
    position: absolute;
    bottom: -70px;
    display: block;
    background: #020202;
    width: 100%;
    height: 200px;
    transform: skewY(3deg);
    z-index: 15;
  }
  .button {
    margin: 0 auto;
    text-align: center;
  }

  .kicker {
    font-weight: 300;

    color: #ed1c24;
    font-size: 1em;
    font-family: Helvetica;
  }

  h2 {
    font-weight: 300;
    font-size: 2.5em;

    span {
      color: #ed1c24;
    }
  }
`
export default AboutSection
