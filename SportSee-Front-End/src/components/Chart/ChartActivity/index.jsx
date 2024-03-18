import PropTypes from 'prop-types';
import { ChartActivityTooltip } from '../Utils';
import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  YAxis, ResponsiveContainer
} from 'recharts';


/**
 * @description Composant affichant un graphique barre 
 * l'activité quotidienne de l'utilisateur
 * @param {array} data Tableau de données à afficher
 * @returns {JSX.Element} Composant JSX
 */

function ChartActivity({ data }) {
  return (
    <article>

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
          <text
            x={100} // Modifier la position x selon vos besoins
            y={20} // Modifier la position y selon vos besoins
            textAnchor="middle"
            fill="#000"
            fontSize={16} // Modifier la taille de la police selon vos besoins
            fontWeight="bold"
          >
            Activité quotidienne
          </text>
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
             tickMargin={10}
             padding={{ left: -48, right: -48 }}
            tick={{ fill: '#9B9EAC', fontWeight: 500, fontSize: 14 }}
          />


          <YAxis
            orientation="right"
            axisLine={false}
            tickLine={false}
            tickMargin={10}
            tickCount={3}
            tick={{ fill: '#9B9EAC', fontWeight: 500, fontSize: 14 }}

          />
          <Tooltip content={<ChartActivityTooltip />} />
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

//  propTypes composant CharActivity
ChartActivity.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      kilogram: PropTypes.number,
      calories: PropTypes.number,
    })
  ).isRequired,
};

export default ChartActivity;
