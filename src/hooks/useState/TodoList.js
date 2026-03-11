import { Fragment, useState } from "react";

const TodoList = ({todoList, handleCompleteTask}) => {

    const markAsDone = (e, todo) => {
        handleCompleteTask(todo, e.target.checked);
    };

    return (
        <ul>
            {(
                todoList.map(todo => {
                    return (
                        <Fragment key={todo.id}>
                            <div>
                                <label>
                                    <input type="checkbox"
                                        defaultChecked={todo.completed}
                                        onChange={(e) => markAsDone(e, todo.id)}/>
                                    {
                                        !todo.completed ?
                                            <>I want to <i>{todo.task}</i> by <i>{todo.dueDate}</i>.</> :
                                            <del>I want to <i>{todo.task}</i> by <i>{todo.dueDate}</i>.</del>
                                    }
                                    
                                </label>
                            </div>
                        </Fragment>
                    )
                })
            )}
        </ul>
    );
}

export default TodoList;