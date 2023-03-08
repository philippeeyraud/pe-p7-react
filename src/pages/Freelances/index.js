import { useEffect, useState } from 'react'
import Card from '../../components/Card'
import { Loader } from '../utils/style/Atoms'

import './freelance.scss'



function Freelances() {
  const [isDataLoading, setDataLoading] = useState(false)
  const [error, setError] = useState(false)
  const [freelancersList, setFreelancesList] = useState([])

  useEffect(() => {
    async function fetchFreelances() {
      setDataLoading(true)
      try {
        const response = await fetch(`http://localhost:8000/freelances`)
        const { freelancersList } = await response.json()
        setFreelancesList(freelancersList)
      } catch (err) {
        console.log('===== error =====', err)
        setError(true)
      } finally {
        setDataLoading(false)
      }
    }
    fetchFreelances()
  }, [])

  if (error) {
    return <span>Oups il y a eu un problème</span>
  }

  return (
    
    <div className = "freelances">
      <pageTitle className = "page-title">Trouvez votre prestataire</pageTitle>
      <pageSubtitle className = "page-subtitle">
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </pageSubtitle>
      {isDataLoading ? (
        <loaderWrapper className = "loader-wrapper">
          <Loader />
        </loaderWrapper>
      ) : (
        <cardsContainer className = "cards-container">
          {freelancersList.map((profile, index) => (
            <Card
              key={`${profile.name}-${index}`}
              label={profile.job}
              title={profile.name}
              picture={profile.picture}
            />
          ))}
        </cardsContainer>
      )}
    </div>
  )
}

export default Freelances