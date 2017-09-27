import React from 'react';

// Functions
import {toggleByBtn, setByBool, getMaxHeight} from '../../_FUNCTIONS/dropdown';

// Components
import Sublist from '../sub-list/sub-list.component';

// Styles
import './main-list-item.css';





// this.props.sublists = [ 
//  groups: [{}]
// ]
// this.props.editNameFunc
export default class MainListItem extends React.Component{
    constructor(props){
        super(props);
        this.dropdownId  = 'main-sublist-dropdown-' + this.props.iKey;
        this.toggleBtnId = 'sublist-toggle-btn-' + this.props.iKey;
        this.state={
            editing: props.itemName ? false : true,
            sublistOpen: false
        };
        this.editFunc = this.editFunc.bind(this);
        this.toggleNameEdit = this.toggleNameEdit.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this);
    }
    
    editFunc(memberId, inputId){
        const membId = memberId; 
        return ()=>{
            this.toggleNameEdit();
            const newName = document.getElementById(inputId).value;
            this.props.editNameFunc(membId, newName);
        };
    }
    toggleNameEdit(){
        const current = !this.state.editing;
        this.setState({editing: current});
    }
    toggleDropdown(iKey){     
        return ()=>{
            this.props.toggleFunc(iKey);
        }
    }

    componentDidUpdate(){
        setByBool(this.toggleBtnId, this.props.isOpen);
    }


    render(){
    
        const editInputHandler = (e)=>{
            if(e === 'Enter'){ this.editFunc(this.props.itemId, this.props.iKey + 'name-input'); }
        }

        // Specific page color
        const mainColor = this.props.mainColor;
        

        return (
        <div style={{borderColor: mainColor}} className="main-list-item dropdown-wrap">
            { this.props.noSelect ? 
            <div style={{color:mainColor}} className="main-item-header no-select">
                <span className='item-name'>
                    {this.props.itemName}
                </span>
                <button style={{color:mainColor}}
                id={this.toggleBtnId}  
                value={this.dropdownId }
                onClick={toggleByBtn(this.toggleBtnId)}
                className="main-item-btn btn expand-toggle expand-toggle-btn">
                    <i className="fa fa-chevron-down"></i>
                </button>
            </div>
                :
            <div style={{color:mainColor}} className="main-item-header row">

                <div className="col-9 col-sm-8 "> 
                    {this.state.editing || !this.props.itemName ? 
                        // If the 'name' is empty, default to input
                        <input id={this.props.iKey + "name-input"} 
                        onKeyDown={editInputHandler}
                        type="text" 
                        className="form-control" 
                        defaultValue={this.props.itemName} 
                        placeholder="name" />  
                        :
                        <label className="form-check-label main-item-label">
                        <input onClick={this.props.selectIdFunc} 
                        checked={this.props.isSelected} 
                        value={this.props.itemId} 
                        type="checkbox" 
                        className="form-check-input" />&nbsp;
                        { this.props.itemName}
                        </label>
                    }
                    
                </div>

                <div className="main-item-btns-wrap col-3 col-sm-4">
                    {
                        this.state.editing ? 
                        <button 
                        style={{backgroundColor:mainColor, color: '#fbfbfb'}}  
                        onClick={this.editFunc(this.props.itemId, this.props.iKey + 'name-input')} 
                        className="main-item-btn btn-sm btn btn-6 btn-sm-12">
                            <i className="fa fa-check"></i>
                        </button> : 
                        <button 
                        style={{color:mainColor}}  
                        onClick={this.toggleNameEdit} 
                        className="main-item-btn btn-sm btn btn-6 btn-sm-12">
                            <i className="fa fa-pencil"></i>
                        </button>
                    }
                    <button 
                    id={this.toggleBtnId}
                    style={{color: mainColor}}
                    value={this.dropdownId}
                    onClick={ this.toggleDropdown(this.props.iKey)} 
                    className="main-item-btn btn-sm btn btn-6 btn-sm-12">
                        <i className="fa fa-chevron-down"></i>
                    </button>
                </div> 
            </div>// End main header 
            }
                
            <div id={this.dropdownId } className="sublist-dropdown">
                {/* New sublist for each sublist, passing in value object */}
                {this.props.sublists.map((sub, subIndx)=>{
                        return <Sublist 
                        key={this.props.iKey + '-' + sub.headerTxt + subIndx}

                        // Main item props
                        headerTxt={sub.headerTxt}
                        list={sub.list} 
                        
                        // Sublist props
                        sublistKey={sub.sublistKey}
                        addSubItem={this.props.addSubItemFunc(this.props.itemId)}
                        deleteSubItem={this.props.deleteSubItemFunc(this.props.itemId)}
                        subColor={sub.subColor}
                        />
                })}
            </div>
        </div>
        )
    }
};
