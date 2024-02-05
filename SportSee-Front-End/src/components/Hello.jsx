import PropTypes from 'prop-types'

function Hello({ firstName }) {
   
  return (
    <div className="profil__header">
      <h2>
        Bonjour <span>{firstName}</span>
      </h2>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  )
}

Hello.propTypes = {
  firstName: PropTypes.string,
}

export default Hello