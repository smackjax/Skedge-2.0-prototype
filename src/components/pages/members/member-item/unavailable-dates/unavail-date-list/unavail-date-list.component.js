import React from 'react';
import {hydrateDate} from '../../../../../_FUNCTIONS/dateFunctions';

export default (props)=>{
        // props.unavailDates [[], [], []]
        // props.deleteDates()
        // props.color
    return(
        <div className='unavail-dates-list'>
            {props.unavailDates.map((unavailArr, datesIndex)=>{
                const startStr = hydrateDate(unavailArr[0]).format('YYYY MMM DD');
                const endStr = hydrateDate(unavailArr[(unavailArr.length - 1)]).format('MMM DD');
                const datesStr = unavailArr.length > 1 ? 
                    startStr + " - " + endStr : 
                        startStr
                return <div
                        style={{color: props.color}}
                        key={'date-'+datesIndex}                
                     className="unavailable-date-item">
                        <button onClick={props.deleteDates(datesIndex)} className="btn btn-sm btn-danger unavail-delete-btn">
                            <i className="fa fa-trash"></i>
                        </button>
                    {datesStr}
                </div>
            })}
        </div>
    )
}
