import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import TodoList from "../pages/Frontend/TodoList"
import AddTodo from "../pages/Frontend/AddTodo"
export default function index() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<TodoList/>} />
          <Route path='/TodoList' element={<TodoList/>} />
          <Route path='/AddTodo' element={<AddTodo/>} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
