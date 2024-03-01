import PropTypes from "prop-types";
import { RadialBarChart, RadialBar, Legend, PolarAngleAxis } from "recharts";
import { CalculateChartData, CustomLegend } from "../Utils";

function ChartScore({ data }) {
  const { chartData, displayScore } = CalculateChartData(data);

  return (
    <article className="radialChart idem">
      <h4 className="radialChart-title">Score</h4>
     
      <RadialBarChart
        width={200}
        height={200}
        innerRadius={90}
        outerRadius={90}
        barSize={10}
        data={chartData}
        startAngle={180}
        endAngle={180 - 360}
        fill="#E60000" // Couleur des barres
        background={{ fill: "#eee" }} // Couleur du fond
      >
        <PolarAngleAxis
          type="number"
          domain={[0, 100]} // Le domaine doit être entre 0 et 1 pour les pourcentages
          angleAxisId={0}
          tick={false}
        />
        <RadialBar
          minAngle={15}
          fill="#E60000"
          background
          clockWise
          dataKey={chartData[0].todayScore !== undefined ? "todayScore" : "score"}
      
        />
        <Legend
          iconSize={10}
          layout="vertical"
          verticalAlign="middle"
          wrapperStyle={{ text: { fill: "#000" } }}
          content={() => CustomLegend(displayScore)}
        />
      </RadialBarChart>
    </article>
  );
}

ChartScore.propTypes = {
  data: PropTypes.shape({
    todayScore: PropTypes.number,
    score: PropTypes.number,
  }),
};

export default ChartScore;
