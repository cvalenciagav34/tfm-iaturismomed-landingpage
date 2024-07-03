import React from "react";

export const Campo =({idLabel,label, idInput,type, value, onChange, defaultValue}) => {

    return (
        <div>
            <div className ="form-group">
                <label id={idLabel}>{label}: </label>
                <input id={idInput} type ={type} className="form-control" value = {value} onChange = {onChange} defaultValue={defaultValue}></input>
            </div>
    </div>
    )
}