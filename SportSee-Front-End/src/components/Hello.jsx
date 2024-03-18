import PropTypes from 'prop-types'

/**
 * Composant d'accueil de profil
 * @param {Object} props - Propriétés du composant
 * @param {string} props.firstName - Prénom de l'utilisateur
 * @returns {ReactElement} Composant d'accueil de profil
 */
function Hello({ firstName }) {
  return (
    <div className="profil__header">
      <h1>
        Bonjour <span>{firstName}</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
}

Hello.propTypes = {
  firstName: PropTypes.string,
}

export default Hello