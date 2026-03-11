import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Todo = () => {
    
    const initialList = [{id: 0, task: "Learn React", dueDate: "Yesterday", completed: false}];
    const [todoList, updateTodoList] = useState(initialList);

    const handleTodoAdd = (todo) => {
        updateTodoList([...todoList, todo]);
    };

    const handleCompleteTask = (id, completed) => {
        
        const completedList = todoList.map(todo => {
            if(todo.id === id) {
                return {...todo, completed};
            }
            return todo;
        });
        updateTodoList(completedList);
    };

    return (
        <div>
            <h2>Todo:</h2>
            <TodoForm addTodo={handleTodoAdd}/>
            <TodoList todoList={todoList} handleCompleteTask={handleCompleteTask}/>
        </div>
    );
}

export default Todo;