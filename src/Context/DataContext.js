import React, { createContext, useState } from "react"

export const DataContext = createContext()
/**
 * Composant DataProvider qui fournit les données du contexte.
 * @param {Object} props - Les propriétés du composant
 * @returns {JSX.Element} - Le composant DataProvider
 */
export const DataProvider = ({ children }) => {
	// État pour l'utilisation du switch
	const [useApi, setUseApi] = useState(true)

	// Fonction pour switch l'utilisation de useApi (MockData ou ApiData).
	const toggleApi = () => {
		setUseApi((prevState) => !prevState)
	}
	// Valeur du contexte
	const contextValue = {
		useApi,
		toggleApi,
	}
	// Rendu du composant DataProvider avec les enfants
	return (
		<DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
	)
}
