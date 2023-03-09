//import styled from 'styled-components'
//import colors from '../utils/style/colors'
//import { StyledLink } from '../utils/style/Atoms'
import logo from '../../assets/logo.svg'

/*const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const HomeContainer = styled.div`
  margin: 30px;
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
`*/

function Home() {
  return (
    <home-wrapper className = 'home-wrapper '>
      <home-container className ='home-container'>
        <left-col className = 'left-col'>
          <styled-title className = 'styled-title'>
            Repérez vos besoins, on s’occupe du reste, avec les meilleurs
            talents
          </styled-title>
          <styled-link className = 'style-link' to="/survey/1">
            Faire le test
          </styled-link>
        </left-col>
        <illustration className ='illustration' src={logo} />
      </home-container>
    </home-wrapper>
  )
}

export default Home