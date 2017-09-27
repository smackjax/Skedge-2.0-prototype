import React from 'react';
import './sub-list.css';

// Takes an array of objects to build a list from
// props.list[{name, id}]
// props.headerTxt
// props.addFunc
// props.deleteFunc
// props.subColor

export default (props)=>{
    const sublist = props.list;
    const headerTxt = props.headerTxt;
    const subColor = props.subColor;
    const sublistKey = props.sublistKey;

    const deleteFunc = props.deleteSubItem;
    
    function addFunc(){
        props.addSubItem(sublistKey);
    } 

    function deleteItem(subKey, subItemId){
        return ()=>{
            deleteFunc(subKey, subItemId)
        };
    }

    return (
        <div className="subgroup">
            <div style={{color: subColor}} className="subgroup-header">
                <span style={{color: subColor}} className="subgroup-title">{headerTxt + 's'}</span> 
                <button onClick={addFunc} style={{color: '#fff', backgroundColor: subColor}} className="btn subgroup-add-btn">
                    <i className='fa fa-plus'></i> ADD {headerTxt.toUpperCase()} 
                </button>               
            </div>
            <div className="subgroup-list">
            {sublist.map((subItem)=>
                <div key={subItem.id} style={{borderColor: subColor}} className="subgroup-item">
                    <button onClick={deleteItem(sublistKey, subItem.id)} className="btn btn-sm subgroup-delete-btn">
                        <i className="fa fa-trash"></i>
                    </button>
                    <span style={{color: subColor}}>{subItem.name}</span>
                </div>
            )}
            </div>
        </div>
    );
}