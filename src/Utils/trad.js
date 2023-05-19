/**
 * Traduit une catégorie en sa version traduite
 * @param {number} categorie - La catégorie à traduire
 * @returns {string} - La traduction
 */
const traduction = (categorie) => {
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
/**
 * Trie les données et retourne un nouveau tableau avec les catégories
 * @param {Object} data - Les données à trier
 * @returns {Array} - Le tableau trié avec les catégories
 */
export const dataSort = (data) => {
	const categories = Object.values(data.kind)
	// Map chaque catégorie pour obtenir les données triées avec les catégories
	const chartData = categories.map((category) => {
		const categoryIndex = categories.indexOf(category) + 1
		const dataPoint = data.data.find((point) => point.kind === categoryIndex)
		const translatedCategory = traduction(categoryIndex)
		// Retourne un objet avec la catégorie et la valeur de données
		return { category: translatedCategory, value: dataPoint?.value ?? 0 }
	})
	return chartData
}
