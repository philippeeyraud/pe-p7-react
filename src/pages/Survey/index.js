import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


import { Loader } from '../utils/style/Atoms'
import { SurveyContext } from '../utils/context'

/*const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const QuestionTitle = styled.h2`
  text-decoration: underline;
  text-decoration-color: ${colors.primary};
`

const QuestionContent = styled.span`
  margin: 30px;
`

const LinkWrapper = styled.div`
  padding-top: 30px;
  & a {
    color: black;
  }
  & a:first-of-type {
    margin-right: 20px;
  }
`

const ReplyBox =  box-shadow: ${(props) =>
    props.isSelected ? `0px 0px 0px 2px ${colors.primary} inset` : 'none'};

`

const ReplyWrapper = styled.div`
  display: flex;
  flex-direction: row;
`
*/



function Survey() {
  const { questionNumber } = useParams()
  const questionNumberInt = parseInt(questionNumber)
  const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
  const nextQuestionNumber = questionNumberInt + 1
  const [surveyData, setSurveyData] = useState({})
  const [isDataLoading, setDataLoading] = useState(false)
  const { saveAnswers, answers } = useContext(SurveyContext)
  const [error, setError] = useState(false)
  
  function saveReply(answer) {
    saveAnswers({ [questionNumber]: answer })
  }

  useEffect(() => {
    async function fetchSurvey() {
      setDataLoading(true)
      try {
        const response = await fetch(`http://localhost:8000/survey`)
        const { surveyData } = await response.json()
        setSurveyData(surveyData)
      } catch (err) {
        console.log(err)
        setError(true)
      } finally {
        setDataLoading(false)
      }
    }
    fetchSurvey()
  }, [])

  if (error) {
    return <span>Oups il y a eu un problème</span>
  }

  return (
    <surveyContainer className= 'survey-container'>
      <questionTitle className='question-title'>Question {questionNumber}</questionTitle>
      {isDataLoading ? (
        <Loader />
      ) : (
        <questionContent classNmae='question-content' >{surveyData[questionNumber]}</questionContent>
      )}
      {answers && (
        <replyWrapper className = 'reply-wrapper'>
          <replyBox className='reply-box'
            onClick={() => saveReply(true)}
            isSelected={answers[questionNumber] === true}
          >
            Oui
          </replyBox>
          <replyBox className='reply-box'
            onClick={() => saveReply(false)}
            isSelected={answers[questionNumber] === false}
          >
            Non
          </replyBox>
        </replyWrapper>
      )}
      <linkWrapper className = 'link-warpper'>
        <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
        {surveyData[questionNumberInt + 1] ? (
          <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
        ) : (
          <Link to="/results">Résultats</Link>
        )}
      </linkWrapper>
    </surveyContainer>
  )
}

export default Survey