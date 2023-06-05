import React, { useEffect } from "react"
import { NavLink } from "react-router-dom"
import logo from "../../Assets/logo.png"

import "./Navbar.css"
/**
 * Component Navbar
 */
const Navbar = () => {
	// URL actuelle
	const url = window.location.pathname
	useEffect(() => {
		const nav = document.querySelector("nav")
		// Format "/user/:id"
		const showNav = /^\/user\/\d+$/.test(url)
		if (!showNav) {
			nav.style.display = "none"
		} else {
			nav.style.display = "block"
		}
	}, [url])
	return (
		<div className="navbar">
			<div className="navbar-logo">
				<img src={logo} alt="logo" />
				<h1>SportSee</h1>
			</div>
			<nav>
				<ul className="grid s-b center">
					<li>
						<NavLink to="/">Accueil</NavLink>
					</li>
					<li>
						<NavLink to="/profil">Profil</NavLink>
					</li>
					<li>
						<NavLink to="/params">Réglage</NavLink>
					</li>
					<li>
						<NavLink to="/comu">Communauté</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Navbar
