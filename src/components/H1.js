import styled from "styled-components"

const H1 = styled.h1`
  font-size: ${props => (props.isBig ? "5em" : "3em")};
  margin: 0;
  text-align: center;
`

export default H1
