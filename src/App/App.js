// import logo from './logo.svg';
import "./App.css"
import { Path, routes } from "../Router/Routes"
import { Routes, Route } from "react-router-dom"
import { DataProvider } from "../Context/DataContext"
function App() {
	return (
		<>
			<DataProvider>
				<Routes>
					{routes.map((route, i) => (
						<Route key={i} path={route.path} element={<Path {...route} />} />
					))}
				</Routes>
			</DataProvider>
		</>
	)
}

export default App
