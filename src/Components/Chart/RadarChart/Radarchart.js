import React from "react"
import {
	RadarChart,
	PolarAngleAxis,
	PolarGrid,
	Radar,
	ResponsiveContainer,
	Tooltip,
} from "recharts"
import "./Radarchart.css"
import { dataSort } from "../../../Utils/trad"
const Radarchart = (props) => {
	const dataPerformance = dataSort(props.data)
	const CustomTooltip = ({ active, payload }) => {
		if (active && payload && payload.length) {
			return (
				<div className="custom-tooltip-radar">
					<p className="desc">{payload[0].value}</p>
				</div>
			)
		}
		return null
	}
	return (
		<>
			<div className="cmp-radarchart-container">
				<ResponsiveContainer width="100%" height="100%">
					<RadarChart outerRadius={60} data={dataPerformance}>
						<PolarGrid radialLines={false} />
						<PolarAngleAxis
							dataKey="category"
							stroke="#ffffff"
							tickLine={false}
							tick={{ fontSize: 10 }}
						/>
						<Tooltip label={dataPerformance} content={<CustomTooltip />} />
						<Radar
							dataKey="value"
							stroke="#ff0000"
							fill="#ff0000"
							fillOpacity={0.6}
						/>
					</RadarChart>
				</ResponsiveContainer>
			</div>
		</>
	)
}

export default Radarchart
