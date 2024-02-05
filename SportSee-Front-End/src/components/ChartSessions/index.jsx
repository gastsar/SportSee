import PropTypes from 'prop-types';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";


function CustomTooltipLinear({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip tooltip-linearChart">
        <p className="label label-linearChart">{`${payload[0].value} min`}</p>
      </div>
    )
  }

  return null
}

export default function ChartSessions({ data }) {
  return (
    <article className="linearChart-Wrapper idem">
      <h2 className="linearChart-title">Durée moyenne des sessions</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}

          className="linear-graph"
        >

          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            tick={{
              fill: '#ffffff',
              fontWeight: 500,
              fontSize: 12,
            }}
          />

          <YAxis
            hide={true}
            dataKey="sessionLength"
            domain={['dataMin - 20', 'dataMax + 20']}
          />
          <Tooltip
            content={<CustomTooltipLinear />}
            cursor={{ stroke: 'red', strokeWidth: 2 }}
          />
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="#FFFFFF"
            dot={false}
            activeDot={{ r: 5 }}
            strokeWidth={3}
          />

        </LineChart>
      </ResponsiveContainer>
    </article>

  );
}



ChartSessions.propTypes = {
  data: PropTypes.arrayOf(
      PropTypes.shape({
          formatDay: PropTypes.string,
          duration: PropTypes.number,
      })
  ).isRequired,
}

CustomTooltipLinear.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
}