import { useState } from "react"

const Form = ({ onSubmit }) => {
  const [item, setItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (item === '') return;
    onSubmit(item);
    setItem('');
  }

  return (
    <form onSubmit={handleSubmit} className="bg-gray-600 py-5">
      <div className="text-white mb-3 font-semibold  text-lg md:text-2xl">What needs to be done?</div>
      <div className="">
        <input  
          type='text'
          placeholder="Write your tasks and add..."
          value={item}
          onChange={e => setItem(e.target.value)}
          className="outline-0 bg-greay-600 py-2"
        />
        <button className="pl-1 py-2 text-white font-semibold bg-gray-700 hover:bg-black hover:text-red-700">Add Item</button>
      </div>
    </form>
  )
}

export default Form