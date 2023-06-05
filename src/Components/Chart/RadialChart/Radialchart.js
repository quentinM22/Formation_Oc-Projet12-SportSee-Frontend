import React from "react"
import {
	RadialBarChart,
	RadialBar,
	ResponsiveContainer,
	PolarAngleAxis,
	PolarRadiusAxis,

} from "recharts"
import "./Radialchart.css"
/**
 * Component RadialChart
 * @param {number} props
 */
const Radialchart = (props) => {
	const score = props.data * 100
	const data = [{ percentValue: score }]
	return (
		<div className="cmp-radialchart-container">
			<p>Score</p>
			<ResponsiveContainer width="100%" height="100%">
				<RadialBarChart
					// width={"100%"}
					// height={"100%"}
					innerRadius="72%"
					outerRadius="85%"
					data={data}
					startAngle={90}
					endAngle={450}
				>
					<PolarAngleAxis
						type="number"
						domain={[0, 100]}
						dataKey={"percentValue"}
						angleAxisId={0}
						background={{ fill: "#ffffff" }}
						tick={false}
					/>
					<PolarRadiusAxis tick={false} axisLine={false} />
					
					<defs>
						<mask id="mask">
							<circle cx="50%" cy="50%" r="72%" fill="white" />
						</mask>
        			</defs>

					<RadialBar
					minAngle={5}
					fill="#E60000"
					position="center"
					clockWise={true}
					dataKey={"percentValue"}
					legendType="square"
					data={data}
					cornerRadius="50%"
					mask="url(#mask)"
					strokeWidth={10}
					/>
				</RadialBarChart>
			</ResponsiveContainer>

			<div className="cmp-radialchart-description">
				<h2>{score} %</h2>
				<p>de votre objectif</p>
			</div>
		</div>
	)
}

export default Radialchart
