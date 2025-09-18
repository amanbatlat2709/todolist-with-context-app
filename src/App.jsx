import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoContextProvider } from './context'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) =>{
    setTodos((prev) => [{id: Date.now(),...todo},...prev]);
  }

  const updateTodo = (id,updateTodo)  => {
    setTodos((prev)=> [prev.map((prevTodo)=> prevTodo.id ===id ? updateTodo : prevTodo)])
  }
  const deleteTodo = (id) => {
    setTodos((prev)=> [prev.filter((todo) => x.id!==id)])
  }
  const toggleComplete = (id) =>{
    
      setTodos((prev) =>
       prev.map((prevTodo)=> prevTodo.id === id ? {...prevTodo,completed : !prevTodo.completed} : prevTodo))  
  }
  

  useEffect(()=>{
    const todosItems = JSON.parse(localStorage.getItem("todos"));
    if(todosItems && todosItems.length > 0){
        setTodos(todosItems);
    }
  },[]);

  useEffect(()=>{
    if(todos && todos.length > 0){
    localStorage.setItem("todos",JSON.stringify(todos));
    }
  },[todos])
  return (
    <TodoContextProvider value={{addTodo,updateTodo,deleteTodo,toggleComplete}}> 
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
          <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            
            {
              todos.map((todo) => (
                <div keys={todo.id} className='w-full'>
                  <TodoItem todo={todo}/>
                  </div>
              )
              )
            }
          </div>
        </div>
      </div>
    </ TodoContextProvider>
  )
}

export default App
