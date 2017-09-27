import React from 'react';
import { connect } from 'react-redux';

// Functions
import objToArr from '../../_FUNCTIONS/objToArr';

// Components
import Page from '../_generics/_generic-page/generic-page.component';
import DayItem from './day-item/day-item.component';

// Style
import colors from '../../_RESOURCES/colors';


const DaysPage = (props)=>{
    const dayList = objToArr(props.days);

    return(
        <Page 
        className="days" 

        mainColor={colors.day}
        headTxt='DAYS'            
        headFaClass='calendar-o'

        ItemComponent={DayItem}
        list={dayList}
        
        dispatch={props.dispatch}
        />
    )
}

export default connect(
    (state)=>{
        return {
            days: state.daysOfWeek
        }
    }
)(DaysPage);