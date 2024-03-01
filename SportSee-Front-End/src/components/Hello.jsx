import PropTypes from 'prop-types'

function Hello({ firstName }) {
   

  return (
    <div>
      <h1>
        Bonjour <span>{firstName}</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  )
}

Hello.propTypes = {
  firstName: PropTypes.string,
}

export default Hello