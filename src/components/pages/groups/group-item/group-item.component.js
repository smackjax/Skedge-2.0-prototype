import React from 'react';
import {bindActionCreators} from 'redux';

// Action creators
import MEMBACTS from '../../../../_redux/actions/member.actions';
import GROUPACTS from '../../../../_redux/actions/group.actions';

// Components 
import ItemHeader from '../../_generics/_item-header/item-header.component';
import ItemDropdown from '../../_generics/_item-dropdown/item-dropdown.component';

import MembersSublist from '../../_sublists/members-sublist/members-sublist.component';

// Styles 
import colors from '../../../_RESOURCES/colors';


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

    // Sets item to work with
    const group = props.item;
    
    // Sets unique id for dropdown handling
    const dropdownId = 'dropdown-'+ group.id;

    // - Event handlers
    const saveNameEdit = (groupId, newName)=>{
        groupActions.editName(groupId, newName);
        props.clearEditNameFunc();
    }

    // GROUPS FUNCTIONS
    const addMembToGroup = (mId)=>{
        groupActions.addMembersToGroups([group.id], [mId])
    }
    const deleteMembFromGroup = (mId)=>{
        groupActions.deleteMembersFromGroups([group.id], [mId]);
    }
    const updateMembersOnGroup = (membIds)=>{
        // MembIDs come from overlay 
        groupActions.updateMembersOnGroups(membIds, [group.id]);
    }


    
    return (
        <div className="page-item group-item">

            <ItemHeader 
            item={group}
            color={colors.group}

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

                <MembersSublist 
                selectedIds={group.members} 
                updateFunc={updateMembersOnGroup} 
                mainColor={colors.group}
                />
                
            </ItemDropdown>

        </div>
    )
}