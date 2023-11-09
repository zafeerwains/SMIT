import { doc, getDoc } from 'firebase/firestore'
import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { auth, firestore } from '../config/firebase'
import { message } from 'antd'
import { onAuthStateChanged } from 'firebase/auth'
const AuthContext = createContext()
const initState = { isAuth: false, user: {} }
export default function AuthContextProvider({ children }) {
    const isAuth=useAuthContext()
    const reducer = (state, { type, payload }) => {
        switch (type) {
            case "SET_LOGGED_IN":
                return { isAuth: true, user: payload.user }
            case "SET_LOGGED_OUT":
                return initState
            default:
                return state
        }
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                readUserProfile(user)
            } 
        })
    }, [])
    const readUserProfile = async (user) => {
        const docRef = doc(firestore, "users", user.uid);
        const docSnap = await getDoc(docRef);
        
        // console.log('auth user', user)
        if (docSnap.exists()) {
            const user = docSnap.data()
            // console.log('user', user)
            dispatch({ type: "SET_LOGGED_IN", payload: { user } })
            console.log("done")
            console.log('isAuth', isAuth)
        } else {
            message.error("User data not found. Please try again or contact support team")
            console.log("User data not found")
        }
    }
    const [state, dispatch] = useReducer(reducer, initState)
    return (
        <>
            <AuthContext.Provider value={{ ...state, dispatch, readUserProfile }}>
                {children}
            </AuthContext.Provider>
        </>
    )
}
export const useAuthContext = () => useContext(AuthContext)