import { createContext, useContext, useState, useEffect } from 'react'
import auth from '../firebase'

const AuthContext = createContext()

export const useAuth = () => {
	return useContext(AuthContext)
}

export default function AuthProvider({ children }) {

	let onFirebaseAuthListener

	useEffect(() => {
		const firebaseAuthSubscribe = () => {
			onFirebaseAuthListener = auth().onAuthStateChanged( user => {
				setCurrentUser(user)
			})
		}
		firebaseAuthSubscribe()
	}, [])
	
	const [currentUser, setCurrentUser] = useState(undefined)

	const login = (email, password) => {
		return auth().signInWithEmailAndPassword(email, password)
	}

	const signup = ( email, password ) => {
		return auth().createUserWithEmailAndPassword(email, password)
	}

	const resetPassword = email => {
		return auth().sendPasswordResetEmail(email)
	}

	const logout = () => {
		return auth().signOut()
	}
	
	return (
		<AuthContext.Provider 
			value={{ 
				currentUser,
				signup,
				login,
				resetPassword,
				logout
			}}
		 > { children }
		</AuthContext.Provider>
	)
}
