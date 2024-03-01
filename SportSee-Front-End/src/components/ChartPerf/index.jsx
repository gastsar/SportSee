import PropTypes from 'prop-types';
import { MapKindToLabel } from '../Utils';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer
} from "recharts";

export default function ChartPerf({ data }) {
  
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
            tickFormatter={MapKindToLabel} // Utilisez la fonction de mappage ici
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
  data: PropTypes.arrayOf(
    PropTypes.shape({
      
      value: PropTypes.number.isRequired // Assurez-vous que value est un nombre
    })
  ).isRequired
};

