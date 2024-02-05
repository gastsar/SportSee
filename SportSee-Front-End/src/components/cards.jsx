/* import PropTypes from 'prop-types'

function NutritionCard({ srcIcone, energeticValue, name }) {
    
  Number.isInteger(energeticValue) ? (unit = 'g') : (unit = 'kCal')
  let energeticValueFormat = ''

  return (
    <div className="nutrition__card">
      <div className="nutrition__card__icon">
        <img src={srcIcone} alt={`icône ${name}`} />
      </div>
      <div className="nutrition__card__text">
        <h3>
          {energeticValueFormat}
          {unit}
        </h3>
        <p>{name}</p>
      </div>
    </div>
  )
}

NutritionCard.propTypes = {
  nameImage: PropTypes.string,
  typeValue: PropTypes.number,
  name: PropTypes.string,
}

export default NutritionCard */