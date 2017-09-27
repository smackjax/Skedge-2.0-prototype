// Leaving the individual sublist update functions for the future ease.
// Switched to overwriting the whole list for ease of displaying/editing selection list

export const DATA_ACT_TYPES = {
    // TODO, loading data types aren't hooked up to any actions or reducers
    LOADING_DATA_START: 'loading_all_data',
    LOADING_DATA_SUCCESS: 'loading_all_data_success',
    LOADING_DATA_FAIL: 'loading_all_data_failed',
    LOADED_NO_DATA: 'no_local_data',

    LOAD : 'load_all_data',

    SAVING_STATE: 'begin_state_save',
    SAVING_STATE_FAIL: 'error_while_saving_state',
    SAVING_STATE_SUCCESS: 'saving_state_success',
    SAVE: 'save_all_data'
}

export const UI_ACT_TYPES={ 
    UPDATE_SELECTED: "update_slidedown_selected_list",
    CHANGE_SCHED_VIEW: 'update_sched_view_type',
    
    OPEN_OVERLAY: 'open_overlay_and_render_component',
    CLOSE_OVERLAY: 'close_overlay_and_unmount_component'
}

export const MEMBER_ACT_TYPES ={
    ADD_MEMBER : "add_member",
    DELETE_MEMBERS: "delete_multiple_member_ids",
    EDIT_MEMBER_NAME : "edit_member_name",
    
    // Overwrites group sublist
    UPDATE_GROUP_SUBLIST: 'overwrite_group_sublist_on_member',

    //Sublist action types
    DELETE_SUBLIST_ITEM: "delete_item_from_sublist_on_member",
    ADD_SUBLIST_ITEMS: "add_item_to_sublist_on_member",

    ADD_UNAVAIL_DATES: 'add_unavailable_dates_array',
    DELETE_UNAVAIL_DATES: 'delete_unavailable_dates_array'
};

export const GROUP_ACT_TYPES ={
    ADD_GROUP : "add_group",
    DELETE_GROUPS: 'delete_multiple_group_ids',
    EDIT_GROUP_NAME : "edit_group_name",
    UPDATE_MEMBERS_IN_GROUPS: "update_members_in_groups",
    // Sublist action types
    ADD_MEMBERS_TO_GROUPS: "add_member_ids_to_group_ids",
    DELETE_MEMBERS_FROM_GROUPS: "delete_member_ids_from_group_ids",
};

export const TASK_ACT_TYPES ={
    ADD_TASK : "add_task",
    DELETE_TASKS: 'delete_multiple_task_ids',
    EDIT_TASK_NAME : "edit_task_name",
    SET_IS_EXCLUSIVE: "set_task_is_exclusive",
    SET_NUM_NEEDED: "set_number_of_members_needed_on_task",
    // Sublist action types
    UPDATE_GROUPS_ON_TASKS: 'update_groupIds_on_taskIds',
    ADD_GROUPS_TO_TASKS: "add_group_ids_to_task_ids",
    DELETE_GROUPS_FROM_TASKS: "delete_group_ids_from_task_ids",
};

export const DAYS_ACT_TYPES={
    UPDATE_TASKS_ON_DAYS: "update_taskIds_list_on_dayIds",
    ADD_TASKS_TO_DAYS: "add_task_ids_to_days",
    DELETE_TASKS_FROM_DAYS: "delete_task_ids_from_days",
}

export const SCHED_ACT_TYPES={
    START_GEN_NEW: 'begin_new_sched_generation',
    SCHED_GEN_SUCCESS: 'new_sched_gen_successful',
    SCHED_GEN_FAIL: 'new_sched_gen_failure',
    CHANGE_ACTIVE_SCHED: 'change_active_sched_id',
}
