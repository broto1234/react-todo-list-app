import { useEffect, useState } from "react"
import Form from "./components/Form"
import TodoListContainer from "./components/TodoListContainer"

function App() {
  const [todos, setTodos] = useState(()=> {
    const localValue = localStorage.getItem('ITEMS')
    if (localValue == null) return []
    return JSON.parse(localValue)
  });

  useEffect(()=> {
    localStorage.setItem('ITEMS', JSON.stringify(todos))
  }, [todos])

  const addTodo = todo => {
    setTodos([...todos, {id: crypto.randomUUID(), item: todo, isToggle: false, isEditing: false}])
  }

  const toggleItem = (id, isToggle) => {
    setTodos(todos.map(todo => todo.id === id ? {
      ...todo, isToggle} : todo))
  }

  const editTodo = id => {
    setTodos(todos.map(todo => todo.id === id ? {
      ...todo, isEditing: !todo.isEditing} : todo))
  }


  const editCard = (item, id) => {
    setTodos(todos.map(todo => todo.id === id ? {
      ...todo, item, isEditing: !todo.isEditing} : todo))
  }

  const deleteItem = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="bg-blue-300 w-3/4 mx-auto text-center my-7">
      <Form onSubmit={addTodo} />
      <TodoListContainer todos={todos} toggleItem={toggleItem} editTodo={editTodo} editCard={editCard} deleteItem={deleteItem} />
    </div>
  )
}

export default App