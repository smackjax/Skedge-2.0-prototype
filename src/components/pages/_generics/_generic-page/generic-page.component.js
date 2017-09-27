import React from 'react';
import { connect } from 'react-redux';


// Components
import PageHeader from '../_page-header/page-header.component';
import PageControls from '../_page-controls/page-controls.component';
import Dropdown from '../_item-dropdown/item-dropdown.component';
import AddNewBtn from '../_add-new-btn/add-new-btn.component';

// This component state controls and tracks item selections, 
// which item's name is being edited,
// and which item's dropdown is open.

// Because it's meant to be generic, I tried to keep
// from dispatching any Redux logic. The only function 
// that's called directly from here is 'addNew'.
// All others are just passed on to the item, 
// with functions for manipulating this state. 
class GenericPage extends React.Component{
    
    // props.mainColor
    // props.headTxt
    // props.headFaClass

    // props.controlsColor
    // props.controlsFaClass
    // props.deleteSelected()
    // props.addIdsTo()
    // props.removeIdsFrom()

    // props.ItemComponent
    // props.list
    // props.addNewFunc()
    // props.dispatch

    state={
        selectedIds: [],
        open: '',
        idOfNameEdit: '',
        isNewItem: false
    }

    addNewFunc(){
        // opens overlay to new item controls
        this.props.addNewFunc();
    }

    selectFunc(checkbox){
        const checked = checkbox.target.checked;
        const selected = this.state.selectedIds;
        const itemId = checkbox.target.value;

        if(checked && !selected.includes(itemId)){
            this.setState({selectedIds:[...selected, itemId]});
        } else if(!checked && selected.includes(itemId)) {
            const newSelected = selected.filter((cId)=>cId !== itemId);
            this.setState({selectedIds:newSelected});
        }
    }

    selectAllFunc(checkbox){
        if(checkbox.target.checked){
            const allIds = this.props.list.map(listItem=>listItem.id);
            this.setState({selectedIds: allIds} );
        } else {
            this.setState({selectedIds: [] });
        }
    }

    toggleDrop(itemId){
        
        return()=>{
            const current =  
            this.state.open === itemId ?
                '' : itemId;
            this.setState({open: current});
        }
    }

    changeNameEditId(itemId){
        // Closes any open dropdown
        // Clears selectedIds
        // sets name edit to id
        this.setState({
            headControlsOpen: false,
            open: '',
            selectedIds: [],
            idOfNameEdit: itemId
        });
    }
    clearNameEditId(){
        this.setState({idOfNameEdit: ''});
    }

    render(){
        // This looks cleaner
        const PageItem = this.props.ItemComponent;
        return(
            <div className={"page item-page container-fluid " + this.props.className}>
                
                    <PageHeader 
                    color={this.props.mainColor}
                    text={this.props.headTxt}
                    faClass={this.props.headFaClass}
                    />


                { // If there are functions for page controls
                // only open if there are selectedIds
                this.props.deleteSelected && this.props.addIdsTo && this.props.removeIdsFrom &&
                <PageControls 
                selectedIds={this.state.selectedIds}
                toggleSelectAll={this.selectAllFunc.bind(this)}
                deleteSelected={this.props.deleteSelected}
                addIdsTo={this.props.addIdsTo}
                removeIdsFrom={this.props.removeIdsFrom}

                faClass={this.props.controlsFaClass}
                color={this.props.controlsColor} />
                }

                { // Builds out item from list on this page(like 'members' or 'groups')
                // Uses the item component passed into props.ItemComponent
                this.props.list.map((item)=>{
                    // This component is passed in through props
                    return <PageItem 
                    key={item.id+'-k'}
                    item={item}
                    isOpen={item.id === this.state.open}

                    isSelected={this.state.selectedIds.includes(item.id)}
                    selectItemFunc={this.selectFunc.bind(this)}
                    toggleDropFunc={this.toggleDrop.bind(this)}

                    idOfNameEdit={ this.state.idOfNameEdit }
                    editNameFunc={this.changeNameEditId.bind(this)}
                    clearEditNameFunc={this.clearNameEditId.bind(this)}

                    dispatch={this.props.dispatch}
                    />
                })}

                { // If 'add new' function is passed in
                this.props.addNewFunc && !this.state.idOfNameEdit && 
                    <AddNewBtn 
                    color={this.props.mainColor}
                    onClick={this.addNewFunc.bind(this)} /> 
                }
            </div>
        )
    }
}

export default GenericPage;