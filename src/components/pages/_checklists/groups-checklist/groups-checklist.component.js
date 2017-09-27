import React from 'react';

import reduxStore from '../../../../_redux/redux-store';
import GenericChecklist from '../simple-checklist/simple-checklist.component';
import colors from '../../../_RESOURCES/colors';

export default (props)=>{
    // props.selectedIds
    // props.onChange
    const groups = reduxStore.getState().groupsById;
    return <GenericChecklist 
    listObjs={groups}
    color={colors.group}
    {...props}
    />
}