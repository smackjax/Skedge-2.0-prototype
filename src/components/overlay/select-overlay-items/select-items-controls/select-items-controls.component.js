import React from 'react';

export default (props)=>{
    // props.confirm
    // props.cancel
    return (
        <div className="container select-items-overlay-controls">
            <div className="row">
                <button className="col-5 btn btn-md btn-danger" onClick={props.cancel}>
                    <i className="fa fa-times"></i>
                </button>
                <button onClick={props.confirm}
                className='btn btn-success btn-md offset-1 col-6'
                > 
                    <i className="fa fa-check"></i>
                </button>
            </div>
        </div>
    )
}
