import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import Navbar from "../../Components/Navbar/Navbar"
import Sidebar from "../../Components/Sidebar/Sidebar"

import Linechart from "../../Components/Chart/LineChart/Linechart"
import Radarchart from "../../Components/Chart/RadarChart/Radarchart"
import Radialchart from "../../Components/Chart/RadialChart/Radialchart"
import Card from "../../Components/Card/Card"

import { mockData } from "../../Data/data"
import { UserData } from "../../Class/UserData"

import "./Dashboard.css"
import ChartBar from "../../Components/Chart/BarChart/ChartBar"

const Dashboard = () => {
	const [datas, setDatas] = useState()
	const { id } = useParams()

	useEffect(() => {
		const fetchData = async () => {
			try {
				setDatas(await mockData(id))
			} catch (err) {
				console.error(err)
			}
		}
		fetchData()
	}, [id])
	console.log(datas)
	const userData = new UserData()
	const getDataUser = datas ? userData.getUserInfo(datas[0]) : null
	const getDataUserAverage = datas ? userData.getUserInfo(datas[1]) : null
	const getDataUserPerformance = datas ? userData.getUserInfo(datas[2]) : null
	const getDataUserActivity = datas ? userData.getUserInfo(datas[3]) : null
	return !datas ? (
		<p>Error</p>
	) : (
		<>
			<Navbar />
			<Sidebar />
			<div className="main-title">
				<h1>
					Bonjour{" "}
					<span style={{ color: "red" }}>
						{getDataUser.userInfos.firstName}
					</span>
				</h1>
				<p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
			</div>
			<div className="main-first-chart">
				<ChartBar data={getDataUserActivity} />
			</div>
			<div className="main-second-chart">
				<Linechart data={getDataUserAverage} />
				<Radarchart data={getDataUserPerformance} />
				<Radialchart data={getDataUser.todayScore || getDataUser.score} />
			</div>
			<div className="main-card">
				<Card data={getDataUser.keyData} />
			</div>
		</>
	)
}

export default Dashboard
