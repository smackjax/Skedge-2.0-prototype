import React from 'react';
import { connect } from 'react-redux';
import './main-overlay.style.css';

// Redux 
import UIActions from '../../_redux/actions/ui.actions';

// Functions
import makeNameIdArray from '../_FUNCTIONS/makeNameIdArray';
// Components
import OverlayChild from './overlay-child/overlay-child.component';


const SlideOutOverlay = (props)=>{
    // props.optionsType  /'members'/'groups'/...
    // props.selectedIds comes from redux

    const topVal = props.isOpen ? '0%' : '-100%';
    const ChildComponent = props.compToRender;
    return (
        <div style={{top: topVal}} className="main-slide-wrapper">            
            { // Overlay always exists, 
                // if there is a child component, 
                // first wrap it in a stateless component to allow preloaded stateful classes
                // TODO there has to be a less convoluted way 
            ChildComponent ? 
             OverlayChild({children: ChildComponent}) :
             <div>No element in overlay</div>
            }
        </div>
    )
}
export default connect(
    (state)=>{
        return {
            isOpen: state.ui.overlayOpen,
            compToRender: state.ui.compToRender
        }
    }
)(SlideOutOverlay);
