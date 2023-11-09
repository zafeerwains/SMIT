import { Button, Form, Input, message } from 'antd'
import React, { useState } from 'react'
import { Link, Navigate, Route } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import { auth } from "../../config/firebase"
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useAuthContext } from '../../contexts/AuthContext';
import Dashboard from "../Dashboard"
export default function Login() {
    // const history = useHistory();
    const [isProcessing, setIsProcessing] = useState(false)
    const { isAuth, dispatch,readUserProfile } = useAuthContext()
    const [state, setState] = useState({ fullName: "", fatherName: "", password: "" })
    const handleChange = e => setState(s => ({ ...s, [e.target.name]: e.target.value }))
    const handleSubmit = (e) => {
        e.preventDefault()
        let { email, password } = state
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setIsProcessing(true)
                readUserProfile(user)
            })
            .catch((error) => {
                message.error("Something went wrong while signing user")
                console.error(error)
            })
            .finally(() => {
                setIsProcessing(false)
            })
    }

    return (
        <>
            <div className="container">
                <div className="row p-1 p-sm-3 p-md-5">
                    <div className="col p-1 p-sm-3 d-flex  p-md-5">
                        <div className="card   p-3 m-auto">
                            <h2 className='text-center py-3 '>Login</h2>
                            <Form layout='vertical'>
                                <Form.Item
                                    name="email"
                                    label="E-mail"
                                    rules={[
                                        {
                                            type: 'email',
                                            message: 'The input is not valid E-mail!',
                                        },
                                        {
                                            required: true,
                                            message: 'Please input your E-mail!',
                                        },
                                    ]}
                                >

                                    <Input name='email' onChange={handleChange} />
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    label="Password"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your password!',
                                        },
                                    ]}
                                    hasFeedback
                                >
                                    <Input.Password name='password' onChange={handleChange} />
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" loading={isProcessing} onSubmit={handleSubmit} onClick={handleSubmit}>
                                        Log in
                                    </Button>
                                </Form.Item>
                                <Link to={"/SignUp"} className='text-dark'>Create a new account? <strong>SIGN UP</strong></Link>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
