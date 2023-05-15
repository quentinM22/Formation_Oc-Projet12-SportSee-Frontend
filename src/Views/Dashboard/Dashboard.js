import React from "react"
import Navbar from "../../Components/Navbar/Navbar"
import Sidebar from "../../Components/Sidebar/Sidebar"

import "./Dashboard.css"
import Barchart from "../../Components/Chart/BarChart/Barchart"
import Linechart from "../../Components/Chart/LineChart/Linechart"
import Radarchart from "../../Components/Chart/RadarChart/Radarchart"
import Radialchart from "../../Components/Chart/RadialChart/Radialchart"
import Card from "../../Components/Card/Card"
const Dashboard = () => {
	return (
		<>
			<Navbar />
			<Sidebar />
			<div className="main-title">
				<h1>
					Bonjour{" "}
					{/* <span style={{ color: "red" }}>{findData.userInfos.firstName}</span> */}
				</h1>
				<p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
			</div>
			<div className="main-first-chart">
				<Barchart />
			</div>
			<div className="main-second-chart">
				<Linechart />
				<Radarchart />
				<Radialchart />
			</div>
			<div className="main-card">
				<Card />
			</div>
		</>
	)
}

export default Dashboard
