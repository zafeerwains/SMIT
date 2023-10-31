import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Col, DatePicker, Form, Input, Modal, Row, Select, Space, Tooltip, message } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import { collection, deleteDoc, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';
import { firestore } from '../../../config/firebase';
import { motion } from "framer-motion";
export default function TodoList() {
    const [state, setState] = useState({})
    const [documents, setDocuments] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [todoToBeUpdated, setTodoToBeUpdated] = useState({})
    const handleChange = e => setTodoToBeUpdated(s => ({ ...s, [e.target.name]: e.target.value }))
    const handleDate = (_, date) => setTodoToBeUpdated(s => ({ ...s, date }))
    const getTodos = async () => {
        const querySnapshot = await getDocs(collection(firestore, "todos"));
        const array = []
        querySnapshot.forEach((doc) => {
            let data = doc.data()
            array.push(data)
        });
        setDocuments(array)
    }
    useEffect(() => {
        getTodos()
    }, [])
    const listChange = (status) => {
        getTodos()
        console.log('documents', documents)
        console.log('status', status)
        const list = documents.filter((doc) => doc.status != status);
        console.log('list', list)
        setDocuments(list);
        console.log('documents', documents)
    }
    const deleteTodo = async (todo) => {
        await deleteDoc(doc(firestore, "todos", todo.id));
        message.success("Deleted Successfully")
        getTodos()
    }
    const editTodo = todo => {
        setModalOpen(true)
        setTodoToBeUpdated(todo)

    }
    const updateTodo = async () => {
        let updatedTodo = { ...state, ...todoToBeUpdated, dateModified: new Date() }
        try {
            await setDoc(doc(firestore, "todos", updatedTodo.id), updatedTodo);
            message.success("Todo updated successfully")
        } catch (e) {
            console.error("Error adding document: ", e);
            message.error("Error updating document")
        }
        getTodos()
        setModalOpen(false)
    }
    return (
        <>
            <div className="container-xxl">
                <div className="row">
                    <div className="col mt-4">
                        <Link to={"/AddTodo"} className='btn btn-primary'>Add Todo</Link>
                    </div>
                </div>
                <div className="col text-center  text-primary ">
                    <h1>
                        Todo List
                    </h1>
                    <Select
                        defaultValue="select Status"
                        style={{
                            width: 120,
                        }}
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
                        onChange={(e) => listChange(e)}
                    />
                </div>
            </div>
            <div className="container-xxl table-responsive">
                <motion.div
                    initial={{ opacity: 0, y: -200 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 3.5 }}
                >
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th >#</th>
                                <th >Title</th>
                                <th >Location</th>
                                <th >Description</th>
                                <th >Status</th>
                                <th >Date</th>
                                <th >Actions</th>
                            </tr>
                        </thead>
                        <tbody>

                            {documents.map((doc, i) =>
                            (<tr key={i}><th >{i + 1}</th>
                                <td>{doc.title}</td>
                                <td>{doc.location}</td>
                                <td>{doc.description}</td>
                                <td>{doc.status}</td>
                                <td>{doc.date}</td>
                                <td>{<Space>
                                    <Tooltip title="Delete Todo"><DeleteOutlined style={{ color: "red" }} onClick={() => { deleteTodo(doc) }} /></Tooltip>
                                    <Tooltip title="Update Todo"><EditOutlined style={{ color: "green" }} onClick={() => { editTodo(doc) }} /></Tooltip>
                                </Space>
                                }</td>
                            </tr>)
                            )
                            }
                        </tbody>
                    </table>
                </motion.div>

            </div>
            <Modal
                title="Vertically centered modal dialog"
                centered
                open={modalOpen}
                onOk={updateTodo}
                onCancel={() => setModalOpen(false)}
                okText={"Update Todo"}
            >
                <Form layout="vertical" >
                    <Row gutter={12}>
                        <Col xs={24} lg={8}>
                            <Form.Item label="Title">
                                <Input placeholder='Input your title ' value={todoToBeUpdated.title} name='title' onChange={handleChange} />
                            </Form.Item>
                        </Col>
                        <Col xs={24} lg={8}>
                            <Form.Item label="Full Name">
                                <Input placeholder='Input your location' value={todoToBeUpdated.location} name='location' onChange={handleChange} />
                            </Form.Item>
                        </Col>
                        <Col xs={24} lg={8}>
                            <Form.Item label="Date">
                                <DatePicker className='w-100' value={todoToBeUpdated.date ? dayjs(todoToBeUpdated.date) : ""} onChange={handleDate} />
                            </Form.Item>
                        </Col>
                        <Col xs={24}>
                            <Form.Item label="Discription">
                                <Input.TextArea placeholder='Enter Description ' value={todoToBeUpdated.description} name='description' onChange={handleChange} />
                            </Form.Item>
                        </Col>
                    </Row >
                </Form>
            </Modal>
        </>
    )
}
