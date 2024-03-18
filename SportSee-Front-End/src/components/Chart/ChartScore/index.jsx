import PropTypes from "prop-types";
import { RadialBarChart, RadialBar, Legend, PolarAngleAxis } from "recharts";

/**
 * Composant de visualisation du score sous forme de gauge
 * @param {Object} data - Données contenant le score et éventuellement le score de la journée (s'il y a eu un score)
 * @returns {ReactElement} Composant de visualisation du score
 */
function ChartScore({ data }) {
  return (
    <article className="radialChart idem">
      <h4 className="radialChart-title">Score</h4>
     
      <RadialBarChart
        width={200}
        height={200}
        innerRadius={90}
        outerRadius={90}
        barSize={10}
        data={[data]} // Remplacez data par [data]
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
          dataKey="score" // Mettez ici la clé appropriée pour le score
        /> 
        <Legend
          iconSize={10}
          layout="vertical"
          verticalAlign="middle"
          wrapperStyle={{ text: { fill: "#000" } }}
          content={() => <CustomLegend score={data.score} />} // Passer score comme prop
        />
      </RadialBarChart>
    </article>
  );
}

ChartScore.propTypes = {
  data: PropTypes.shape({
    score: PropTypes.number.isRequired, // Ajoutez une validation pour le score
  }).isRequired,
};

/**
 * Composant de légende personnalisée
 * @param {Object} props - Propriétés du composant
 * @returns {ReactElement} Composant de légende personnalisée
 */
function CustomLegend({ score }) {
  return (
    <div className="custom-legend">
      <p className="radialChart-text">
        <span>{score}%</span>
        <br />
        de votre <br />objectif
      </p>
    </div>
  );
}

CustomLegend.propTypes = {
  score: PropTypes.number.isRequired,
};

export default ChartScore;
