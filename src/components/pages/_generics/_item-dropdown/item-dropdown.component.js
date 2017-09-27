import React from 'react';
import './item-dropdown.style.css';

export default class ItemDropdown extends React.Component{
    // props.id
    // props.isOpen

    // Keeps menu open to correct height if children are added
    componentDidUpdate(){
        const thisElem = document.getElementById(this.props.id);
        if(thisElem){
            if(this.props.isOpen){    
                thisElem.style.maxHeight = '' + thisElem.scrollHeight + 'px';
            } else {
                thisElem.style.maxHeight = '0px';
            }
        }
    }

    render(){ 
        return(
            <div id={this.props.id} className="dropdown closed">
                {this.props.children}
            </div>
        )
    }
}
