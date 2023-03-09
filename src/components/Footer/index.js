import { Link } from 'react-router-dom';



import  './footer.css';
import '../../pages/utils/style/colors.scss'
import { ThemeContext} from '../../pages/utils/context'
import { useContext } from 'react'


function Footer() {
const { toggleTheme, theme} = useContext(ThemeContext)


return (
    <footer className= 'footer-container'>
      <Link to="/">Retour à l'Accueil</Link>
      <night-mode-button className = 'night-mode-button' onClick={() =>toggleTheme()}>
        Changer de mode :{theme === 'light' ? '☀️' : '🌙'}</night-mode-button>
    </footer >
  )
}

export default Footer