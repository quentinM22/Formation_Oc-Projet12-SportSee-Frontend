import React from "react"
import Navbar from "../../Components/Navbar/Navbar"
import Sidebar from "../../Components/Sidebar/Sidebar"
import { Link } from "react-router-dom"
import { routes } from "../../Router/Routes"

import "./Error.css"

const Error = () => {
	return (
		<>
			<Navbar />
			<Sidebar />
			<div className="main">
				<h2>Erreur 404</h2>
				<h3>La page que vous recherchez semble introuvable.</h3>
				<Link to={routes[0].path}>
					Retourner sur la page d’accueil
					<hr />
				</Link>
			</div>
		</>
	)
}

export default Error
