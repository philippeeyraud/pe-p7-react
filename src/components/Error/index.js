import '../../assets/styles/_variables.scss'
//import colors from '../../pages/utils/style/colors'
import ErrorIllustration from '../../assets/logo.svg'


/*const ErrorWrapper = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.backgroundLight};
  align-items: center;
`

const ErrorTitle = styled.h1`
  font-weight: 300;
`

const ErrorSubtitle = styled.h2`
  font-weight: 300;
  color: ${colors.secondary};
`

const Illustration = styled.img`
  max-width: 800px;
`*/

function Error() {
  return (
    <errorWrapper className = 'error-wrapper'>
      <errorTitle className = 'error-title'>Oups...</errorTitle>
      <illustration className ='illustration' src={ErrorIllustration} />
      <errorSubtitle  className = 'errorSubtitle'>
        Il semblerait que la page que vous cherchez n’existe pas
      </errorSubtitle>
    </errorWrapper>
  )
}

export default Error