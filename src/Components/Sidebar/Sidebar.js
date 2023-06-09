import React, { useEffect } from "react"

import yoga from "../../Assets/icons/yoga.svg"
import swim from "../../Assets/icons/swim.svg"
import bike from "../../Assets/icons/bike.svg"
import dumbbell from "../../Assets/icons/dumbbell.svg"
/**
 * Component Sidebar
 */
import "./Sidebar.css"
const Sidebar = () => {
	// URL actuelle
	const url = window.location.pathname

	useEffect(() => {
		const activityCard = document.querySelector(".cmp-card-activity-container")
		// Format "/user/:id"
		const showActivityCard = /^\/user\/\d+$/.test(url)
		if (!showActivityCard) {
			activityCard.style.display = "none"
		} else {
			activityCard.style.display = "flex"
		}
	}, [url])
	return (
		<div className="sidebar">
			<div className="cmp-card-activity-container">
				<div className="cmp-card-activity">
					<img src={yoga} alt="" />
				</div>
				<div className="cmp-card-activity">
					<img src={swim} alt="" />
				</div>
				<div className="cmp-card-activity">
					<img src={bike} alt="" />
				</div>
				<div className="cmp-card-activity">
					<img src={dumbbell} alt="" />
				</div>
			</div>
			<footer>Copiryght, SportSee 2020</footer>
		</div>
	)
}

export default Sidebar
