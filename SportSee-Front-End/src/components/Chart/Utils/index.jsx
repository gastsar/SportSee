import PropTypes from 'prop-types';
import { Rectangle } from 'recharts';


/**
 * @param {booléen} active - état actif de l'infobulle
 * @param {Array} payload - tableau de données pour l'infobulle
 * 
 * @returns {JSX.Element|null} - élément JSX pour l'infobulle ou null
 */
export const ChartActivityTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip-activity">
        <p className="label"> {payload[0].value}kg</p>
        <p className="label"> {payload[1].value}Kcal</p>
      </div>
    );
  }

  return null;
};
ChartActivityTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

export const CustomizedCursor = ({ points }) => (
  <Rectangle fill="black" opacity={0.1} x={points?.[0]?.x} width={1000} height={300} />
);

CustomizedCursor.propTypes = {
  points: PropTypes.array,
};

export const CustomTooltipLinear = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip tooltip-linearChart">
        <p className="label label-linearChart">{`${payload[0].value} min`}</p>
      </div>
    );
  }
  return null;
};

CustomTooltipLinear.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};
