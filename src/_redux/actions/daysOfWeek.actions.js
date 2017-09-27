import { DAYS_ACT_TYPES } from './_ACTION_TYPES';
import {addItem, deleteItem, editItem, updateItem} from './_GENERIC.actions';

export default {
    updateTasksOnDays: (taskIds, dayIds)=>{
        return (dispatch)=>{
            const action = {
                type: DAYS_ACT_TYPES.UPDATE_TASKS_ON_DAYS,
                taskIds,
                dayIds
            }
            updateItem(dispatch, action);
        }
    },


    addToTasks: (dayIdList, taskIdList)=>{
        return (dispatch)=>{
            const action = {
                type: DAYS_ACT_TYPES.ADD_TASKS_TO_DAYS,
                dayIdList,
                taskIdList 
            }
            updateItem(dispatch, action);
        }
    },
    deleteFromTasks: (dayIdList, taskIdList)=>{
        return (dispatch)=>{
            const action =  {
                type: DAYS_ACT_TYPES.DELETE_TASKS_FROM_DAYS,
                dayIdList,
                taskIdList
            }
            updateItem(dispatch, action);
        }
    },


}