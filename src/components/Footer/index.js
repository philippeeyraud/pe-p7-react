import { useContext } from 'react'
import { ThemeContext } from '../../pages/utils/context'
import colors from '../../pages/utils/style/colors'
//import  './footer.css';
//import '../../pages/utils/style/colors.scss'
import styled from 'styled-components'


const NightModeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${colors.secondary};
`
function Footer() {
const { toggleTheme, theme} = useContext(ThemeContext)


return (
    <footer className= 'footer-container'>
     
      <NightModeButton onClick={() =>toggleTheme()}>
        Changer de mode :{theme === 'light' ? '☀️' : '🌙'}</NightModeButton>
      
    </footer >
  )
}

export default Footer