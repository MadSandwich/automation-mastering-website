export function jwt() {
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
	let jwt = ''

	for (let i = 0; i < 25; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length)
		jwt += characters.charAt(randomIndex)
	}

	return jwt
}
