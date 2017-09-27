import React from 'react';
import objToArr from '../../_FUNCTIONS/objToArr';
import makeNameIdArray from '../../_FUNCTIONS/makeNameIdArray';

// Components
import SelectHeader from './select-items-header/select-items-header.component';
import Checklist from '../../pages/_checklists/simple-checklist/simple-checklist.component';

import SelectControls from './select-items-controls/select-items-controls.component';
//Style 
import './select-overlay-items.style.css';

export default class SelectItems extends React.Component {
    /*  Manages it's own state, 
        populates initial checked boxes by props.selectedIds 
    */
    // props.itemsById
    // props.selectedIds
    // cancel()
    // confirm()

    // mainColor
    // idsToAdd
    // subColor
    
    
    state = {
        listItems: [],
        selectedIds: []
    }
    componentWillMount(){
        // Extracts only names and ids from objs
        const listItems = makeNameIdArray(this.props.itemsById);
        this.setState({
            // Initialize selected with id's already on item
            selectedIds: this.props.selectedIds || [],
            listItems
        });
    }
    handleSelect(e){
        const box = e.target;
        const newSelected = box.checked ?
            [...this.state.selectedIds, box.value] :
                this.state.selectedIds.filter((itemId)=>
                    itemId !== box.value 
                );
        this.setState({selectedIds: newSelected});
    }

    confirm(){
        this.props.confirm(this.state.selectedIds);
    }
    render(){
        // TODO fix this        
        
        const reverse = this.props.addingToSublist;
        const fNum = reverse ? 
            this.state.selectedIds.length : this.props.idsToAdd.length || 0;
        const fColor = reverse ? 
            this.props.subColor : this.props.mainColor;
        const sNum = reverse ? 
            this.props.idsToAdd ? this.props.idsToAdd.length  : 1 : this.state.selectedIds.length;
        const sColor = reverse ? 
            this.props.mainColor : this.props.subColor ;

        return(
            <div className='container select-subgroup-items'>
                <SelectHeader 
                firstNum={fNum}
                firstNumColor={fColor}
                secondNum={sNum}
                secondNumColor={sColor}
                headFaClass={this.props.headFaClass}
                />

                <Checklist 
                listObjs={this.props.itemsById}
                selectedIds={this.state.selectedIds}
                onChange={this.handleSelect.bind(this)}
                color={this.props.subColor}
                dontSort={this.props.dontSort}
                />

                <SelectControls
                confirm={this.confirm.bind(this)}
                cancel={this.props.cancel}
                />
                    
            </div>
            
        )
    }
}