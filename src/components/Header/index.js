import { Link } from 'react-router-dom'
import styled from 'styled-components'


const StyledLink = styled(Link)`
    padding: 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    ${(props) =>
        props.$isFullLink &&
        `color: white; border-radius: 30px; background-color: #5843E4;`}
`



function Header() {
  return (
    <div>
      <StyledLink to="/">Accueil</StyledLink>
     
      <StyledLink to="/freelances">Users</StyledLink>
      <StyledLink to="/survey/1" $isFullLink>Faire le test</StyledLink>
    </div>
  )
}

export default Header