import React, { useState } from 'react';
type PropsType={
    value:string
    callback:(e:string)=>void
}
export const SuperInput=(props:PropsType)=>{
    
    const buttonOnClickHandler=(value:string)=>{
        props.callback(value)
    }
    return (
        <input type="text" value={props.value} onChange={(e)=>{buttonOnClickHandler(e.currentTarget.value)}}/>
    )
}