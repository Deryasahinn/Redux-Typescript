import React, { useState } from 'react'
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { CiCircleCheck } from "react-icons/ci";
import { MdOutlineModeEdit } from "react-icons/md";
import { TodoType } from '../types/Types';
import { useDispatch } from 'react-redux';
import { removeTodoById, updateTodo } from '../redux/todoSlice';

interface todoProps {
    todoProps: TodoType
}

function Todo({ todoProps }: TodoType) {
    const { id, content } = todoProps;

    const dispatch = useDispatch();
    const [edittable, setEdittable] = useState<boolean>(false);
    const [newTodo, setNewTodo] = useState<string>(content)

    const handleRemoveTodo = () => {

        dispatch(removeTodoById(id))
    }
    const handleUpDateTodo = () => {
        const payload = {
            id: id,
            content: newTodo
        }
        dispatch(updateTodo(payload))
        setEdittable(false);

    }

    return (
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", border: "1px solid lightgrey", padding: "14px", borderRadius: "8px", marginTop: "40px" }}>

            {edittable ? <input type='text' style={{ width: "420px", border: "none", outline: "none", borderBottom: "1px solid brown" }}
                value={newTodo}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)}
            /> : <div>{content}</div>}


            <div><IoIosRemoveCircleOutline onClick={handleRemoveTodo} className='icons' style={{ marginRight: "10px" }} />


                {edittable ? <CiCircleCheck onClick={handleUpDateTodo} className='icons' /> : <MdOutlineModeEdit onClick={() => setEdittable(true)} className='icons' />}

            </div>


        </div>
    )
}

export default Todo