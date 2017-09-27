import React from 'react';
// Router
import {Link} from 'react-router-dom';

// redux
import reduxStore from '../../../_redux/redux-store';
import UI_ACTS from '../../../_redux/actions/ui.actions';
import SCHED_ACTS from '../../../_redux/actions/sched.actions';

// Functions
import objToArr from '../../_FUNCTIONS/objToArr';
import { hydrateDate } from '../../_FUNCTIONS/dateFunctions';

// Style
import colors from '../../_RESOURCES/colors';
import './all-schedules.style.css';

export default (props)=>{
    const allScheds = {...reduxStore.getState().schedsById};
    const schedList = objToArr(allScheds);
    const changeSched = (schedId)=>{
        return ()=>{
            reduxStore.dispatch(SCHED_ACTS.changeActiveSchedId(schedId));
            
        }
    }    

    return (
        <div className="container">
            {
                schedList.map((sched,sIndex)=>{
                    const startDateStr = hydrateDate(sched.startDate).format('MMM DD, YYYY');
                    const endDateStr = hydrateDate(sched.endDate).format('MMM DD, YYYY');    
                    return (
                    <div 
                    key={"sched-num-"+sIndex}
                    className="row all-scheds-item">
                        <div 
                        style={{color: colors.sched}}
                        className="col-9">
                            { startDateStr } - { endDateStr }
                        </div>
                        <Link
                        to='/current-schedule'
                        onClick={changeSched(sched.id)}
                        style={{backgroundColor: colors.sched, color:'#efefef'}} 
                        className="btn">
                            VIEW
                        </Link>
                    </div>)
                })
            }
        </div>
    )
}