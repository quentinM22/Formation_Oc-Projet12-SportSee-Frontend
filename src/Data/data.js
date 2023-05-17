import { ApiData, MockData } from "./path"
import { UserData } from "../Class/UserData"
import { getData } from "./fetch"

export const mockData = async (paramsId) => {
	const userId = parseInt(paramsId.split(":id")[1])
	const mockData = new MockData()
	const userPath = mockData.getUserData()
	const averagePath = mockData.getAverageData()
	const performancePath = mockData.getPerformanceData()
	const activityPath = mockData.getActivityData()

	const userPathData = new UserData(
		userPath,
		averagePath,
		performancePath,
		activityPath
	)
	try {
		const userDataRes = await getData(userPathData.userPath)
		const averageDataRes = await getData(userPathData.averagePath)
		const performanceDataRes = await getData(userPathData.performancePath)
		const activityDataRes = await getData(userPathData.activityPath)
		const data = [
			userDataRes,
			averageDataRes,
			performanceDataRes,
			activityDataRes,
		]

		let userData = data.map((item) =>
			item.find((user) => user.id === userId || user.userId === userId)
		)

		return userData
	} catch (err) {
		console.error(err)
		throw err
	}
}
export const apiData = async (paramsId) => {
	const userId = parseInt(paramsId.split(":id")[1])
	const apiData = new ApiData(userId)
	const userPath = apiData.getUserData(userId)
	const averagePath = apiData.getAverageData(userId)
	const performancePath = apiData.getPerformanceData(userId)
	const activityPath = apiData.getActivityData(userId)

	const userPathData = new UserData(
		userPath,
		averagePath,
		performancePath,
		activityPath
	)
	try {
		const userDataRes = await getData(userPathData.userPath)
		const averageDataRes = await getData(userPathData.averagePath)
		const performanceDataRes = await getData(userPathData.performancePath)
		const activityDataRes = await getData(userPathData.activityPath)
		const data = [
			userDataRes.data,
			averageDataRes.data,
			performanceDataRes.data,
			activityDataRes.data,
		]
		console.log(data)
		return data
	} catch (err) {
		console.log(err)
		throw err
	}
}
