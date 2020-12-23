import React, {useState} from "react";

function TasksWidget() {
    const [tasks, setTasks] = useState([
        {
            text: "Task 1",
            isCompleted: false 
        },
        {
            text: "Task 2",
            isCompleted: true
        }
    ]);

    const addTask = text => {
        setTasks([...tasks, { text }]);
    };

    const completeTask = (index, isCompleted) => {
        const newTodos = [...tasks];
        newTodos[index].isCompleted = !isCompleted;
        setTasks(newTodos);
    };

    const removeTask = index => {
        const newTodos = [...tasks];
        newTodos.splice(index, 1);
        setTasks(newTodos);
    };

    const updateTask = (newTitle, index) => {
        const newTodos = [...tasks];
        newTodos[index].text = newTitle;
        setTasks(newTodos);
    }

    return (
            <div className="todo-list">
                <h1>Tasks</h1>
                {tasks.map((todo, index) => (
                    <Task
                        key={index}
                        index={index}
                        task={todo}
                        completeTask={completeTask}
                        removeTask={removeTask}
                        updateTask={updateTask}
                    />
                ))}
                <TaskForm addTask={addTask} />
            </div>
    );
}


function Task({ task, index, completeTask, removeTask, updateTask }) {
    return (
        <form>
            <input type={"text"} value={task.text} onChange={(input) => updateTask(input.target.value, index)}/>
            <input type={"checkbox"} checked={task.isCompleted} onChange={() => completeTask(index, task.isCompleted)}/>
            <button onClick={() => removeTask(index)}>x</button>
        </form>

    );
}

function TaskForm({ addTask }) {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTask(value);
        setValue("");
    };

    return (

        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={value}
                onChange={input => setValue(input.target.value)}
            />
        </form>
    );
}



export default TasksWidget;