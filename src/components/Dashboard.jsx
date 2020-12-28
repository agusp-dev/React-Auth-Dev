import React, { Fragment, useState } from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'

const Dashboard = () => {

	const { currentUser, logout } = useAuth()

	const [error, setError] = useState('')

	const onHandleLogout = () => {
		setError('')
		setLogout()
	}

	const setLogout = async () => {
		try {
			const result = await logout()
			// if (result && result.user && Object.keys(result.user).length > 0) {
			// 	history.push('/')
			// } else {
			// 	setError('Firebase Error')
			// }
		} catch (e) {
			setError(e.message)
		} 
	}

	return (
		<Fragment>
			<Card>
				<Card.Body>
					<h2 className='text-center mb-4'>Profile</h2>
					{error && (
						<Alert variant='danger'>{ error }</Alert>
					)}
					<strong>Email: </strong>
					{currentUser && currentUser.email}
				</Card.Body>
			</Card>
			<div className='w-100 text-center mt-2'>
				<Button 
					variant='link' 
					onClick={ onHandleLogout }
				>Log Out
				</Button>
			</div>
		</Fragment>
	)
}

export { Dashboard }