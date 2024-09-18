import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTodo } from '../redux/todoSlice';
import { TodoType } from '../types/Types';

function TodoCreate() {
  const dispatch = useDispatch();

  const [newTodo, setNewTodo] = useState<string>('')

  const handleCreateTodo = () => {
    if (newTodo.trim().length == 0) {
      alert("Lütfen Bir Todo Giriniz")
      return;
    }

    const payload :TodoType= {
      id: Math.floor(Math.random() * 999999),
      content: newTodo
    }

    dispatch(createTodo(payload))
    setNewTodo('');

  }


  return (
    <div className='todo-create'>
      <h1 style={{ margin:"auto", marginBottom:"50px", color:"brown"}} >Not Defteri</h1>
      <input
        value={newTodo}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)}

        placeholder='Notunuzu yazınız' className='todo-input' type="text" />
      <button onClick={handleCreateTodo} className='todo-create-button'>Oluştur</button>
    </div>
  )
}

export default TodoCreate