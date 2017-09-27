import { TASK_ACT_TYPES as TYPE} from './_ACTION_TYPES';
import {addItem, deleteItem, editItem, updateItem} from './_GENERIC.actions';

export default {
    addTask: (newTask)=>{
        return (dispatch)=>{
           const action = {
                type: TYPE.ADD_TASK,
                newTask
            }
            addItem(dispatch, action);
        }
    },
    deleteTaskIds: (taskIdList)=>{
        return (dispatch)=>{
            const action =  {
                type: TYPE.DELETE_TASKS,
                taskIdList
            }
            deleteItem(dispatch, action);
        }
    },
    editName: (taskId, newName)=>{
        return (dispatch)=>{
            const action = { 
                type: TYPE.EDIT_TASK_NAME,
                taskId,
                newName
            }
            editItem(dispatch, action);
        }
    },
    setIsExclusive: (taskId, isExclusive)=>{
        return (dispatch)=>{
            const action =  {
                type: TYPE.SET_IS_EXCLUSIVE,
                taskId,
                isExclusive
            }
            updateItem(dispatch, action);
        }
    },
    setNumNeeded: (taskId, numNeeded)=>{
        return (dispatch)=>{
            const action =  {
                type: TYPE.SET_NUM_NEEDED,
                taskId,
                numNeeded
            }
            updateItem(dispatch, action);
        }
    },
    updateGroupsOnTasks: (groupIds, taskIds)=>{
        return (dispatch)=>{
            const action =  {
                type: TYPE.UPDATE_GROUPS_ON_TASKS,
                groupIds,
                taskIds
            }
            updateItem(dispatch, action);
        }
    },
    addGroupsToTasks: (groupIds, taskIds)=>{
        return (dispatch)=>{
            const action =  {
                type: TYPE.ADD_GROUPS_TO_TASKS,
                groupIds,
                taskIds
            }
            updateItem(dispatch, action);
        }
    },
    deleteGroupsFromTasks: (groupIds, taskIds)=>{
        return (dispatch)=>{
            const action =  {
                type: TYPE.DELETE_GROUPS_FROM_TASKS,
                groupIds,
                taskIds
            }
            updateItem(dispatch, action);
        }
    },
}