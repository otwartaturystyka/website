import styled from "styled-components"

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 200px;
  height: 40px;
  border-radius: 50px;
  border: 2px solid ${props => props.theme.colors.primaryDark};
  color: ${props => props.theme.colors.primaryDark};
  font-size: 1em;
  font-weight: 800;
  transition: color, background-color 0.3s ease;

  ${props => props.theme.media.desktop} {
    background: ${props => props.theme.colors.white};
  }

  :hover {
    color: white;
    background-color: ${props => props.theme.colors.primaryDark};
  }
`

export default Button
