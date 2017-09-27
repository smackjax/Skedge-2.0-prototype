import React from 'react';

export default (props)=>{
    // props.selectedIds
    // props.deleteSelected()
    // props.toggleSelectAll()
    // props.addIdsTo()
    // props.removeIdsFrom()
    // props.faClass
    // props.color

    const faClass = 'fa fa-' + props.faClass;
    const controlBtnStyle = props.selectedIds.length > 0 ? 
        {backgroundColor: props.color, color: '#efefef', cursor: 'pointer'} :
            { backgroundColor: '#ddd', color: '#777'}
     const deleteBtnStyle = props.selectedIds.length > 0 ? 
        {backgroundColor: '#e04545', color: '#efefef', cursor: 'pointer'} :
            { backgroundColor: '#ddd', color: '#777'}

    // Wrap the functions passed in and call with selected ids
    const deleteSelected = ()=>{
        props.deleteSelected(props.selectedIds);  }
    const addIdsTo = ()=>{ 
        props.addIdsTo(props.selectedIds); }
    const removeIdsFrom = ()=>{ 
        props.removeIdsFrom(props.selectedIds); }
    
    const areSelected = props.selectedIds.length > 0 ? true : false;

    return(
        <div className="page-controls">
            {/* Delete main items in bulk btn */}
            <button 
            style={deleteBtnStyle} 
            disabled={!areSelected}
            onClick={deleteSelected} 
            className="btn main-btn delete-btn">
                <i className="fa fa-trash"></i>
            </button>

            {/* Select/deselect all checkbox */}
            <input onChange={props.toggleSelectAll} type="checkbox" style={{height:'20px', width:'20px'}}/>

            {/* Delete from sublist in bulk btn */}
            <button style={controlBtnStyle} 
            disabled={!areSelected}
            onClick={removeIdsFrom} 
            className="btn main-btn delete-selected-btn">
                <i className="fa fa-minus"></i> <i className={[faClass]}></i>
            </button>
            
            {/* Add in bulk btn */}
            <button style={controlBtnStyle}
            disabled={!areSelected}
            onClick={addIdsTo} 
            className="btn main-btn add-selected-btn">
                <i className="fa fa-plus"></i> <i className={[faClass]}></i>
            </button>

        </div>
    )
}