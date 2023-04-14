import React, { useState, useEffect } from 'react';
import './App.css';
import { log } from 'console';

type DataType={
    id:number
    title:string
    completed:boolean
}
export const App = () => {
    let [todosSt, setTodosSt] = useState<DataType[]>([])
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/todos')
    //         .then(response => response.json())
    //         .then(json => setTodosSt(json))
    // }, [todosSt])
    const showTodos=()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodosSt(json))
    }
    const hideTodos=()=>{
        setTodosSt([])
    }
    return (
        <div className="App">
            <button onClick={showTodos}>show me Todos</button>
            <button onClick={hideTodos}>hide me Todos</button>
            <ul>
                {todosSt.map((el, ind) => {
                    return (
                        <li key={ind}>
                            <span>{el.id}</span>
                            <span>{el.title}</span>
                            <span>{el.completed}</span>
                        </li>
                    )
                }
                )}
            </ul>

        </div>
    );
}