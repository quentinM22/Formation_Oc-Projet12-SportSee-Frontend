export class UserData {
	constructor(userPath, averagePath, performancePath, activityPath) {
		this.userPath = userPath
		this.averagePath = averagePath
		this.performancePath = performancePath
		this.activityPath = activityPath
	}
	getUserInfo(tab) {
		const data = tab
		return data
	}
	/**
	 * Convertit un numéro de jour en lettre
	 * @param {number} day - Le numéro de jour à convertir
	 * @returns {string} - La lettre correspondante au numéro de jour
	 */
	dayNumberToLetter = (day) => {
		switch (day) {
			case 1:
				return "L"
			case 2:
				return "M"
			case 3:
				return "M"
			case 4:
				return "J"
			case 5:
				return "V"
			case 6:
				return "S"
			case 7:
				return "D"
			default:
				return ""
		}
	}
	/**
	 * Traduit une catégorie en sa version traduite
	 * @param {number} categorie - La catégorie à traduire
	 * @returns {string} - La traduction
	 */
	traduction = (categorie) => {
		switch (categorie) {
			case 1:
				return "Cardio"
			case 2:
				return "Energie"
			case 3:
				return "Endurance"
			case 4:
				return "Force"
			case 5:
				return "Vitesse"
			case 6:
				return "Intensité"
			default:
				return ""
		}
	}
}
