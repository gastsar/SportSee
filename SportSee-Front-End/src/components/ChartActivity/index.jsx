import PropTypes from 'prop-types';
import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  YAxis, ResponsiveContainer
} from 'recharts';



const CustomTooltip = ({ active, payload}) => {
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


function CharActivity({ data }) {
  return (
    <article>
      <h2 className="barchart-title">Activité quotidienne</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
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
  tickLine={false}
  tickMargin={10}
  padding={{ left: -48, right: -48 }}
  tickFormatter={( index) => ` ${index + 1}`}
/>


        <YAxis
          orientation="right"
          axisLine={false}
          tickLine={false}
          tickMargin={10}
          tickCount={3}
          tick={{ fill: '#9B9EAC', fontWeight: 500, fontSize: 14 }}
         
        />
         <Tooltip content={<CustomTooltip />} />
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
      </ResponsiveContainer>
     
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


CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
}

export default CharActivity;
