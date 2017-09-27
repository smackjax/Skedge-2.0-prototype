import { MEMBER_ACT_TYPES as TYPE,
    GROUP_ACT_TYPES as GROUP_TYPES
} from './_ACTION_TYPES';

import {addItem, deleteItem, editItem, updateItem} from './_GENERIC.actions';

export default {
    addMember: (newMemb)=>{
        return (dispatch)=>{
            const action = {
                type: TYPE.ADD_MEMBER,
                newMemb
            }
            addItem(dispatch, action)
        }
    },

    deleteMembers: (membIdList)=>{
        return (dispatch)=>{
            const action = {
                type: TYPE.DELETE_MEMBERS,
                membIdList
            };
            deleteItem(dispatch, action);
        }
    },
    editName: (membId, newName)=>{
        return(dispatch)=>{
            const action = { 
                type: TYPE.EDIT_MEMBER_NAME,
                membId,
                newName
            }
            editItem(dispatch, action);
        }
    },

    // Group Sublist Action Creators
    updateGroupsSublist: (membIds, groupIds)=>{
        return (dispatch)=>{
            const action = {
                type: TYPE.UPDATE_GROUP_SUBLIST,
                membIds,
                groupIds
            }
            updateItem(dispatch, action);
        }
    },

    addToGroups: (membIds, groupIds)=>{
        return (dispatch)=>{
            const action = {
            type: GROUP_TYPES.ADD_MEMBERS_TO_GROUPS,
            membIds,
            groupIds
            }
            updateItem(dispatch, action);
        }
    },
    deleteFromGroups: (membIds, groupIds)=>{
        return (dispatch)=>{
            const action ={
            type: GROUP_TYPES.DELETE_MEMBERS_FROM_GROUPS,
            membIds,
            groupIds
            }
            updateItem(dispatch, action);
        }
    },

    addUnavailDates: (membId, datesArray)=>{
        return (dispatch)=>{
            const action = {
            type: TYPE.ADD_UNAVAIL_DATES,
            membId,
            datesArray
            }
            updateItem(dispatch, action);
        }
    },
    deleteUnavailDates: (membId, datesIndex)=>{
        return (dispatch)=>{
            const action = {
            type: TYPE.DELETE_UNAVAIL_DATES,
            membId,
            datesIndex
            }
            updateItem(dispatch, action);
        }
    }

}
