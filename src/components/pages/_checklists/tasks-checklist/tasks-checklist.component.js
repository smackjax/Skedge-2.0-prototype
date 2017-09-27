import React from 'react';
import reduxStore from '../../../../_redux/redux-store';
import GenericChecklist from '../_simple-checklist/simple-checklist.component';
import colors from '../../../_RESOURCES/colors';

export default (props)=>{
    // props.selectedIds
    // props.onChange
    const tasks = reduxStore.getState().tasksById;
    return <GenericChecklist
    listObjs={tasks}
    color={colors.member}
    {...props}
    />
}