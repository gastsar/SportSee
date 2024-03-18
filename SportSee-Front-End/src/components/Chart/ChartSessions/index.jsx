
import PropTypes from 'prop-types';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import {CustomTooltipLinear, CustomizedCursor } from '../Utils';

export default function ChartSessions({ data }) {
  return (
    <article className="linearChart-Wrapper idem">
      <h2 className="linearChart-title">Durée moyenne des sessions</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} className="linear-graph">
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            tick={{
              fill: '#ffffff',
              fontWeight: 500,
              fontSize: 12,
            }}
            tickFormatter={data.day}
            opacity={0.5}
          />
          <YAxis hide={true} domain={['dataMin - 20', 'dataMax + 20']} />
          <Tooltip content={<CustomTooltipLinear />} cursor={<CustomizedCursor />} />
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="white"
            strokeWidth={2}
            dot={false}
            activeDot={{
              stroke: '#00000075',
              strokeOpacity: 0.7,
              strokeWidth: 6,
              r: 8,
            }}
            opacity={0.5}
          />
        </LineChart>
      </ResponsiveContainer>
    </article>
  );
}

ChartSessions.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string.isRequired,
      sessionLength: PropTypes.number.isRequired,
    })
  ).isRequired,
};
