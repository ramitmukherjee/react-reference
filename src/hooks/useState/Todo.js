import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import RadioGroup from "../../components/composition/radiogroup/RadioGroup";
import RadioOption from "../../components/composition/radiogroup/RadioOption";

const Todo = () => {
    
    const initialList = [{id: 0, task: "Learn React", dueDate: "Yesterday", completed: false}];
    const [todoList, updateTodoList] = useState(initialList);
    const [selectedMode, setselectedMode] = useState("strike");

    const handleTodoAdd = (todo) => {
        updateTodoList([...todoList, todo]);
    };

    const handleCompleteTask = (id, completed) => {

        let updatedList = todoList;

        switch(selectedMode) {
            case "strike":
                // mark the task as completed
                updatedList = todoList.map(todo => {
                    if(todo.id === id) {
                        return {...todo, completed};
                    }
                    return todo;
                });
                break;
            case "delete":
                // filter out the completed task
                updatedList = todoList.filter(todo => todo.id !== id);
                break;
            default:
                console.error("invalid mode");
        }
       
        updateTodoList(updatedList);
    };

    const handleModeChange = (e) => {
        setselectedMode(e.target.value);
        if(e.target.value === "delete") {
            // delete completed tasks
            const updatedList = todoList.filter(todo => !todo.completed);
            updateTodoList(updatedList);
        }
    };

    return (
        <div>
            <h2>Todo:</h2>
            <RadioGroup selected={selectedMode} onChange={handleModeChange}>
                <RadioOption value="strike" label="Strike completed"/>
                <RadioOption value="delete" label="Delete completed"/>
            </RadioGroup>
            <TodoForm addTodo={handleTodoAdd}/>
            <TodoList todoList={todoList} handleCompleteTask={handleCompleteTask}/>
        </div>
    );
}

export default Todo;