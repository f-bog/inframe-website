import React from "react"
import styled from "styled-components"
const ContentSection = ({ children, center, backgroundcolor }) => {
  return (
    <StyledSection center={center} backgroundcolor={backgroundcolor}>
      <div className="content-wrapper">{children}</div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  display: block;
  background: #020202;
  width: 100%;
  position: relative;
  z-index: 50;
  ${"" /* font-family: Helvetica;
  font-weight: 300; */}
  .content-wrapper {
    margin: 70px auto;
    width: 90%;
    max-width: 1160px;
    height: 100%;
    font-family: Helvetica;
    text-align: ${props => (props.center === "center" ? "center" : "left")};
    span {
      color: rgb(237, 28, 36);
    }
    h1 {
      font-weight: 400;
      font-family: Helvetica;
    }
    hr {
      background-color: rgb(237, 28, 36);
      height: 3px;
      width: 180px;

      margin: 1.5em ${props => (props.center === "center" ? "auto" : "0")};
    }
  }
`

export default ContentSection
