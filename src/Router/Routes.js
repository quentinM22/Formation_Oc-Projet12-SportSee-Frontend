import React from "react"

// Importation des differentes View
import Dashboard from "../Views/Dashboard/Dashboard"
import Home from "../Views/Home/Home"
import Error from "../Views/Error/Error"

// Création des routes
const routes = [
	{
		path: "/",
		component: <Home />,
	},
	{
		path: "/user/:id",
		component: <Dashboard />,
	},
	{
		path: "/*",
		component: <Error />,
	},
]

const Path = (route) => route.component

export { Path, routes }
