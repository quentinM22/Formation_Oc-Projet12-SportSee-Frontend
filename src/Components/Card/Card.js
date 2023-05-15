import React from "react"

import fire from "../../Assets/icons/fire.svg"
import chicken from "../../Assets/icons/chicken.svg"
import apple from "../../Assets/icons/apple.svg"
import burger from "../../Assets/icons/burger.svg"

import "./Card.css"

const Card = () => {
	return (
		<>
			<div className="cmp-card">
				<div className="cmp-card-logo">
					<img src={fire} alt="" />
				</div>
				<div className="cmp-card-body">
					{/* <h2>{props.keyData.calorieCount}kCal</h2> */}
					<p>Calorie</p>
				</div>
			</div>

			<div className="cmp-card">
				<div className="cmp-card-logo">
					<img src={chicken} alt="" />
				</div>

				<div className="cmp-card-body">
					{/* <h2>{props.keyData.proteinCount}g</h2> */}
					<p>Portéines</p>
				</div>
			</div>
			<div className="cmp-card">
				<div className="cmp-card-logo">
					<img src={apple} alt="" />
				</div>

				<div className="cmp-card-body">
					{/* <h2>{props.keyData.carbohydrateCount}g</h2> */}
					<p>Glucides</p>
				</div>
			</div>
			<div className="cmp-card">
				<div className="cmp-card-logo">
					<img src={burger} alt="" />
				</div>
				<div className="cmp-card-body">
					{/* <h2>{props.keyData.lipidCount}g</h2> */}
					<p>Lipides</p>
				</div>
			</div>
		</>
	)
}

export default Card
