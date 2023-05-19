import { ApiData, MockData } from "./path"
import { UserData } from "../Class/UserData"
import { getData } from "./fetch"
/**
 * Fonction asynchrone pour récupérer des données à partir de MockData.
 * @param {string} paramsId - L'identifiant des paramètres
 * @returns {Array.object|error}  - Une promesse résolue avec un tableau de données ou rejetée avec une erreur
 */
export const mockData = async (paramsId) => {
	// Convertit l'identifiant en nombre entier en extrayant la partie numérique de la chaîne
	const userId = parseInt(paramsId.split(":id")[1])
	// Crée une instance de la classe MockData
	const mockData = new MockData()
	// Obtient les chemins d'accès aux données de l'instance MockData
	const userPath = mockData.getUserData()
	const averagePath = mockData.getAverageData()
	const performancePath = mockData.getPerformanceData()
	const activityPath = mockData.getActivityData()

	// Crée une instance de la classe UserData avec les chemins d'accès obtenus
	const userPathData = new UserData(
		userPath,
		averagePath,
		performancePath,
		activityPath
	)
	try {
		// Récupère les données à partir de chaque chemin d'accès en utilisant la fonction getData
		const userDataRes = await getData(userPathData.userPath)
		const averageDataRes = await getData(userPathData.averagePath)
		const performanceDataRes = await getData(userPathData.performancePath)
		const activityDataRes = await getData(userPathData.activityPath)
		// Stocke les données dans un tableau
		const data = [
			userDataRes,
			averageDataRes,
			performanceDataRes,
			activityDataRes,
		]
		// Recherche un objet utilisateur dans chaque sous-tableau de `data` en utilisant `userId`
		let userData = data.map((item) =>
			item.find((user) => user.id === userId || user.userId === userId)
		)
		// Renvoie le tableau de données
		return userData
	} catch (err) {
		console.error(err)
		throw err
	}
}
/**
 * Fonction asynchrone pour récupérer des données à partir de l'API.
 * @param {string} paramsId - L'identifiant des paramètres
 * @returns {Array.object|error}  - Une promesse résolue avec un tableau de données ou rejetée avec une erreur
 */
export const apiData = async (paramsId) => {
	// Convertit l'identifiant en nombre entier en extrayant la partie numérique de la chaîne
	const userId = parseInt(paramsId.split(":id")[1])
	// Crée une instance de la classe ApiData avec l'identifiant de l'utilisateur
	const apiData = new ApiData(userId)
	// Obtient les chemins d'accès aux données de l'utilisateur de l'instance ApiData
	const userPath = apiData.getUserData(userId)
	const averagePath = apiData.getAverageData(userId)
	const performancePath = apiData.getPerformanceData(userId)
	const activityPath = apiData.getActivityData(userId)

	// Crée une instance de la classe UserData avec les chemins d'accès obtenus
	const userPathData = new UserData(
		userPath,
		averagePath,
		performancePath,
		activityPath
	)
	try {
		// Récupère les données à partir de chaque chemin d'accès en utilisant la fonction getData
		const userDataRes = await getData(userPathData.userPath)
		const averageDataRes = await getData(userPathData.averagePath)
		const performanceDataRes = await getData(userPathData.performancePath)
		const activityDataRes = await getData(userPathData.activityPath)
		// Stocke les données dans un tableau
		const data = [
			userDataRes.data,
			averageDataRes.data,
			performanceDataRes.data,
			activityDataRes.data,
		]
		// Renvoie le tableau de données
		return data
	} catch (err) {
		// En cas d'erreur, affiche l'erreur dans la console et la propage
		console.log(err)
		throw err
	}
}
