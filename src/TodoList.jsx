import { useEffect } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css"
import addBorder from "./BorderComponent";

function TodoList({todos, setTodos, onChange, onDelete, onEdit, onAdd}){
console.log("listi meji todos", todos)

    useEffect(()=>{
        console.log("ok")
    }, [todos])

    return (
        <div className="todo-row">
           {todos.map((todo)=>{
               return (
                   <TodoItem 
                    todo={todo}
                    todos={todos}
                    setTodos={setTodos}
                    key={todo.id}
                    onAdd={onAdd}
                    onChange={onChange}
                    onDelete={onDelete}
                    onEdit={onEdit}
                    />
               )
           })}
        </div>
    )
}
export default addBorder(TodoList, "blue");