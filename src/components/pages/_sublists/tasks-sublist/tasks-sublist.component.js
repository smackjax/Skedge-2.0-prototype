import React from 'react';

// Redux 
// Imports state to get objects from ids
// Doesn't 'connect' because no need for refresh on state change
import reduxStore from '../../../../_redux/redux-store';

// Components
import GenericSublist from '../_generic-sublist/generic-sublist.component';

// Style
import colors from '../../../_RESOURCES/colors';

 
const TasksSublist = (props)=>{
        // Props from list item that get passed to sublist
    // props.selectedIds 
    // props.updateFunc()
        // For overlay
    // props.mainItemName
    // props.mainColor
    // props.mainFaClass

    const groups = reduxStore.getState().tasksById;
    const subColor = colors.task;

    return (
        <GenericSublist
        itemsById={groups}
        subTitle='Tasks'
        subFaClass='list'
        subColor={subColor}
        {...props}
        />

    )
}
export default TasksSublist;