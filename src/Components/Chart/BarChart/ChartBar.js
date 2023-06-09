import React from "react"
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts"
import "./Barchart.css"
/**
 * Component ChartBar
 * @param {object} props
 */
const ChartBar = (props) => {
	const dataActivity = props.data.sessions
	const CustomTooltip = ({ active, payload }) => {
		if (active && payload && payload.length) {
			return (
				<div className="custom-tooltip-bar">
					<p className="desc">{payload[1].value + "kg"}</p>
					<p className="desc">{payload[0].value + "Kcal"}</p>
				</div>
			)
		}
		return null
	}
	return (
		<>
			<div className="cmp-barchart-header ">
				<h3>Activité quotidienne</h3>
				<ul>
					<li>
						<span></span>Poids (kg)
					</li>
					<li>
						<span></span>Calories brûlées (kCal)
					</li>
				</ul>
			</div>
			<div className="cmp-barchart-container">
				<ResponsiveContainer width={"100%"} height={"80%"}>
					<BarChart data={dataActivity} margin={{ top: 20, bottom: 20 }}>
						<CartesianGrid strokeDasharray="3 3" vertical={false} />
						<XAxis
							dataKey="day"
							tickFormatter={(day) => day.split("-0")[2]}
							axisLine={false}
							tickLine={false}
						/>
						<YAxis
							dataKey="kilogram"
							orientation="right"
							tickCount={5}
							domain={["dataMin - 2", "dataMax"]}
							yAxisId="kilogram"
							axisLine={false}
							tickLine={false}
						/>
						<YAxis
							dataKey="calories"
							orientation="left"
							domain={[0, "dataMax"]}
							tickCount={100}
							yAxisId="calories"
							axisLine={false}
							hide
						/>

						<Tooltip
							label={dataActivity}
							content={<CustomTooltip />}
							position={{ y: 0 }}
						/>
						<Bar
							dataKey="calories"
							fill="#282D30"
							barSize={10}
							radius={[10, 10, 0, 0]}
							yAxisId="calories"
						/>
						<Bar
							dataKey="kilogram"
							fill="#E60000"
							barSize={10}
							radius={[10, 10, 0, 0]}
							yAxisId="kilogram"
						/>
					</BarChart>
				</ResponsiveContainer>
			</div>
		</>
	)
}

export default ChartBar
