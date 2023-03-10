//import styled from 'styled-components'
//import colors from '../utils/style/colors'
//import { StyledLink } from '../utils/style/Atoms'
import logo from '../../assets/logo.svg'
import  './home.scss';


/*const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const HomeContainer = styled.div`
  margin :30px;
  background-color: ${colors.backgroundLight};
  padding: 60px 90px;
  display: flex;
  flex-direction: row;
  max-width: 1200px;
`

  const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  ${StyledLink} {
    max-width: 250px;
  }
`


const StyledTitle = styled.h2`
  padding-bottom: 30px;
  max-width: 280px;
  line-height: 50px;
`

const Illustration = styled.img`
  flex: 1;
`
*/
function Home() {
  return (
    <homeWrapper className='home-wrapper' >
      <homeContainer className ='homme-container'>
        <leftCol className= 'left-col' >
          <styledTitle className = 'style-title' >
            Repérez vos besoins, on s’occupe du reste, avec les meilleurs
            talents
          </styledTitle>
          <styled-link className = 'style-link' to="/survey/1">
            Faire le test
          </styled-link>
        </leftCol>
        <img illustration src={logo} alt='logo'/>
      </homeContainer>
    </homeWrapper>
  )
}

export default Home