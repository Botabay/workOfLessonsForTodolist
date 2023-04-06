import React from 'react';
import './App.css';
import { Todolist } from './components/Todolist';

export const App=()=> {
    const titleValue='asdfadfadfasdfkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk'
    return (
        <div className="App">
            <Todolist title={'What to learn'} body={'this is body'}/>
            <Todolist title={'What to remember'}/>
            <Todolist title={titleValue}/>
        </div>
    );
}
