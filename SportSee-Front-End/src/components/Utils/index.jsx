import PropTypes from 'prop-types';
import { Rectangle } from 'recharts';

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


export const MapKindToLabel = (kindValue) => ({
    "1": "cardio",
    "2": "énergie",
    "3": "endurance",
    "4": "force",
    "5": "vitesse",
    "6": "intensité"
  })[kindValue];

  

  export const CalculateChartData = (data) => {
    const { todayScore, score } = data;
    const displayScore = todayScore !== undefined ? todayScore : score;
  
    const chartData = [{ score: displayScore * 100 }];
    if (todayScore !== undefined) {
      chartData[0].todayScore = todayScore * 100;
    }
  
    return { chartData, displayScore: displayScore * 100 };
  };
  
  export const CustomLegend = (displayScore) => (
    <div className="custom-legend">
      <p className="radialChart-text">
        <span>{displayScore}%</span>
        <br />
        de votre <br />objectif
      </p>
    </div>
  );
  


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

export const FormatDayOfWeek = (dayNumber) => {
  const daysOfWeek = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
  return daysOfWeek[dayNumber - 1];
}; 
