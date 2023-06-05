import { UserData } from "../Class/UserData"
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
		const translatedCategory = new UserData().traduction(categoryIndex)
		// Retourne un objet avec la catégorie et la valeur de données
		return { category: translatedCategory, value: dataPoint?.value ?? 0 }
	})
	return chartData
}
