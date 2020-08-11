import React, { useState  } from 'react'
import { reducer, initalState } from '../reducers/reducer'

export const TaskForm = ({dispatch}) => {
    const [newTask, setNewTask] = useState("");


    const handleChanges = (e) => {
        setNewTask(e.target.value);
    };

    return(
        <div className="form">
            <label className="opener">Task:</label>
            <input
            className="taskInput"
            placeholder='Tasks'
            type="text"
            name="newTaskInput"
            onChange={handleChanges}
            value={newTask}
            />
            <button onClick={() => dispatch({ type: "ADD_TASK", payload:newTask})}>
                Add Task
            </button>
        </div>
    );
};

export default TaskForm