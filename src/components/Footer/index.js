//import { Link } from 'react-router-dom';//<Link to="/">Retour à l'Accueil</Link>


import  './footer.css';
import '../../pages/utils/style/colors.scss'
import { ThemeContext} from '../../pages/utils/context'
import { useContext } from 'react'


function Footer() {
const { toggleTheme, theme} = useContext(ThemeContext)

return (
    <footer className= 'footer-container'>
      
      <nightModeButton className = 'night-mode-button' onClick={()=>toggleTheme()}
      >Changer de mode : {theme === 'light' ? '☀️' : '🌙'}</nightModeButton>
    </footer>
  )
}

export default Footer