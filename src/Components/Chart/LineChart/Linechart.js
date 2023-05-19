import React from "react"

import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
} from "recharts"

import { dayNumberToLetter } from "../../../Utils/day"

import "./Linechart.css"
const Linechart = (props) => {
	const dataAverage = props.data.sessions
	const CustomTooltip = ({ active, payload }) => {
		if (active && payload && payload.length) {
			return (
				<div className="custom-tooltip-line">
					<p className="label">{`${payload[0].value} min`}</p>
				</div>
			)
		}

		return null
	}
	return (
		<div className="cmp-linechart-container">
			<div className="cmp-linechart-header">
				<h3>Durée moyenne des sessions</h3>
			</div>
			<ResponsiveContainer width="100%" height="70%">
				<LineChart
					width={730}
					height={200}
					data={dataAverage}
					margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
				>
					<defs>
						<linearGradient id="gradient" x1="1" y1="0" x2="0" y2="0">
							<stop offset="0%" stopColor="#FFFFFF" />
							<stop offset="100%" stopColor="rgba(255, 255, 255, 0.5)" />
						</linearGradient>
					</defs>
					<XAxis
						dataKey={(data) => dayNumberToLetter(data.day)}
						axisLine={false}
						tickLine={false}
						stroke="#FFFFFF"
						tick={{ offset: 10 }}
					/>
					<YAxis hide />
					<Tooltip
						content={<CustomTooltip />}
						position={{ y: 0 }}
						itemStyle={{ backgroundColor: "#00000" }}
					/>
					<Line
						type="monotone"
						dataKey="sessionLength"
						strokeWidth={2}
						stroke="url(#gradient)"
						dot={{ r: 0 }}
						activeDot={{ r: 8 }}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	)
}

export default Linechart
