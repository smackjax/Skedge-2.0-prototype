import { GROUP_ACT_TYPES as TYPE} from './_ACTION_TYPES';
import {addItem, deleteItem, editItem, updateItem} from './_GENERIC.actions';

export default {
    addGroup: (newGroup)=>{
        return (dispatch)=>{
            const action = {
                type: TYPE.ADD_GROUP,
                newGroup
            }
            addItem(dispatch, action);
        }
    },
    deleteGroupBulk: (groupIdList)=>{
        return (dispatch)=>{
            const action = {
                type: TYPE.DELETE_GROUPS,
                groupIdList
            }
            deleteItem(dispatch, action);
        }
    },
    editName: (groupId, newName)=>{
        return (dispatch)=>{
            const action = { 
                type: TYPE.EDIT_GROUP_NAME,
                groupId,
                newName
            }
            editItem(dispatch, action);
        }
    },
    updateMembersOnGroups: (membIds, groupIds)=>{
        return (dispatch)=>{
        const action = {
                type: TYPE.UPDATE_MEMBERS_IN_GROUPS,
                membIds,
                groupIds
            }
            updateItem(dispatch, action);
        }
    },
    addMembersToGroups: (membIds, groupIds)=>{
        return (dispatch)=>{
            const action = {
                type: TYPE.ADD_MEMBERS_TO_GROUPS,
                membIds,
                groupIds
            }
            updateItem(dispatch, action);
        }
    },
    deleteMembersFromGroups: (membIds, groupIds)=>{
        return (dispatch)=>{
            const action = {
                type: TYPE.DELETE_MEMBERS_FROM_GROUPS,
                membIds,
                groupIds
            }
            updateItem(dispatch, action);
        }
    },

}