const TodoCard = ({id, item, isToggle, toggleItem, editTodo, deleteItem}) => {
  return (
    <div className="md:flex justify-between gap-3 border border-gray-300 mx-7 my-3 bg-slate-200">
      <label className="pl-3 py-3">        
      <input
      type='checkbox'
      checked={isToggle}
      onChange={e => toggleItem(id, e.target.checked)}
      /> {item}
      </label>
      <div className="md:flex">
        <button 
        onClick={()=> editTodo(id)}
        className="px-4 font-semibold bg-white text-blue-500 hover:underline">Edit</button>
        <button 
        onClick={()=> deleteItem(id)}
        className="px-4 font-semibold bg-slate-300 text-red-700 hover:underline">Delete</button>
      </div>
    </div>
  )
}

export default TodoCard