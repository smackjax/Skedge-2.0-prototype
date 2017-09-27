import React from 'react';
import {bindActionCreators} from 'redux';

// Action creators
import GROUPACTS from '../../../../_redux/actions/group.actions';
import TASKACTS from '../../../../_redux/actions/task.actions';

// Components 
import ItemHeader from '../../_generics/_item-header/item-header.component';
import ItemDropdown from '../../_generics/_item-dropdown/item-dropdown.component';

import GroupsSublist from '../../_sublists/groups-sublist/groups-sublist.component';

// Styles 
import colors from '../../../_RESOURCES/colors';
import './task-item.style.css';


export default (props)=>{
    // props.item
    // props.isOpen
    
    // props.isSelected: bool
    // props.selectItemFunc()
    // props.toggleDropFunc()

    // isEditingName: bool
    // editNameFunc
    // clearEditNameFunc

    // props.dispatch
    
    const taskActions = bindActionCreators(TASKACTS, props.dispatch);
    const groupActions = bindActionCreators(GROUPACTS, props.dispatch);

    // Sets item to work with
    const task = props.item;
    
    // Sets unique id for dropdown handling
    const dropdownId = 'dropdown-'+ task.id;
    
    // - Event handlers
    const saveNameEdit = (taskId, newName)=>{
        taskActions.editName(taskId, newName);
        props.clearEditNameFunc();
    }
    // GROUP SUBLIST FUNCTIONS
    const addGroupToTask = (groupIds)=>{
        taskActions.addGroupsToTasks(groupIds, [task.id])
    }
    const deleteGroupsFromTask = (groupIds)=>{
        taskActions.deleteGroupsFromTasks(groupIds, [task.id]);
    }
    const updateGroupsOnTask = (groupIds)=>{
        // groupIds come from overlay
        taskActions.updateGroupsOnTasks(groupIds, [task.id]);
    }
    const handleIsExclusive = (e)=>{
        taskActions.setIsExclusive(task.id, e.target.checked);
    }
    const handleNumNeeded = (e)=>{
        taskActions.setNumNeeded(task.id, e.target.value);
    }

    
    return (
        <div className="page-item task-item">

            <ItemHeader 
            item={task}
            color={colors.task}

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
            <div style={{color: colors.task}} className="container">
                <div style={{borderBottomColor: colors.task}} className="form-group row task-advanced-gui-item num-needed">                    
                    
                    <label htmlFor="num-needed-input" 
                    className="col-7 col-form-label"># Needed</label>
                    <div className="col-5">
                        <input 
                        onChange={handleNumNeeded}
                        className="form-control" 
                        type="number" 
                        min="1"
                        max="5"
                        value={task.numNeeded} 
                        id="num-needed-input" />
                    </div>
                </div>
                <div style={{borderBottomColor: colors.task}} className="row task-advanced-gui-item">
                    <div className="form-check col-12">
                        <label className="form-check-label task-exclusive-label">
                        <input checked={task.isExclusive} onChange={handleIsExclusive} type="checkbox" className="form-check-input" />
                        &nbsp; Exclusive
                        </label>
                    </div>
                </div>
            </div>
                <GroupsSublist 
                selectedIds={task.groups} 
                updateFunc={updateGroupsOnTask} 
                mainColor={colors.task}
                />
                
            </ItemDropdown>

        </div>
    )
}