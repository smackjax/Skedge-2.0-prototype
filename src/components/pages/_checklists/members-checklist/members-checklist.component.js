import React from 'react';
import reduxStore from '../../../../_redux/redux-store';
import GenericChecklist from '../_simple-checklist/simple-checklist.component';
import colors from '../../../_RESOURCES/colors';

export default (props)=>{
    // props.selectedIds
    // props.onChange
    const members = reduxStore.getState().membersById;
    return <GenericChecklist 
    listObjs={members}
    color={colors.member}
    {...props}
    />
}