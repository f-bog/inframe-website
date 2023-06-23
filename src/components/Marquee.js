import React from "react"
import styled, { keyframes } from "styled-components"

const MarqueeContainer = styled.div`
  overflow: hidden;
  white-space: nowrap;
`

const scrollAnimation = keyframes`
  0% { transform: translateX(50%); }
  100% { transform: translateX(-100%); }
`

const MarqueeContent = styled.div`
  display: inline-block;
  color: white;
  animation: ${scrollAnimation} 50s linear infinite;
`

const Marquee = ({ children }) => {
  return (
    <MarqueeContainer>
      <MarqueeContent>{children}</MarqueeContent>
    </MarqueeContainer>
  )
}

export default Marquee
