import PropTypes from 'prop-types';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer
} from "recharts";

export default function ChartPerf({ dataPerf }) {
  const { data, kind } = dataPerf;

  const kindLabels = {
    "1": "cardio",
    "2": "énergie",
    "3": "endurance",
    "4": "force",
    "5": "vitesse",
    "6": "intensité"
  }; 

  //const mapKindToLabel = (kindValue) => kind[kindValue];
  const mapKindToLabel = (kindValue) => kindLabels[kindValue];

  return (
    <article className="radarchart-Wrapper idem">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          outerRadius={70}
          data={data}
          background
        >
          <PolarGrid radialLines={false}  />
          <PolarAngleAxis
            dataKey="kind"
            tick={{ fill: '#ffffff', fontSize: 11 }}
            tickFormatter={mapKindToLabel} // Utilisez la fonction de mappage ici
          />
          <PolarRadiusAxis axisLine={false} tick={false} />
          <Radar
            name="Performance"
            dataKey="value"
            fill="#E60000"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </article>
  );
}


ChartPerf.propTypes = {
  dataPerf: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        kind: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        value: PropTypes.number.isRequired,
      })
    ),
    kind: PropTypes.objectOf(PropTypes.string.isRequired),
  }).isRequired,
};
