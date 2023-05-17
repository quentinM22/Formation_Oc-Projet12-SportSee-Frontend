import React, { createContext, useState } from "react"

export const DataContext = createContext()
export const DataProvider = ({ children }) => {
	const [useApi, setUseApi] = useState(true)

	const toggleApi = () => {
		setUseApi((prevState) => !prevState)
	}
	const contextValue = {
		useApi,
		toggleApi,
	}
	return (
		<DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
	)
}
