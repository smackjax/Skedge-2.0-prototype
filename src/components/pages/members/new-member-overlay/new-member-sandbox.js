import React from 'react';
import uniqid from 'uniqid';

// Redux
import reduxStore from '../../../../_redux/redux-store';
import { createNewMemberObj } from '../../../../_redux/_NEW_ITEM_CREATORS';
import MEMBER_ACTS from '../../../../_redux/actions/member.actions';

// Components 
import ItemDropdown from '../../_generics/_item-dropdown/item-dropdown.component';
import GroupsChecklist from '../../_checklists/groups-checklist/groups-checklist.component';

import UnavailDatesList from '../member-item/unavailable-dates/unavail-date-list/unavail-date-list.component';
import UnavailDateControls from '../member-item/unavailable-dates/unavail-date-controls/unavail-date-controls.component';

// Styles 
import colors from '../../../_RESOURCES/colors';

export default class NewMemberItem extends React.Component{
    // props.closeOverlay

    // TODO it would be nice to have the complete controls available on item creation,
    // not just name
    state={
        id: uniqid('m-'),
        name: '',
        unavailableDates: [],
        groups: [],
        timesAssigned: 0
    }
    confirmNew(){
        // Grabs relevant props from state and creates new member
        const newMember = createNewMemberObj(this.state);
        // Adds member to redux
        reduxStore.dispatch(MEMBER_ACTS.addMember(newMember));
        this.props.closeOverlay();
    }
    cancel(){
        // Closes overlay and unmounts component
        this.props.closeOverlay();
    }

    handleName(e){
        this.setState({name: e.target.value});
    }
    updateGroups(e){
        const checkbox = e.target;
        // Always filtering id eliminates duplicates
        const newGroups = this.state.groups.filter(gId=>gId !== checkbox.value); 
        if(checkbox.checked) {
            newGroups.push(checkbox.value);
        }
        this.setState({groups: newGroups});
    }
    
    render(){
        return (
        <div className="new-item-page new-member-item">
            <div style={{backgroundColor: colors.member, color: '#efefef'}} className="new-item-header">
                <i className="fa fa-plus"></i>&nbsp;
                <i className="fa fa-user"></i>
            </div>

            <div className="container">
                <div className="form-group row">
                    <label htmlFor="new-member-name" className="col-2 col-form-label">Name: </label>
                    <div className="col-10">
                        <input 
                        onChange={this.handleName.bind(this)}
                        className="form-control" 
                        type="text" value={this.state.name} 
                        placeholder="Jane Smith" 
                        id="new-member-name"/>
                    </div>
                </div>
                <div className="row new-item-checklist">
                    <div 
                    style={{
                        color: colors.group, 
                        fontSize: '1.2rem', 
                        borderBottom: '1px solid '+colors.group, 
                        marginBottom: '5px' 
                    }} 
                    className="col-12 new-item-checklist-header" >
                        <i className="fa fa-groups"></i> Groups
                    </div>
                    <div className="col-12"> 
                        <GroupsChecklist
                        onChange={this.updateGroups.bind(this)}
                        selectedIds={this.state.groups}
                        />
                    </div>
                </div>          
                
                <div className="row">
                    <button onClick={this.props.closeOverlay} 
                    className="btn btn-danger col-5">
                        <i className="fa fa-times"></i>
                    </button>
                    <button 
                    disabled={this.state.name === ''}
                    style={{backgroundColor: colors.member, color: '#efefef'}} 
                    onClick={this.confirmNew.bind(this)} 
                    className="btn offset-1 col-6">
                        <i className="fa fa-check"></i> <i className="fa fa-user"></i>
                    </button>
                </div>
            </div>
        </div>
        )
    }
}