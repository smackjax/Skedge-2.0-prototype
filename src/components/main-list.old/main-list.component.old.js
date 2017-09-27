import React from 'react';
import './main-list.css';

import MainListItem from './main-list-item/main-list-item.component';

// TODO NOTE It may only be needed to have one sublist at any time.
    // (Array may not be needed)

// props.mainList = [{name, id, sublists: [{list:[]}]}, ...]
// props.addBtnTxt = 'TASK' 
// props.addBulkFunc
// props.deleteBulkFunc
export default class MainList extends React.Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state={
            selectedIds :[]
        };
        this.deleteSelected = this.deleteSelected.bind(this);
        this.addSelected = this.addSelected.bind(this);
        this.removeSelectedFromMain = this.removeSelectedFromMain.bind(this);
        this.toggleAllSelect = this.toggleAllSelect.bind(this);
        this.idControlFunc = this.idControlFunc.bind(this);
        this.toggleItem = this.toggleItem.bind(this);
    }
    idControlFunc(checkbox){
        const check = checkbox.target.checked;
        const selected = this.state.selectedIds;
        const itemId = checkbox.target.value;
        if(check && !selected.includes(itemId)){
            this.setState({selectedIds:[...selected, itemId]});
        } else if(!check && selected.includes(itemId)) {
            const newSelected = selected.filter((cId)=>cId !== itemId);
            this.setState({selectedIds:newSelected});
        }
    }
    toggleAllSelect(checkbox){
        if(checkbox.target.checked){
            const allIds = this.props.mainList.map(listItem=>listItem.id);
            this.setState({selectedIds: allIds} );
        } else {
            this.setState({selectedIds: [] });
        }
    }
    deleteSelected(){
        this.props.deleteBulkFunc(this.state.selectedIds);
        this.setState({selectedIds: []});
    }
    addSelected(){
        this.props.addItemsTo(this.state.selectedIds);
    }
    removeSelectedFromMain(){
        this.props.deleteItemsFrom(this.state.selectedIds);
    }
    
    toggleItem(itemKey){
        if(this.state.currentItem === itemKey){
            this.setState({currentItem: ''});
        } else {
            this.setState({currentItem: itemKey});
        }
    }

    render(){
        //Captures if there are ids selected
        const areIds = this.state.selectedIds.length > 0 ? true : false;
        const mainBtnStyle = areIds ? 
            {backgroundColor: this.props.addBulkColor, color:'#fff', cursor: 'pointer'} : 
                {color:this.props.addBulkColor, backgroundColor: '#ddd'}
        const deleteBtnStyle = areIds ? 
            {backgroundColor: '#C13434', color: '#fff', cursor: 'pointer'} : 
                {backgroundColor: '#ddd', color: '#C13434'};

        const doNothing = ()=>{console.log('No ids selected')};
        const deleteIdsF = areIds ? this.deleteSelected : doNothing;
        const addIdsBtnF = areIds ? this.addSelected : doNothing;
        const deleteIdsBtnF = areIds ? this.removeSelectedFromMain : doNothing;
        const faClass = 'fa fa-'+this.props.faClass;

        


        return(
            <div className="main-list-wrapper">

                { this.props.noSelect ? ''
                 :
                 <div className="main-list-header">
                    {/* Delete main items in bulk btn */}
                    <button style={deleteBtnStyle} onClick={deleteIdsF} className="btn main-btn delete-btn">
                        <i className="fa fa-trash"></i>
                    </button>

                    {/* Select/deselect all checkbox */}
                    <input onChange={this.toggleAllSelect} type="checkbox" className="select-all-check"/>
                    {/* <span className="number-selected-ids">{(this.state.selectedIds.length)}</span> */}

                    {/* Delete from sublist in bulk btn */}
                    <button style={mainBtnStyle} 
                    onClick={deleteIdsBtnF} 
                    className="btn main-btn delete-selected-btn">
                        <i className="fa fa-minus"></i> <i className={[faClass]}></i>
                    </button>
                    
                    {/* Add in bulk btn */}
                    <button style={mainBtnStyle} 
                    onClick={addIdsBtnF} 
                    className="btn main-btn add-selected-btn">
                        <i className="fa fa-plus"></i> <i className={[faClass]}></i>
                    </button>

                </div>
                
                }
                <div className="main-list">
                    {this.props.mainList.map((mainItem, i)=>
                        <MainListItem 
                            key={'main-item-' + i}
                            iKey={'main-item-' + i}
                            // Checks if this item is the open one
                            isOpen={this.state.currentItem === 'main-item-' + i}
                            toggleFunc={this.toggleItem}

                            itemName={mainItem.name}
                            itemId={mainItem.id}
                            mainColor={this.props.mainColor}

                            // If noSelect is true, cannot edit or select
                            noSelect={this.props.noSelect}
                            isSelected={this.state.selectedIds.includes(mainItem.id)}
                            editNameFunc={this.props.editNameFunc}
                            selectIdFunc={this.idControlFunc}

                            // Sublist props
                            sublists={mainItem.sublists}
                            addSubItemFunc={this.props.addSubItemFunc}
                            deleteSubItemFunc={this.props.deleteSubItemFunc}
                        />
                    )}  
                </div>
            </div>
        )   
    }
}
