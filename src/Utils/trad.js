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
export const dataSort = (data) => {
	const categories = Object.values(data.kind)
	const chartData = categories.map((category) => {
		const categoryIndex = categories.indexOf(category) + 1
		const dataPoint = data.data.find((point) => point.kind === categoryIndex)
		const translatedCategory = traduction(categoryIndex)
		return { category: translatedCategory, value: dataPoint?.value ?? 0 }
	})
	return chartData
}
