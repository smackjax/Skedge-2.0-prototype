import React from 'react';
import colors from '../../../_RESOURCES/colors';

import './item-header.style.css';


export default class ItemHeader extends React.Component{
    // item={member} 

    // selectFunc
    // saveNameFunc
    
    // isOpen
    // isSelected
    // toggleDropFunc

    state={ 
        name: '',
    }

    componentWillMount(){
        this.setState({name: this.props.item.name})
    }

    // Functions
    editName(){
        this.props.editNameFunc(this.props.item.id);
    }
    saveName(){
        this.props.saveNameFunc(this.props.item.id, this.state.name);
    }
    enterCheck(e){
        if(e.key === 'Enter')
        { this.saveName() }
    }
    handleName(e){
        this.setState({name: e.target.value});
    }


    render(){
    const btnStyle = {backgroundColor:this.props.color, color: '#efefef', cursor: 'pointer'};
    const mainColor = this.props.color;
    const fontStyle = this.props.isSelected ? 'bold' : 'normal';
    const item = this.props.item;
    const btnDir = this.props.isOpen ? 'rotateZ(180deg)' : 'rotateZ(0deg)';
    return (
        <div className="main-item-header">

            <div 
            style={{color:mainColor, fontWeight: fontStyle}} 
            className="main-item-header row">
                <div className="col-9 col-sm-8 main-item-wrapper"> 
                    {
                    this.props.idOfNameEdit === item.id ? 
                        <div className="edit-item-name">
                            <input 
                            onKeyDown={this.enterCheck.bind(this)}
                            onChange={this.handleName.bind(this)}
                            type="text" 
                            className="form-control" 
                            defaultValue={item.name}
                            placeholder="Name" />  
                        
                            
                        </div>
                        :
                        
                        <label
                        className="form-check-label main-item-label" 
                        onClick={!this.props.selectFunc && this.props.toggleDropFunc(item.id)}>
                        { // Checkbox isn't shown if no select function is passed in
                        this.props.selectFunc &&
                        <input onChange={this.props.selectFunc} 
                        checked={this.props.isSelected} 
                        value={item.id} 
                        type="checkbox" 
                        className="form-check-input" />}&nbsp;
                        
                        { item.name}
                        </label>
                    }
                    
                </div>


                <div className="main-item-btns-wrap col-3 col-sm-4">
                    
                    { // If editing this item's name, show confirm button
                    this.props.idOfNameEdit === item.id &&
                    <button 
                    style={btnStyle}  
                    onClick={this.saveName.bind(this)} 
                    className="main-item-btn btn-sm btn btn-6 btn-sm-12">
                        <i className="fa fa-check"></i>
                    </button> }
                    
                    { // If not editing any item name
                        // and there is an editName function passed in
                    !this.props.idOfNameEdit && this.props.editNameFunc &&
                        <button 
                    style={btnStyle}  
                    onClick={this.editName.bind(this)}
                    className="main-item-btn btn-sm btn btn-6 btn-sm-12 edit-name-btn">
                        <i className="fa fa-pencil"></i>
                    </button> }
                    
                    {  // If not editing any item name
                    !this.props.idOfNameEdit &&
                    <button 
                    style={{...btnStyle, transform: btnDir}}
                    onClick={ this.props.toggleDropFunc(item.id)} 
                    className="main-item-btn btn-sm btn btn-6 btn-sm-12">
                        <i className="fa fa-chevron-down"></i>
                    </button> }

                </div> 
            </div>
            
        </div>
    )
    }
}