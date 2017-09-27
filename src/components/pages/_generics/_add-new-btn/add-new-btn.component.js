import React from 'react';

export default (props)=>{
    // props.color
    // props.onClick
    return (
        <button style={{backgroundColor: props.color, color: '#efefef'}} onClick={props.onClick} className="btn main-add-btn">
            <i className="fa fa-plus"></i>
        </button>
    )
}