import React from 'react'

export const TaskList = ({ state, dispatch }) => {
    console.log(state);
    return (
        <div>
            {state.map((item) => {
                return (
                    <div className='task-list'
                        onClick={() => 
                            dispatch({ 
                                type: "TOGGLE_COMPLETE", 
                                payload: item.id})
                        }>
                        <p className={
                            `task ${item.completed 
                            ? "completed" : ""}`}>
                            {item.name}
                        </p>
                    </div>
                ); 
            })}
            <button onClick={() => dispatch({ 
                type: "CLEAR_TASK" })}>
                Clear
            </button>
        </div>
    );
};

export default TaskList