import { useState } from 'react'
import { getUser } from '@utils/DataBaseClient.ts'
import { jwt } from '@utils/jwt.ts'

export default function Login() {
	let design = {
		default:
			'bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500',
		error: 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500',
	}

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [status, setStatus] = useState({ error: '', success: false, isLoading: false })

	const handleLogin = async () => {
		setStatus({ error: '', success: false, isLoading: true })

		try {
			if (email && password) {
				let user = await getUser(email)
				if (user?.password === password) {
					setStatus({ error: '', success: true, isLoading: false })
					document.cookie = `token=${jwt()}; ;path=/`
					window.location.href = '/'
				}
			} else {
				setStatus({ error: 'Fill all required fields', success: false, isLoading: false })
			}
		} catch (error: any) {
			setStatus({ error: error.message, success: false, isLoading: false })
		}
	}

	return (
		<div className="flex justify-center items-center p-4 h-auto pt-20 bg-gray-50 dark:bg-gray-900">
			<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
				<div className="p-2">
					<h1 className="mt-6 text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
						Sign in to your account
					</h1>
					<form className="p-8 space-y-4 md:space-y-6" action="#" method="post" id="login-form" autoComplete="on">
						<div>
							<label htmlFor="email_input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" id="email_label">
								Your email
							</label>
							<input
								disabled={status.isLoading}
								type="email"
								name="email"
								id="email_input"
								className={status.error ? design.error : design.default}
								placeholder="name@domain.com"
								required={true}
								autoComplete="on"
								value={status.error ? email : email}
								onChange={(v) => setEmail(v.target.value)}
							/>
						</div>
						<div>
							<label
								htmlFor="password_input"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								id="password_label"
							>
								Password
							</label>
							<input
								disabled={status.isLoading}
								type="password"
								name="password"
								id="password_input"
								placeholder="••••••••"
								className={status.error ? design.error : design.default}
								required={true}
								value={status.error ? password : password}
								onChange={(v) => setPassword(v.target.value)}
							/>
							{status.error ? (
								<p id="error_message" className="mt-2 text-sm text-red-600 dark:text-red-500">
									{status.error}
								</p>
							) : (
								''
							)}
						</div>
						<button
							disabled={status.isLoading}
							type="button"
							className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
							onClick={handleLogin}
						>
							{status.isLoading ? (
								<svg
									aria-hidden="true"
									className="inline-flex w-6 h-6 text-gray-50 dark:text-gray-50 animate-spin fill-gray-500 dark:fill-gray-500"
									viewBox="0 0 100 101"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
										fill="currentColor"
									/>
									<path
										d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
										fill="currentFill"
									/>
								</svg>
							) : (
								'Sign in'
							)}
						</button>
						<p className="text-sm font-light text-gray-500 dark:text-gray-400">
							Don't have an account?
							<a href="/auth/register" className="pl-4 font-medium text-primary-600 hover:underline dark:text-primary-500">
								Register here
							</a>
						</p>
					</form>
				</div>
			</div>
		</div>
	)
}
