type PropsType={
    callback:()=>void
    value: string
}
export const Button=(props:PropsType)=>{
    const onChangeHandler=()=>{
        props.callback()
    }
    return(
        <button onClick={onClickHandler}>{props.value</button>
    )
}