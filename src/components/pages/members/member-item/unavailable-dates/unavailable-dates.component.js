import React from 'react'; 


import UnavailControls from './unavail-date-controls/unavail-date-controls.component';
import UnavailList from './unavail-date-list/unavail-date-list.component';

// Style 
import colors from '../../../../_RESOURCES/colors';
import './unavailable-dates.style.css';

export default class UnavailDates extends React.Component{
    // props.membId
    // props.addDates()
    // props.removeDates()
    // props.unavailDates[[],[],[]]


    render(){
        const sublistHeadId = 'add-dates-btn-'+ this.props.membId;
        const dropdownId = 'unavail-dates-controls-' + this.props.membId;

        return (
        <div className="unavailable-dates-wrapper">
            <div className="unavail-dates-list-header">
                <span style={{borderBottom: '1px solid ' + colors.day, marginRight: '15px', color: colors.day}}>
                    Unavailable: 
                </span>
                <button className="btn btn-sm"
                style={{backgroundColor: colors.day}}
                onClick={this.props.addDates} >
                    <i className="fa fa-plus"></i> <i className="fa fa-calendar-o"></i>
                </button>
            </div>

            <UnavailList 
            unavailDates={this.props.unavailDates}
            deleteDates={this.props.deleteDates} 
            color={colors.day}/>            
        </div>
        )
    }
}
