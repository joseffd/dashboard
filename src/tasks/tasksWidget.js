import React from "react";

function Todo({ todo, index, completeTodo, removeTodo }) {
    return (
        <label>
            {todo.text}
            <input name={"test"}
                type="checkbox"
                   checked={todo.isCompleted}
                   onChange={completeTodo(index)}
                   />
        </label>


    );
}

function TodoForm({ addTodo }) {
    const [value, setValue] = React.useState("");
    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
        </form>
    );
}

function TasksWidget() {
    const [todos, setTodos] = React.useState([
        {
            text: "Learn about React",
            isCompleted: false
        },
        {
            text: "Meet friend for lunch",
            isCompleted: false
        },
        {
            text: "Build really cool todo app",
            isCompleted: false
        }
    ]);

    const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
    };

    const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos);
    };

    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <div className="app">
            <div className="todo-list">
                {todos.map((todo, index) => (
                    <form>
                        <Todo
                            key={index}
                            index={index}
                            todo={todo}
                            completeTodo={completeTodo}
                            removeTodo={removeTodo}
                        />

                    </form>

                ))}
                <TodoForm addTodo={addTodo} />
            </div>
        </div>
    );
}

export default TasksWidget;