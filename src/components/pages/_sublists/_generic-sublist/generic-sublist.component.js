import React from 'react';

// Redux 
import {bindActionCreators} from 'redux';
import reduxStore from '../../../../_redux/redux-store';
import UIACTIONS from '../../../../_redux/actions/ui.actions';
import colors from '../../../_RESOURCES/colors';

import SelectOverlayItems from '../../../overlay/select-overlay-items/select-overlay-items.component';

// Styles
import './generic-sublist.style.css';
 
const GenericSublist = (props)=>{
    // props.itemsById
    // props.selectedIds
    // props.updateFunc()
    // props.mainColor
    // props.subTitle
    // props.subFaClass
    // props.subColor

    const uiActions = bindActionCreators(UIACTIONS, reduxStore.dispatch);

    // Creates array of objects that item current has assigned
    const assignedItemsList = props.selectedIds.map(
        itemId=>{ return{...props.itemsById[itemId]} }
    );


    // Wraps the item confirm function to close overlay
    const confirmSelect = (selectedIds)=>{
        props.updateFunc(selectedIds);
        uiActions.closeOverlay();
    }

    // Opening the overlay takes a component to render
    const openOverlaySelectList = ()=>{
        const compToRender = 
        < SelectOverlayItems 
        {...props}
        cancel={uiActions.closeOverlay}
        confirm={confirmSelect}        
        
        addingToSublist={true}
        
        />;
        uiActions.openOverlay(compToRender);
    }

    // Sets faClass for this sublist
    const faClass = "fa fa-" + props.subFaClass;
    const subColor = props.subColor;
    return (
        <div className="sublist-wrapper">
            <div className='sublist-header'>
                <span className='sublist-title' style={{color: subColor}}>
                    { props.subTitle }
                </span>
                <button 
                onClick={openOverlaySelectList} 
                style={{backgroundColor: subColor, color: '#efefef'}}
                className='btn'
                >
                   <i className="fa fa-pencil"></i>&nbsp;&nbsp;<i className={faClass}></i>
                </button>
            </div>

            <div className="sublist">
                {assignedItemsList.map((item)=>{
                    return (
                    <div key={item.id} style={{borderColor: subColor}} className="sublist-item">
                        <span style={{color: subColor}}>{item.name}</span>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}
export default GenericSublist;