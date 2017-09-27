import React from 'react';

// Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createNewTaskObj } from '../../../_redux/_NEW_ITEM_CREATORS';
import TASK_ACTS from '../../../_redux/actions/task.actions';
import DAY_ACTS from '../../../_redux/actions/daysOfWeek.actions';
import UI_ACTS from '../../../_redux/actions/ui.actions';


// Functions
import objToArr from '../../_FUNCTIONS/objToArr';

// Components
import Page from '../_generics/_generic-page/generic-page.component';
import AddNewItem from '../../overlay/add-new-item/add-new-item.component';
import SelectOverlayItems from '../../overlay/select-overlay-items/select-overlay-items.component';
import TaskItem from './task-item/task-item.component';

// Style
import colors from '../../_RESOURCES/colors';


const TasksPage = (props)=>{
    const taskActions = bindActionCreators(TASK_ACTS, props.dispatch);
    const dayActions = bindActionCreators(DAY_ACTS, props.dispatch);
    const uiActions = bindActionCreators(UI_ACTS, props.dispatch);

    const taskList = objToArr(props.tasks);

    // Opening the overlay takes a component to render
    const openOverlaySelectList = (confirmFunc, idsToAdd, headFaClass)=>{
        // itemsById
        // cancel()
        // confirm()
        const compToRender = 
        < SelectOverlayItems 
        itemsById={props.days}
        cancel={uiActions.closeOverlay}
        confirm={confirmFunc}     

        idsToAdd={idsToAdd}
        mainColor={colors.task}
        subColor={colors.day}
        headFaClass={headFaClass}
        dontSort={true}

        />;
        uiActions.openOverlay(compToRender);
    }
    
    const addNewTask = ()=>{
        const addNewCallBack = (name)=>{
            const newTask= createNewTaskObj(name);
            taskActions.addTask(newTask);
            uiActions.closeOverlay();
        }
        const compToRender = <AddNewItem
            confirm={addNewCallBack}
            cancel={uiActions.closeOverlay}
            color={colors.task}
            faClass="list"
            placeholderTxt="(Swab Cannons)"
        />
        uiActions.openOverlay(compToRender)
    };
    const deleteTasks = (taskIds)=>{ 
        taskActions.deleteTaskIds(taskIds);
    };
    const addTasksToDays = (taskIds)=>{ 
        const addTasksCallback = (dayIds)=>{
            dayActions.addToTasks(dayIds, taskIds)
            uiActions.closeOverlay();
        };
        openOverlaySelectList(addTasksCallback, taskIds, 'plus')
     };
    const removeTasksFromDays = (taskIds)=>{ 
        const removeTasksCallback = (dayIds)=>{
            dayActions.deleteFromTasks(dayIds, taskIds)
            uiActions.closeOverlay();
        };
        openOverlaySelectList(removeTasksCallback, taskIds, 'minus')
    };

        return(
            <Page 
            className="tasks" 

            mainColor={colors.task}
            headTxt='TASKS'            
            headFaClass='list'

            controlsColor={colors.day}
            controlsFaClass='calendar-o'
            deleteSelected={deleteTasks}
            addIdsTo={addTasksToDays}
            removeIdsFrom={removeTasksFromDays}

            ItemComponent={TaskItem}
            list={taskList}
            addNewFunc={addNewTask}
            dispatch={props.dispatch}
            />
        )
}

export default connect(
    (state)=>{
        return {
            tasks: state.tasksById,
            days: state.daysOfWeek
        }
    }
)(TasksPage);