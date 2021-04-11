import Hamburger from "hamburger-react"
import React from "react"
import styled from "styled-components"
const HamburgerIcon = () => {
  return (
    <StyledHamburger>
      <Hamburger />
    </StyledHamburger>
  )
}

const StyledHamburger = styled.div`
  @media only screen and (min-width: 768px) {
    display: none;
  }
`

export default HamburgerIcon
