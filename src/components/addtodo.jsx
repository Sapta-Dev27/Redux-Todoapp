import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from '../reducers/todoslice'

const addNewTodo = () => {

  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleTodoChange = (e) => {
    setTodo(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(todo));
    setTodo(" ")

  }

  return (
    <>
      <form onSubmit={handleFormSubmit} className="space-x-3 mt-12">
        <input
          type="text"
          name="todo"
          placeholder="Add a new todo"
          onChange={handleTodoChange}
          value={todo}
          className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        >
        </input>

        <button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Add Todo
        </button>
      </form>
    </>
  )
}

export default addNewTodo;