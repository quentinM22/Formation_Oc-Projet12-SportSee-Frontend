import React from "react"

import fire from "../../Assets/icons/fire.svg"
import chicken from "../../Assets/icons/chicken.svg"
import apple from "../../Assets/icons/apple.svg"
import burger from "../../Assets/icons/burger.svg"

import "./Card.css"
/**
 * Component Card
 * @param {object} props
 */
const Card = (props) => {
	return (
		<>
			<div className="cmp-card">
				<div className="cmp-card-logo">
					<img src={fire} alt="" />
				</div>
				<div className="cmp-card-body">
					<h2>{props.data.calorieCount}kCal</h2>
					<p>Calorie</p>
				</div>
			</div>

			<div className="cmp-card">
				<div className="cmp-card-logo">
					<img src={chicken} alt="" />
				</div>

				<div className="cmp-card-body">
					<h2>{props.data.proteinCount}g</h2>
					<p>Portéines</p>
				</div>
			</div>
			<div className="cmp-card">
				<div className="cmp-card-logo">
					<img src={apple} alt="" />
				</div>

				<div className="cmp-card-body">
					<h2>{props.data.carbohydrateCount}g</h2>
					<p>Glucides</p>
				</div>
			</div>
			<div className="cmp-card">
				<div className="cmp-card-logo">
					<img src={burger} alt="" />
				</div>
				<div className="cmp-card-body">
					<h2>{props.data.lipidCount}g</h2>
					<p>Lipides</p>
				</div>
			</div>
		</>
	)
}

export default Card
