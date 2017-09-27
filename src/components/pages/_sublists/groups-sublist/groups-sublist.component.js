import React from 'react';

// Redux 
// Imports state to get objects from ids
// Doesn't 'connect' because no need for refresh on state change
import { bindActionCreators } from 'redux';
import reduxStore from '../../../../_redux/redux-store';

// Components
import GenericSublist from '../_generic-sublist/generic-sublist.component';

// Style
import colors from '../../../_RESOURCES/colors';

 
const GroupSublist = (props)=>{
        // Props from list item that get passed to sublist
    // props.selectedIds 
    // props.updateFunc()
        // For overlay

    // props.mainColor


    const groups = reduxStore.getState().groupsById;
    const subColor = colors.group;

    return (
        <GenericSublist
        itemsById={groups}
        subTitle='Groups'
        subFaClass='group'
        subColor={subColor}
        {...props}
        />

    )
}
export default GroupSublist;