import React, { useState } from 'react'
import { Button, Col, DatePicker, Divider, Form, Input, Row, Select, Typography, message } from 'antd'
import { Link, } from 'react-router-dom'
import { firestore } from '../../../config/firebase'
import { doc, setDoc } from 'firebase/firestore'


export default function AddTodo() {
    const [state, setState] = useState({})
    const [isProcessing, setIsProcessing] = useState(false)
    const { Title } = Typography
    const handleChange = e => setState(s => ({ ...s, [e.target.name]: e.target.value }))
    const handleSelect = e => setState(s => ({ ...s, status: e }))
    const handleDate = (_, date) => setState(s => ({ ...s, date }))

    const addTodo = async (e) => {
        e.preventDefault()
        const data = { ...state, id: Math.random().toString(36).slice(2), dateCreated: new Date() }
        if (!data.title) return message.error("Fill the form ")
        setIsProcessing(true)
        await setDoc(doc(firestore, "todos", data.id), data);
        setIsProcessing(false)
        message.success("ADD Successfully ")
    }

    return (<>

        <div className="container-xxl">
            <div className="row">
                <div className="col mt-4">
                    <Link to={"/TodoList"} className='btn btn-primary'>Todo List</Link>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col d-flex justify-content-center ">
                    <div className="card p-3 p-md-4 my-4">
                        <Title level={2} className='text-primary text-center '>Add Todo</Title>

                        <Divider />

                        <Form layout="vertical" >
                            <Row gutter={12}>
                                <Col xs={24} lg={8}>
                                    <Form.Item label="Title">
                                        <Input placeholder='Input your title ' name='title' onChange={handleChange} />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} lg={8}>
                                    <Form.Item label="Full Name">
                                        <Input placeholder='Input your full name' name='location' onChange={handleChange} />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} lg={8}>
                                    <Form.Item label="Status ">
                                        <Select
                                            defaultValue="Select One Option"
                                            options={[
                                                {
                                                    value: 'active',
                                                    label: 'active',
                                                },
                                                {
                                                    value: 'inactive',
                                                    label: 'inactive',
                                                },
                                            ]}
                                            onChange={handleSelect}
                                        />
                                        {/* <Input placeholder='Enter Status (Active or inactive) ' name='status' onChange={handleChange} /> */}
                                    </Form.Item>
                                </Col>
                                <Col xs={24} lg={8}>
                                    <Form.Item label="Date">
                                        <DatePicker className='w-100' onChange={handleDate} />
                                    </Form.Item>
                                </Col>
                                <Col xs={24}>
                                    <Form.Item label="Discription">
                                        <Input.TextArea placeholder='Enter Description ' name='description' onChange={handleChange} />
                                    </Form.Item>
                                </Col>
                            </Row >
                            <Col className="text-center">
                                <Button type='primary' htmlType='submit' className='w-25 ' loading={isProcessing} onClick={addTodo}>Add Todo</Button>
                            </Col>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}