import { useState } from 'react'
import { userInfo, emailData, passwordData } from './auth_fields.ts'
import { createUser } from '@utils/DataBaseClient.ts'

export default function Register() {
	let design = {
		checkBox:
			'w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800',
		errorCheckBox:
			'w-4 h-4 border border-red-300 rounded bg-red-50 focus:ring-3 focus:ring-red-300 dark:bg-red-300 dark:border-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800',
		default:
			'bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500',
		error: 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500',
	}

	const [name, setName] = useState('')
	const [surname, setSurname] = useState('')
	const [email, setEmail] = useState('')
	const [confirmEmail, setConfirmEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [terms, setTerms] = useState(false)

	const [status, setStatus] = useState({ error: '', success: false, isLoading: false })

	const handleRegister = async () => {
		setStatus({ error: '', success: false, isLoading: true })

		try {
			if (name && surname && email && confirmEmail && password && confirmPassword && terms) {
				if (email === confirmEmail && password === confirmPassword) {
					await createUser(name, surname, email, password)
					setStatus({ error: '', success: true, isLoading: false })
					window.location.href = '/auth/login'
				} else {
					setStatus({ error: 'Please check the entered data', success: false, isLoading: false })
				}
			} else {
				setStatus({ error: 'Please fill all required fields', success: false, isLoading: false })
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
						Register an account
					</h1>
					<h2 className="mt-6 text-center text-base tracking-tight text-red-500 md:text-base dark:text-red-500">
						Please be aware that every fifth minute the database is cleared
					</h2>
					<form className="p-8 space-y-4 md:space-y-6" action="#" method="post" id="register-form" autoComplete="off">
						{/* userInfo group start */}
						<div className="flex -mx-2">
							<div className="w-1/2 px-2">
								<label
									htmlFor={userInfo.name_input.id}
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									id={userInfo.name_label.id}
								>
									{userInfo.name_label.text}
								</label>
								<input
									disabled={status.isLoading}
									type={userInfo.name_input.type}
									name={userInfo.name_input.name}
									id={userInfo.name_input.id}
									className={status.error ? design.error : design.default}
									placeholder={userInfo.name_input.placeholder}
									required={userInfo.name_input.required}
									autoComplete={userInfo.name_input.autoComplete}
									value={status.error ? name : name}
									onChange={(v) => setName(v.target.value)}
								/>
							</div>
							<div className="w-1/2 px-2">
								<label
									htmlFor={userInfo.surname_input.id}
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									id={userInfo.surname_label.id}
								>
									{userInfo.surname_label.text}
								</label>
								<input
									disabled={status.isLoading}
									type={userInfo.surname_input.type}
									name={userInfo.surname_input.name}
									id={userInfo.surname_input.id}
									className={status.error ? design.error : design.default}
									placeholder={userInfo.surname_input.placeholder}
									required={userInfo.surname_input.required}
									autoComplete={userInfo.surname_input.autoComplete}
									value={status.error ? surname : surname}
									onChange={(v) => setSurname(v.target.value)}
								/>
							</div>
						</div>
						{/* userInfo group end */}
						{/* EMAIL group start */}
						<div className="flex -mx-2">
							<div className="w-1/2 px-2">
								<label
									htmlFor={emailData.email_input.id}
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									id={emailData.email_label.id}
								>
									{emailData.email_label.text}
								</label>
								<input
									disabled={status.isLoading}
									type={emailData.email_input.type}
									name={emailData.email_input.name}
									id={emailData.email_input.id}
									className={status.error ? design.error : design.default}
									placeholder={emailData.email_input.placeholder}
									required={emailData.email_input.required}
									autoComplete={emailData.email_input.autoComplete}
									value={status.error ? email : email}
									onChange={(v) => setEmail(v.target.value)}
								/>
							</div>
							<div className="w-1/2 px-2">
								<label
									htmlFor={emailData.confirmEmail_input.id}
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									id={emailData.confirmEmail_label.id}
								>
									{emailData.confirmEmail_label.text}
								</label>
								<input
									disabled={status.isLoading}
									type={emailData.confirmEmail_input.type}
									name={emailData.confirmEmail_input.name}
									id={emailData.confirmEmail_input.id}
									className={status.error ? design.error : design.default}
									placeholder={emailData.confirmEmail_input.placeholder}
									required={emailData.confirmEmail_input.required}
									autoComplete={emailData.confirmEmail_input.autoComplete}
									value={status.error ? confirmEmail : confirmEmail}
									onChange={(v) => setConfirmEmail(v.target.value)}
								/>
							</div>
						</div>
						{/* EMAIL group end */}
						{/* PASSWORD group start */}
						<div className="flex -mx-2">
							<div className="w-1/2 px-2">
								<label
									htmlFor={passwordData.password_input.id}
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									id={passwordData.password_label.id}
								>
									{passwordData.password_label.text}
								</label>
								<input
									disabled={status.isLoading}
									type={passwordData.password_input.type}
									name={passwordData.password_input.name}
									id={passwordData.password_input.id}
									className={status.error ? design.error : design.default}
									placeholder={passwordData.password_input.placeholder}
									required={passwordData.password_input.required}
									autoComplete={passwordData.password_input.autoComplete}
									value={status.error ? password : password}
									onChange={(v) => setPassword(v.target.value)}
								/>
							</div>
							<div className="w-1/2 px-2">
								<label
									htmlFor={passwordData.confirmPassword_input.id}
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									id={passwordData.confirmPassword_label.id}
								>
									{passwordData.confirmPassword_label.text}
								</label>
								<input
									disabled={status.isLoading}
									type={passwordData.confirmPassword_input.type}
									name={passwordData.confirmPassword_input.name}
									id={passwordData.confirmPassword_input.id}
									className={status.error ? design.error : design.default}
									placeholder={passwordData.confirmPassword_input.placeholder}
									required={passwordData.confirmPassword_input.required}
									autoComplete={passwordData.confirmPassword_input.autoComplete}
									value={status.error ? confirmPassword : confirmPassword}
									onChange={(v) => setConfirmPassword(v.target.value)}
								/>
							</div>
						</div>
						{/* PASSWORD group end */}
						<div className="flex items-start">
							<div className="flex items-center h-5">
								<input
									disabled={status.isLoading}
									id="terms"
									aria-describedby="terms"
									type="checkbox"
									className={status.error ? design.errorCheckBox : design.checkBox}
									required={true}
									onChange={(e) => {
										setTerms(e.target.checked)
									}}
									checked={terms}
								/>
							</div>
							<div className="ml-3 text-sm">
								<label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">
									I accept the Terms and Conditions
								</label>
							</div>
						</div>
						{status.error ? (
							<p id="error_message" className="mt-2 text-sm text-red-600 dark:text-red-500">
								{status.error}
							</p>
						) : (
							''
						)}
						<button
							disabled={status.isLoading}
							type="button"
							className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
							onClick={handleRegister}
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
								'Create an account'
							)}
						</button>
						<p className="text-sm font-light text-gray-500 dark:text-gray-400">
							Already have an account?
							<a href="/auth/login" className="pl-4 font-medium text-primary-600 hover:underline dark:text-primary-500">
								Login here
							</a>
						</p>
					</form>
				</div>
			</div>
		</div>
	)
}
