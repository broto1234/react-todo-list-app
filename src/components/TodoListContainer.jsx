import EditTodoCard from "./EditTodoCard"
import TodoCard from "./TodoCard"

const TodoListContainer = ({todos, toggleItem, editTodo, editCard, deleteItem}) => {
  return (
    <div className="py-3 bg-slate-200">
      <div className="font-bold mb-1 md:text-xl">Todo List :</div>
      {todos.length === 0 ?
        '--No Todo List!!!--' : <p><span className="font-bold">{todos.length}</span> tasks remaining.</p>}
      {todos.map(todo => (
        todo.isEditing ? (
          <EditTodoCard key={todo.id} editTodo={editCard} {...todo}/>
        ) :
          <TodoCard key={todo.id} {...todo} toggleItem={toggleItem} editTodo={editTodo} deleteItem={deleteItem}/>
        ))
      }
    </div>
  )
}

export default TodoListContainer