export const getData = async (link) => {
	return fetch(link)
		.then((res) => res.json())
		.then((data) => data)
		.catch((err) => {
			return Promise.reject()
		})
}
