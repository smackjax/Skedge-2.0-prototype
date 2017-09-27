import React from 'react';


// Redux
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import {createNewMemberObj} from '../../../_redux/_NEW_ITEM_CREATORS';
import MEMBER_ACTS from '../../../_redux/actions/member.actions';
import UI_ACTS from '../../../_redux/actions/ui.actions';

// Functions
import objToArr from '../../_FUNCTIONS/objToArr';

// Components
import Page from '../_generics/_generic-page/generic-page.component';
import AddNewItem from '../../overlay/add-new-item/add-new-item.component';
import MemberItem from './member-item/member-item.component';
import SelectOverlayItems from '../../overlay/select-overlay-items/select-overlay-items.component';

// Style
import colors from '../../_RESOURCES/colors';


const MembersPage = (props)=>{
    const memberActions = bindActionCreators(MEMBER_ACTS, props.dispatch);
    const uiActions = bindActionCreators(UI_ACTS, props.dispatch);

    const memberList = objToArr(props.members);

    // Opening the overlay takes a component to render
    const openOverlaySelectList = (confirmFunc, idsToAdd, headFaClass)=>{
        // itemsById
        // cancel()
        // confirm()
        const compToRender = 
        < SelectOverlayItems 
        itemsById={props.groups}
        cancel={uiActions.closeOverlay}
        confirm={confirmFunc}     
        idsToAdd={idsToAdd}
        mainColor={colors.member}
        subColor={colors.group}
        headFaClass={headFaClass}
        />;
        uiActions.openOverlay(compToRender);
    }


    const addNewMember = ()=>{ 
        const addNewCallBack = (name)=>{
            const newMemb = createNewMemberObj(name);
            memberActions.addMember(newMemb);
            uiActions.closeOverlay();
        }
        const compToRender = <AddNewItem
            confirm={addNewCallBack}
            cancel={uiActions.closeOverlay}
            color={colors.member}
            faClass="user"
            placeholderTxt="(Blackbeard)"
        />
        uiActions.openOverlay(compToRender)
    };
    
    const deleteMembers = (membIds)=>{ 
        memberActions.deleteMembers(membIds);
    };

    const addMembsToGroups = (membIds)=>{ 
        const addMembsCallBack = (groupIds)=>{
            memberActions.addToGroups(membIds, groupIds);
            uiActions.closeOverlay();
        };
        openOverlaySelectList(addMembsCallBack, membIds, 'plus')
    };

    const removeMembsFromGroups = (membIds)=>{ 
        const removeMembsCallBack = (groupIds)=>{
            memberActions.deleteFromGroups(membIds, groupIds);
            uiActions.closeOverlay();
        };
        openOverlaySelectList(removeMembsCallBack, membIds, 'minus')
    };

    

        return(
            <Page 
            className="members" 

            mainColor={colors.member}
            headTxt='MEMBERS'            
            headFaClass='user'

            controlsColor={colors.group}
            controlsFaClass='group'
            deleteSelected={deleteMembers}
            addIdsTo={addMembsToGroups}
            removeIdsFrom={removeMembsFromGroups}

            ItemComponent={MemberItem}
            list={memberList}
            addNewFunc={addNewMember}
            dispatch={props.dispatch}
            />
        )
}

export default connect(
    (state)=>{
        return {
            members: state.membersById,
            groups: state.groupsById
        }
    }
)(MembersPage);