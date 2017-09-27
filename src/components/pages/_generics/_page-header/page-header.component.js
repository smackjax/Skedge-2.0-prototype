import React from 'react';
import './page-header.style.css';

export default (props)=>{
    // props.text
    // props.faClass
    // props.color

    const faClass = "fa fa-" + props.faClass;
    return (
        <div style={{color: props.color}} className="item-page-header">
            <div className="item-page-symbol">
                <i className={faClass}></i>
            </div>
            <div className="item-page-header-text">
                {props.text}
            </div>
        </div>
    )
}
