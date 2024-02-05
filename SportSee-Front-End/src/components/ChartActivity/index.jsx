import PropTypes from 'prop-types';
import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  YAxis
} from 'recharts';

function CharActivity({ data }) {
  return (
    <article>
      <h2 className="barchart-title">Activité quotidienne</h2>
      <BarChart
        width={500}
        height={300}
        data={data}
        barGap={8}
        barSize={7}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >

        <CartesianGrid
          strokeDasharray="3 3"
          vertical={false}
          stroke={'#DEDEDE'}
        />

        <XAxis
          dataKey="day"
          tickLine={false}
          tickMargin={14}
          padding={{ left: -10, right: -10 }}
          tick={{ fill: '#9B9EAC', fontWeight: 500, fontSize: 14 }}
        />

        <YAxis
          orientation="right"
          axisLine={false}
          tickLine={false}
          tickMargin={42}
          tickCount={3}
          tick={{ fill: '#9B9EAC', fontWeight: 500, fontSize: 14 }}
         
        />
        <Tooltip fill="#E60000" />
        <Legend
          verticalAlign="top"
          align="right"
          iconType="circle"
          iconSize={8}
          height={50}
        />
        <Bar
          dataKey="kilogram"
          fill="#282D30"
          radius={[3, 3, 0, 0]}
          barSize={6}
          name="Poids (kg)"
        />
        <Bar
          dataKey="calories"
          fill="#E60000"
          radius={[3, 3, 0, 0]}
          barSize={6}
          name="Calories Brûlées (kCal)"
        />
      </BarChart>
    </article>
  );
}

// Ajouter propTypes pour le composant CharActivity
CharActivity.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      kilogram: PropTypes.number,
      calories: PropTypes.number,
    })
  ).isRequired,
};

export default CharActivity;
