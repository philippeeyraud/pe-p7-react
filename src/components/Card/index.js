import PropTypes from 'prop-types'
import './card.scss'



function Card({ label, title, picture }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
            <cardLabel className = 'card-label'>{label}</cardLabel>
            <cardImage className = 'card-image' src={picture} alt="freelance" />
            <span>{title}</span>
        </div>
    )
}
Card.propTypes = {
label : PropTypes.string,
title: PropTypes.string.isRequired,
picture: PropTypes.string


 }
export default Card