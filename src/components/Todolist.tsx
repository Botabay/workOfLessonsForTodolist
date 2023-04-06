type PropsType={
    title:string
    body?: string
    tasks:Array<TaskType>
}
type TaskType={
    taskId:number
    title:string
    isDone:boolean
}
export const Todolist=(props:PropsType)=>{
    return(
        <div>
                <h3>{props.title}</h3>
                <p>{props.body}</p>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    <li><input type="checkbox" checked={true}/> <span>HTML&CSS</span></li>
                    <li><input type="checkbox" checked={true}/> <span>JS</span></li>
                    <li><input type="checkbox" checked={false}/> <span>React</span></li>
                </ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>
    )
}