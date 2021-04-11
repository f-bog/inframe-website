import React from "react"
import styled, { keyframes } from "styled-components"
const DashedLine = () => {
  return (
    <StyledDashedLine>
      <div className="square"></div>
      <div className="square"></div>
      <div className="square"></div>
      <div className="square"></div>
      <div className="square"></div>
      <div className="square"></div>
      <div className="square"></div>
      <div className="square"></div>
      <div className="square"></div>
      <div className="square"></div>
      <div className="square"></div>
    </StyledDashedLine>
  )
}

const lineAnimation = keyframes`
  0% {
    transform: translateX(0%)
  }
  100% {
    transform: translateX(1000%)
  }
 

`
const StyledDashedLine = styled.div`
  position: absolute;
  display: none;
  flex-direction: column;
  top: 10px;
  z-index: 10;

  .square {
    border-radius: 100%;
    height: 5px;
    width: 5px;
    display: none;
    margin: 10px;
    background: #ed1c24;
  }
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    .square {
      display: block;
      animation: ${lineAnimation} 0.3s linear infinite;
    }
  }
`

export default DashedLine
