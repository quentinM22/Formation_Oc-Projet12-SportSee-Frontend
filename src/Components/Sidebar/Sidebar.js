import React from "react"

import yoga from "../../Assets/icons/yoga.svg"
import swim from "../../Assets/icons/swim.svg"
import bike from "../../Assets/icons/bike.svg"
import dumbbell from "../../Assets/icons/dumbbell.svg"

import "./Sidebar.css"
const Sidebar = () => {
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
