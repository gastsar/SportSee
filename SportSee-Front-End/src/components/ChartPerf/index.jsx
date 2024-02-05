import PropTypes from 'prop-types';
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
        outerRadius={100}
       
        data={data}
        background
      >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          dataKey="kind"
          tick={{ fill: '#ffffff', fontSize: 11 }}
        />
        <PolarRadiusAxis axisLine={false} tick={false} />
        <Radar
          name="Performance"
          dataKey="value"
          stroke="#E60000"
          fill="#E60000"
          fillOpacity={0.6}
        />
      </RadarChart>
      </ResponsiveContainer>
   
    </article>
  );
}

ChartPerf.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      kind: PropTypes.number.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
};
