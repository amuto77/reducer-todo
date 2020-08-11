export const initialState = {
    task: [
        { 
            name: "Get out of Bed", 
            completed: false, 
            id: new Date() }
        ],
};

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return {
                ...state,
                task: [
                    ...state.task,
                    { name: action.payload, 
                        completed: false, 
                        id: new Date() },
                ],
            };
        case "TOGGLE_COMPLETE":
            console.log(action.payload);
            return {
                task: state.task.map((task) => {
                    console.log(task.id)
                    if (action.payload === task.id) {
                        console.log(task)
                        return {
                            ...task,
                            completed: !task.completed,
                        };
                    } else return task
                }),
            };
            case "CLEAR_TASK":
                return {
                    ...state.task,
                    task: state.task.filter((task) =>{
                        return task.completed === false
                    })
                }
        default:
            return state;
    }
};