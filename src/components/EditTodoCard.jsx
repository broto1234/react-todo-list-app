import { useState } from "react"

const EditTodoCard = ({id, item, editTodo}) => {
  const [editValue, setEditValue] = useState(item);

  const handleSubmit = e => {
    e.preventDefault();

    editTodo(editValue, id);
    setEditValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={editValue}
        onChange={(e)=> setEditValue(e.target.value)}
      />
      <button 
        onClick={()=> editTodo(id)}>
        Update</button>
    </form>
  )
}

export default EditTodoCard