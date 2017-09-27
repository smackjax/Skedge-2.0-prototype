import React from 'react';
import {bindActionCreators} from 'redux';

// Action creators
import MEMBACTS from '../../../../_redux/actions/member.actions';
import GROUPACTS from '../../../../_redux/actions/group.actions';
import UIACTS from '../../../../_redux/actions/ui.actions'

// Components 
import ItemHeader from '../../_generics/_item-header/item-header.component';
import ItemDropdown from '../../_generics/_item-dropdown/item-dropdown.component';
import SelectOverlayItems from '../../../overlay/select-overlay-items/select-overlay-items.component'; 

import UnavailDatesSublist from './unavailable-dates/unavailable-dates.component';
import UnavailDateControls from './unavailable-dates/unavail-date-controls/unavail-date-controls.component';

import GroupsSublist from '../../_sublists/groups-sublist/groups-sublist.component';


// Styles 
import colors from '../../../_RESOURCES/colors';
import './member-item.style.css';

export default (props)=>{
    // props.isOpen
    
    // props.isSelected: bool
    // props.selectItemFunc()
    // props.toggleDropFunc()

    // isEditingName: bool
    // editNameFunc
    // clearEditNameFunc

    // props.dispatch
    
    const membActions = bindActionCreators(MEMBACTS, props.dispatch);
    const groupActions = bindActionCreators(GROUPACTS, props.dispatch);
    const uiActions = bindActionCreators(UIACTS, props.dispatch);
    // Sets item to work with
    const member = props.item;
    
    // Sets unique id for dropdown handling
    const dropdownId = 'dropdown-'+ member.id;

    // - Event handlers
    const saveNameEdit = (membId, newName)=>{
        membActions.editName(membId, newName);
        props.clearEditNameFunc();
    }

    // GROUPS FUNCTIONS
    const addMembToGroup = (gId)=>{
        groupActions.addMembersToGroups([member.id], [gId])
    }
    const deleteMembFromGroup = (gId)=>{
        groupActions.deleteMembersFromGroups([member.id], [gId]);
    }
    const updateGroupSublistOnMemb = (groupIds)=>{
        membActions.updateGroupsSublist([member.id], groupIds);
    }

    // UNAVAILABLE DATES FUNCTIONS
    const openAddDateControls = ()=>{
        const compToRender = 
            <UnavailDateControls 
            membId={member.id}
            onChange={deleteDates}
            confirmFunc={addDates}
            closeOverlay={uiActions.closeOverlay}
            />;
        uiActions.openOverlay(compToRender);
    }

    const addDates = (datesArray)=>{
       membActions.addUnavailDates(member.id, datesArray);
    };

    const deleteDates = (datesIndex)=>{
        return ()=>{
            membActions.deleteUnavailDates(member.id, datesIndex);
        }
    };

    
    return (
        <div className="page-item member-item">

            <ItemHeader 
            item={member}
            color={colors.member}

            isOpen={props.isOpen}
            toggleDropFunc={props.toggleDropFunc}

            isSelected={props.isSelected}
            selectFunc={props.selectItemFunc}
            
            idOfNameEdit={props.idOfNameEdit}   
            editNameFunc={props.editNameFunc}
            saveNameFunc={saveNameEdit}
            />

            <ItemDropdown 
            id={dropdownId} 
            isOpen={props.isOpen} >
          
                <UnavailDatesSublist
                unavailDates={member.unavailableDates}
                addDates={openAddDateControls}
                deleteDates={deleteDates} />

                <GroupsSublist 
                selectedIds={member.groups} 
                updateFunc={updateGroupSublistOnMemb} 
                mainColor={colors.member}
                />
                
            </ItemDropdown>

        </div>
    )
}