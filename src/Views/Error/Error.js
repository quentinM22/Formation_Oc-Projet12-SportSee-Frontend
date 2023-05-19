import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { routes } from "../../Router/Routes"
import Navbar from "../../Components/Navbar/Navbar"
import Sidebar from "../../Components/Sidebar/Sidebar"

import "./Error.css"
/**
 * View Error qui affiche la page d'erreur
 */
const Error = () => {
	useEffect(() => {
		document.title = `SportSee - Erreur  `
	}, [])
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
