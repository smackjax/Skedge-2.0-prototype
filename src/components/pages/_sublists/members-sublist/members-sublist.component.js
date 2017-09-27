import React from 'react';

// Redux 
// Imports state to get objects from ids
// Doesn't 'connect' because no need for refresh on state change
import { bindActionCreators } from 'redux';
import reduxStore from '../../../../_redux/redux-store';
import UIACTIONS from '../../../../_redux/actions/ui.actions';

// Components
import GenericSublist from '../_generic-sublist/generic-sublist.component';

// Style
import colors from '../../../_RESOURCES/colors';

 
const MemberSublist = (props)=>{
        // Props from list item that get passed to sublist
    // props.selectedIds 
    // props.updateFunc()
        // For overlay
    // props.mainItemName
    // props.mainColor
    // props.mainFaClass

    const members = reduxStore.getState().membersById;
    const subColor = colors.member;

    return (
        <GenericSublist
        itemsById={members}
        subTitle='Members'
        subFaClass='user'
        subColor={subColor}
        {...props}
        />

    )
}
export default MemberSublist;