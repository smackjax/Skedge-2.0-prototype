import React from 'react';
import {bindActionCreators} from 'redux';

// Action creators
import TASKACTS from '../../../../_redux/actions/task.actions';
import DAYACTS from '../../../../_redux/actions/daysOfWeek.actions';

// Components 
import ItemHeader from '../../_generics/_item-header/item-header.component';
import ItemDropdown from '../../_generics/_item-dropdown/item-dropdown.component';

import TasksSublist from '../../_sublists/tasks-sublist/tasks-sublist.component';

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
    
    const taskActions = bindActionCreators(TASKACTS, props.dispatch);
    const dayActions = bindActionCreators(DAYACTS, props.dispatch);

    // Sets item to work with
    const day = props.item;
    
    // Sets unique id for dropdown handling
    const dropdownId = 'dropdown-'+ day.id;

    // TASKS ON DAY FUNCTIONS
    const addTasksToDays = (taskIds)=>{
        dayActions.addToTasks([day.id], taskIds);
    }
    const deleteTaskFromDay = (taskIds)=>{
        dayActions.deleteFromTasks([day.id], taskIds);
    }
    const updateTasksOnDays = (taskIds)=>{
        // taskIds come from overlay 
        dayActions.updateTasksOnDays(taskIds, [day.id]);
        console.log(taskIds);
    }
    
    return (
        <div className="page-item day-item">

            <ItemHeader 
            item={day}
            color={colors.day}

            isOpen={props.isOpen}
            toggleDropFunc={props.toggleDropFunc}

            />

            <ItemDropdown 
            id={dropdownId} 
            isOpen={props.isOpen} >

                <TasksSublist 
                selectedIds={day.tasks} 
                updateFunc={updateTasksOnDays} 
                mainColor={colors.day}
                />
                
            </ItemDropdown>

        </div>
    )
}