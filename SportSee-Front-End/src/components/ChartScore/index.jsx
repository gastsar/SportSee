
import { RadialBarChart, RadialBar,PolarAngleAxis } from "recharts";




export default function ChartScore({data}) {
  return (

    <article className="idem"> 
    <h2 className="radialChart-title">Score</h2>
    <p className="radialChart-text">
                <span>{data} %</span>
                <br />
                de votre Objectif
            </p>
       <RadialBarChart
      width={200}
      height={200}
      innerRadius={90}
      outerRadius={90}
      barSize={10}
      data={data}
      startAngle={180}
      endAngle={180 - 360 }
    >
      <RadialBar
        minAngle={15}
        label={{ position: "insideStart", fill: "blue" }}
        background
        clockWise
        dataKey="score"
      />
       <PolarAngleAxis
                        type="number"
                        domain={[0, 10]}
                        //tick={false}
                    />
    </RadialBarChart>
    </article>

  );
}
