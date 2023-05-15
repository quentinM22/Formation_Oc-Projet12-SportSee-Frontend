import React from "react"
import Navbar from "../../Components/Navbar/Navbar"
import Sidebar from "../../Components/Sidebar/Sidebar"

import "./Home.css"
import { Link } from "react-router-dom"
const Home = () => {
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
				<div>
					{/* <button onClick={toggleApi}>
							{!useApi ? "APIData" : "MockData"}
						</button> */}

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
