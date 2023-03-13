import { Link } from 'react-router-dom'
import './header.scss'
import { StyledLink } from '../../pages/utils/style/Atoms'
import DarkLogo from '../../assets/twitter (1).png'
//import styled from 'styled-components'

/*const HomeLogo = styled.img`
  height: 70px;
`*/

function Header() {
  return (
    <nav-container className = 'nav-container'>
      <Link to="/">
       <img homeLogo className = 'home-logo' src={DarkLogo} alt="twitter"/>
      </Link>
      <div>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/freelances">Profils</StyledLink>
        <StyledLink to="/survey/1" $isFullLink>
          Faire le test
        </StyledLink>
      </div>
    </nav-container>
  )
}

export default Header