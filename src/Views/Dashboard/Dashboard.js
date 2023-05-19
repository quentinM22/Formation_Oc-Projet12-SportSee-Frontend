import React, { useContext, useEffect, useState } from "react"
import { Navigate, useParams } from "react-router-dom"

import { DataContext } from "../../Context/DataContext"

import Navbar from "../../Components/Navbar/Navbar"
import Sidebar from "../../Components/Sidebar/Sidebar"
import ChartBar from "../../Components/Chart/BarChart/ChartBar"
import Linechart from "../../Components/Chart/LineChart/Linechart"
import Radarchart from "../../Components/Chart/RadarChart/Radarchart"
import Radialchart from "../../Components/Chart/RadialChart/Radialchart"
import Card from "../../Components/Card/Card"

import Loader from "../../Components/Loader/Loader"

import { apiData, mockData } from "../../Data/data"
import { UserData } from "../../Class/UserData"

import "./Dashboard.css"

const Dashboard = () => {
	const { useApi } = useContext(DataContext)
	const [datas, setDatas] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const { id } = useParams()

	useEffect(() => {
		const fetchData = async () => {
			if (useApi) {
				console.log("Mock")
				try {
					const data = await mockData(id)
					setDatas(data)
				} catch (err) {
					console.error(err)
					setDatas(null)
				}
			} else {
				console.log("Api")
				try {
					const data = await apiData(id)
					setDatas(data)
				} catch (err) {
					console.error(err)
					setDatas(null)
				}
			}
			setTimeout(() => {
				setIsLoading(false)
			}, 1000)
		}
		fetchData()
	}, [id, useApi])

	const userData = new UserData()
	const getDataUser = datas ? userData.getUserInfo(datas[0]) : null
	const getDataUserAverage = datas ? userData.getUserInfo(datas[1]) : null
	const getDataUserPerformance = datas ? userData.getUserInfo(datas[2]) : null
	const getDataUserActivity = datas ? userData.getUserInfo(datas[3]) : null
	useEffect(() => {
		document.title = `SportSee - Chargement `
		const timer = setTimeout(() => {
			setIsLoading(false)
			if (getDataUser) {
				document.title = `Kasa - Dashboard ${getDataUser.userInfos.firstName}`
			}
		}, 1500)
		return () => clearTimeout(timer)
	}, [getDataUser])

	return isLoading ? (
		<Loader />
	) : !datas || !getDataUser ? (
		<Navigate to="/error" />
	) : (
		<>
			<Navbar />
			<Sidebar />
			<div className="main-dashboard">
				<div className="main-title">
					<h1>
						Bonjour{" "}
						<span style={{ color: "red" }}>
							{getDataUser.userInfos.firstName}
						</span>
					</h1>
					<p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
				</div>
				<div className="items-container">
					<div className="chart-container">
						<div className="main-first-chart">
							<ChartBar data={getDataUserActivity} />
						</div>
						<div className="main-second-chart">
							<Linechart data={getDataUserAverage} />
							<Radarchart data={getDataUserPerformance} />
							<Radialchart data={getDataUser.todayScore || getDataUser.score} />
						</div>
					</div>
					<div className="main-card">
						<Card data={getDataUser.keyData} />
					</div>
				</div>
			</div>
		</>
	)
}

export default Dashboard
