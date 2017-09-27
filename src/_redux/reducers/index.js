import {combineReducers} from 'redux';
import membersById from './members.reducer';
import groupsById from './groups.reducer';
import tasksById from './tasks.reducer';
import daysOfWeek from './daysOfWeek.reducer';

import schedsById from './schedsById.reducer'; 
import ui from './ui.reducer';

export default combineReducers({
    ui,
    schedsById,
    membersById,
    groupsById,
    tasksById,
    daysOfWeek
});