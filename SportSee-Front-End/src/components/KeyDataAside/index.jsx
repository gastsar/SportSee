import PropTypes from 'prop-types';
import KeyData from '../KeyData';
import iconeCalorie from '../../assets/calorie-icon.png';
import iconeProteine from '../../assets/protein-icon.png';
import iconeGlucide from '../../assets/glucide-icon.png';
import iconeLipide from '../../assets/lipide-icon.png';

/**
 * Le composant KeyDataAside affiche des composants KeyData pour différentes quantités de nutriments.
 *
 * @component
 * @param {Object} props.keyData - Les données clés contenant les quantités de nutriments.
 * @param {number} props.keyData.calorieCount - Le nombre de calories.
 * @param {number} props.keyData.proteinCount - Le nombre de protéines.
 * @param {number} props.keyData.carbohydrateCount - Le nombre de glucides.
 * @param {number} props.keyData.lipidCount - Le nombre de lipides.
 */
const KeyDataAside = ({ keyData }) => {
  return (
    <>
      <KeyData srcIcone={iconeCalorie} quatityName="Calories" quantitycount={keyData?.calorieCount} />
      <KeyData srcIcone={iconeProteine} quatityName="Protéines" quantitycount={keyData?.proteinCount} />
      <KeyData srcIcone={iconeGlucide} quatityName="Glucides" quantitycount={keyData?.carbohydrateCount} />
      <KeyData srcIcone={iconeLipide} quatityName="Lipides" quantitycount={keyData?.lipidCount} />
    </>
  );
};

// Définition des PropTypes pour la vérification des types
KeyDataAside.propTypes = {
  keyData: PropTypes.shape({
    calorieCount: PropTypes.number,
    proteinCount: PropTypes.number,
    carbohydrateCount: PropTypes.number,
    lipidCount: PropTypes.number,
  }),
};

export default KeyDataAside;
