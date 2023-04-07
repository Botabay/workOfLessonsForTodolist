import React from 'react';
import './App.css';
import {Todolist} from './Todolist';

function App() {
    const tasks1 = [
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false }
    ]
    const [tasks,setTasks]=React.useState(tasks1)
    // const tasks2 = [
    //     { id: 1, title: "Hello world", isDone: true },
    //     { id: 2, title: "I am Happy", isDone: false },
    //     { id: 3, title: "Yo", isDone: false }
    // ]
    const deleteItem=(id:number)=>{
        // tasks1=tasks.filter(el=>el.id!=id);
        const t=tasks.filter(el=>el.id!=id);
        console.log(tasks,t);        
        setTasks([...t])        
    }

    return (
        <div className="App">
            <Todolist title="What to learn" tasks={tasks} deleteItem={deleteItem}/>
            {/* <Todolist title="Songs" tasks={tasks2} /> */}
        </div>
    );
}

export default App;
