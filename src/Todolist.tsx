import React from 'react';

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    deleteItem:(e:HTMLLIElement)=>void
}

export function Todolist(props: PropsType) {
    const onClickButtonHandler =(event:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        //event.currentTarget.closest('li')?.remove()//my first decision for deleting
        let e=event.currentTarget.closest('li');
        if (e) props.deleteItem(e);
        return;
    }
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {props.tasks.map(el=>{
                return (
                    <li key={el.id}>
                        <button onClick={onClickButtonHandler}>X</button>
                        <input type="checkbox" checked={el.isDone} onChange={()=>{}}/>
                        <span>{el.title}</span>
                    </li>)
                })
            }
            {/* <li><input type="checkbox" checked={props.tasks[0].isDone}/> <span>{props.tasks[0].title}</span></li>
            <li><input type="checkbox" checked={props.tasks[1].isDone}/> <span>{props.tasks[1].title}</span></li>
            <li><input type="checkbox" checked={props.tasks[2].isDone}/> <span>{props.tasks[2].title}</span></li> */}
        </ul>
        <div>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
        </div>
    </div>
}
