import React from 'react';


import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { createNewGroupObj } from '../../../_redux/_NEW_ITEM_CREATORS';
import GROUP_ACTS from '../../../_redux/actions/group.actions'
import TASK_ACTS from '../../../_redux/actions/task.actions';
import UI_ACTS from '../../../_redux/actions/ui.actions'

// Functions
import objToArr from '../../_FUNCTIONS/objToArr';

// Components
import SelectOverlayItems from '../../overlay/select-overlay-items/select-overlay-items.component';
import Page from '../_generics/_generic-page/generic-page.component';
import AddNewItem from '../../overlay/add-new-item/add-new-item.component';
import GroupItem from './group-item/group-item.component';

// Style
import colors from '../../_RESOURCES/colors';


const GroupsPage = (props)=>{
    const groupActions = bindActionCreators(GROUP_ACTS, props.dispatch);
    const taskActions = bindActionCreators(TASK_ACTS, props.dispatch);
    const uiActions = bindActionCreators(UI_ACTS, props.dispatch);
    const groupList = objToArr(props.groups);


    // Opening the overlay takes a component to render
    const openOverlaySelectList = (confirmFunc, idsToAdd, headFaClass)=>{
        const compToRender = 
        < SelectOverlayItems 
        itemsById={props.groups}
        cancel={uiActions.closeOverlay}
        confirm={confirmFunc}     

        idsToAdd={idsToAdd}
        mainColor={colors.group}
        subColor={colors.task}
        headFaClass={headFaClass}
        />;
        uiActions.openOverlay(compToRender);
    }

    const addNewGroup = ()=>{ 
        const addNewCallBack = (name)=>{
            const newGroup = createNewGroupObj(name);
            groupActions.addGroup(newGroup);
            uiActions.closeOverlay();
        }
        const compToRender = <AddNewItem
            confirm={addNewCallBack}
            cancel={uiActions.closeOverlay}
            color={colors.group}
            faClass="group"
            placeholderTxt="(Cannon swabbers)"
        />
        uiActions.openOverlay(compToRender)
    };

    const deleteGroups = (groupIds)=>{ 
        groupActions.deleteGroupBulk(groupIds);
    };
    const addGroupsToTasks = (groupIds)=>{ 
        const addGroupsCallback = (taskIds)=>{
            taskActions.addGroupsToTasks(groupIds, taskIds);
            uiActions.closeOverlay();
        }
        openOverlaySelectList(addGroupsCallback, groupIds, 'plus');
    };
    const removeGroupsFromTasks = (groupIds)=>{
        const removeGroupsCallback = (taskIds)=>{
            taskActions.deleteGroupsFromTasks(groupIds, taskIds);
            uiActions.closeOverlay();
        }
        openOverlaySelectList(removeGroupsCallback, groupIds, 'minus');
     };

        return(
            <Page 
            className="groups" 

            mainColor={colors.group}
            headTxt='GROUPS'            
            headFaClass='group'

            controlsColor={colors.task}
            controlsFaClass='list'
            deleteSelected={deleteGroups}
            addIdsTo={addGroupsToTasks}
            removeIdsFrom={removeGroupsFromTasks}

            ItemComponent={GroupItem}
            list={groupList}
            addNewFunc={addNewGroup}
            dispatch={props.dispatch}
            />
        )
}

export default connect(
    (state)=>{
        return {
            groups: state.groupsById
        }
    }
)(GroupsPage);