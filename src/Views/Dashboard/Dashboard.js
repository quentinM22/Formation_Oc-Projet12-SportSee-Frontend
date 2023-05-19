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
/**
 * View Dashboard qui affiche un tableau de bord
 */
const Dashboard = () => {
	// Utilisation du contexte DataContext pour récupérer useApi
	const { useApi } = useContext(DataContext)
	// États pour les données, le chargement et l'ID de l'utilisateur
	const [datas, setDatas] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const { id } = useParams()

	useEffect(() => {
		// Fonction asynchrone pour récupérer les données
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
			// Temps d'attente simulé avant de terminer le chargement
			setTimeout(() => {
				setIsLoading(false)
			}, 1000)
		}
		fetchData()
	}, [id, useApi])
	// Initialisation de l'objet UserData
	const userData = new UserData()
	// Récupération des informations utilisateur à partir des données
	const getDataUser = datas ? userData.getUserInfo(datas[0]) : null
	const getDataUserAverage = datas ? userData.getUserInfo(datas[1]) : null
	const getDataUserPerformance = datas ? userData.getUserInfo(datas[2]) : null
	const getDataUserActivity = datas ? userData.getUserInfo(datas[3]) : null
	useEffect(() => {
		// Mise à jour du titre de la page en fonction des données utilisateur
		document.title = `SportSee - Chargement `
		const timer = setTimeout(() => {
			setIsLoading(false)
			if (getDataUser) {
				document.title = `Kasa - Dashboard ${getDataUser.userInfos.firstName}`
			}
		}, 1500)
		return () => clearTimeout(timer)
	}, [getDataUser])
	// Affichage du composant Loader pendant le chargement
	// Redirection vers la page d'erreur si les données ou les informations utilisateur ne sont pas disponibles
	// Affichage du tableau de bord
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
