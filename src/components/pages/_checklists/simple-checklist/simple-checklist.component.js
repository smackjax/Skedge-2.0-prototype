import React from 'react';
import objToArr from '../../../_FUNCTIONS/objToArr';

// Styles
import './simple-checklist.style.css';

export default (props)=>{
    
    // props.listObjs
    // props.selectedIds
    // props.color
    // props.onChange
    const mainList = objToArr(props.listObjs);
    if(!props.dontSort){
        mainList.sort((itemOne, itemTwo)=>{
            var nameA = itemOne.name.toUpperCase(); // ignore upper and lowercase
            var nameB = itemTwo.name.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            // names must be equal
            return 0;
        });
    }
    return (
        <div className="simple-select-list">
            {
                mainList.map((item, itemIndex)=>{
                    return (
                    <div key={'overlay-item-'+item.id}
                    className="form-check">
                        <label htmlFor={item.id}
                        style={{color: props.color, borderColor: props.color}}
                        className="form-check-label checklist-item">
                            <input
                            checked={props.selectedIds.includes(item.id)}
                            name={item.id} 
                            type="checkbox"
                            value={item.id}
                            onChange={props.onChange}
                            className="form-check-input "
                            id={item.id}
                            />
                            <span 
                            style={{fontWeight: props.selectedIds.includes(item.id) ?
                                'bold' : 'normal'
                            }}
                            className="checklist-item-name">
                                {item.name}
                            </span>
                        </label>
                    </div>
                    )
                })
            }
        </div>
    )
}