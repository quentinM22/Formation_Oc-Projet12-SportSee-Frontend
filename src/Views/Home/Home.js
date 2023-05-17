import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"

import Navbar from "../../Components/Navbar/Navbar"
import Sidebar from "../../Components/Sidebar/Sidebar"

import { DataContext } from "../../Context/DataContext"
import "./Home.css"

const Home = () => {
	const { useApi, toggleApi } = useContext(DataContext)
	useEffect(() => {
		document.title = `SportSee - Accueil `
	}, [])
	return (
		<>
			<Navbar />
			<Sidebar />
			<div className="main">
				<h2>
					Bienvenu sur le Projet 12 de la formation
					<span> Développeur d'application - JavaScript React</span>
				</h2>
				<p>
					L'objectif de ce projet est de refaire la page profil utilisateur du
					site en utilisant React. Le projet intègre des graphiques sur
					l'activité sportive de l'utilisateur, qui devront être développés à
					l'aide de D3 ou de Recharts.
				</p>
				<button onClick={toggleApi}>{!useApi ? "APIData" : "MockData"}</button>
				<div>
					<Link to="/user/:id12" className="btn-user">
						🏃 Karl Dovineau
					</Link>

					<Link to="/user/:id18" className="btn-user">
						🏃‍♀️ Cecilia Ratorez
					</Link>
				</div>
			</div>
		</>
	)
}

export default Home
