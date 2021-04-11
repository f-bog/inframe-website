import React from "react"
import styled from "styled-components"
const TwoColumnBlock = ({ children }) => {
  return <StyledBlock>{children}</StyledBlock>
}

const StyledBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  width: 90%;
  margin: 0 auto;
  align-items: center;
`
export default TwoColumnBlock
