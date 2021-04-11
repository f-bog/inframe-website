import React from "react"
import styled from "styled-components"

const HeroSection = ({ children, title }) => {
  return (
    <StyledContainer>
      {/* Hero Image goes here */}
      {children}
    </StyledContainer>
  )
}
const StyledContainer = styled.div`
  margin-top: 70px;
  width: 100%;
  position: relative;

  ${
    "" /* &:after {
    content: "";
    left: 0;
    top: 0;
    background-color: rgba(45, 0, 0, 70%);
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 40;
    clip-path: polygon(0 0, 67% 0, 45% 100%, 0% 100%);
  } */
  }
`

export default HeroSection
