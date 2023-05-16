// Mock
export class MockData {
	static BASE_URL = window.location.protocol + "//" + window.location.host // Base URL actuelle (protocole + nom d'hôte)
	getUserData() {
		return `${MockData.BASE_URL}/Mock/Userdata.json`
	}
	getAverageData() {
		return `${MockData.BASE_URL}/Mock/Averagedata.json`
	}
	getPerformanceData() {
		return `${MockData.BASE_URL}/Mock/Performancedata.json`
	}
	getActivityData() {
		return `${MockData.BASE_URL}/Mock/Activitydata.json`
	}
}
// Api
export class ApiData {
	static BASE_URL = "http://localhost:8000"
	getUserData(id) {
		return `${ApiData.BASE_URL}/user/${id}`
	}
	getAverageData(id) {
		return `${ApiData.BASE_URL}/user/${id}/average-sessions`
	}
	getPerformanceData(id) {
		return `${ApiData.BASE_URL}/user/${id}/performance`
	}
	getActivityData(id) {
		return `${ApiData.BASE_URL}/user/${id}/activity`
	}
}
