import { Button, Form, Input, message } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { auth, firestore } from "../../config/firebase"
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { useAuthContext } from '../../contexts/AuthContext';

export default function SignUp() {
    const { dispatch } = useAuthContext()
    const [state, setState] = useState({ fullName: "", email: "", fatherName: "", password: "" })
    const handleChange = e => setState(s => ({ ...s, [e.target.name]: e.target.value }))
    const handleSubmit = e => {
        e.preventDefault()
        let { fullName, email, password } = state
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                createUserProfile(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('errorCode', errorCode)

            });
    }
    const createUserProfile = async (user) => {
        let { fullName } = state
        const { email, uid } = user

        const userData = {
            fullName, email, uid,
            dateCreated: serverTimestamp(),
            status: "active",
            createdBy: {
                uid: uid
            }
        }

        try {
            await setDoc(doc(firestore, "users", uid), userData);
            message.success("A new user has been created successfully")
            dispatch({ type: "SET_LOGGED_IN", payload: { user: userData } })
        } catch (e) {
            message.error("Something went wrong while creating user profile")
            console.error("Error adding document: ", e);
        }
    }
    return (
        <>
            <div className="container-xxl">
                <div className="row ">
                    <div className="col d-flex align-content-center  justify-content-center  ">
                        <div className="card align-items-center my-3 my-sm-5 p-4 py-5">
                            <h3 className='text-center p-3'>SIGN UP </h3>
                            <Form
                                name="normal_login"
                                className="login-form"
                                initialValues={{
                                    remember: true,
                                }}
                            >
                                <Form.Item

                                    name="username"
                                    label="Name"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your name',
                                        },
                                    ]}
                                >
                                    <Input name='fullName' onChange={handleChange} placeholder="Please input your full name" />
                                </Form.Item>
                                <Form.Item

                                    name="farthername"
                                    label="Father Name"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your name',
                                        },
                                    ]}
                                >
                                    <Input name='fatherName' onChange={handleChange} placeholder="Please input your fatherName name" />
                                </Form.Item>
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

                                <Form.Item
                                    name="confirm"
                                    label="Confirm Password"
                                    dependencies={['password']}
                                    hasFeedback
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please confirm your password!',
                                        },
                                        ({ getFieldValue }) => ({
                                            validator(_, value) {
                                                if (!value || getFieldValue('password') === value) {
                                                    return Promise.resolve();
                                                }
                                                return Promise.reject(new Error('The new password that you entered do not match!'));
                                            },
                                        }),
                                    ]}
                                >
                                    <Input.Password />
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" onClick={handleSubmit} onSubmit={handleSubmit}>
                                        Register
                                    </Button>
                                </Form.Item>
                                <Link to={"/Login"} className='text-dark'>Already has a account? <strong>LOGIN</strong></Link>
                            </Form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
