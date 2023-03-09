import { Link } from 'react-router-dom'
import './header.scss'
import { StyledLink } from '../../pages/utils/style/Atoms'
import DarkLogo from '../../assets/dark-logo.png'



function Header() {
  return (
    <nav-container className = {'nav-container'}>
      <Link to="/">
        <home-logo className = {'home-logo '} src={DarkLogo} />
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