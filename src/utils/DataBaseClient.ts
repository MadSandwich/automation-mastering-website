import supabase from '@src/supabase.ts'

export async function getUsers() {
	let { data: users, error, status } = await supabase.from('users').select('*')

	if (status === 200) return users
	if (error) throw new Error('Unable to obtain users from database' + error)
}

export async function getUser(email: string) {
	let { data: users, error } = await supabase.from('users').select('*').eq('email', email)

	if (users?.at(0) === undefined) throw new Error('Oh, snapp! Email or Password is wrong!')
	if (error) {
		throw new Error(error.code + error.message)
	}
	return users.at(0)
}

export async function createUser(email: string, password: string, name: string, surname: string) {
	let { data, status, error } = await supabase
		.from('users')
		.insert([{ email: email, password: password, name: name, surname: surname }])
		.select()

	if (status === 201) {
		return data
	}
	if (error) {
		throw new Error(error.code + error.message)
	}
}
