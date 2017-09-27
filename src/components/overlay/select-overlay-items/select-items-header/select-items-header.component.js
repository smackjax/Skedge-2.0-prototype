import React from 'react';

export default (props)=>{
    // props.firstNum
    // props.firstNumColor
    // props.secondNum
    // props.secondNumColor
    const faClass="fa fa-" + props.headFaClass;
    return (
        <div className="select-overlay-items-header">
            { props.headFaClass &&
            <i className={faClass}></i> }
            <span style={{backgroundColor: props.firstNumColor}} className="badge">
                {props.firstNum}
            </span>
            <i className="fa fa-arrow-right"></i>
            <span style={{backgroundColor: props.secondNumColor}} className="badge">
                {props.secondNum}
            </span>
        </div>

    )
}