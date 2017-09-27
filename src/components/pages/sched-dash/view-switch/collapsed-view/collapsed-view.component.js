import React from 'react';


//Functions
import objToArray from '../../../../_FUNCTIONS/objToArr';
import { hydrateDate} from '../../../../_FUNCTIONS/dateFunctions';

//Components
import DayBlock from '../_blocks/day-block/day-block.component';

// Style
import './collapsed-view.style.css';


export default (props)=>{
    const schedData = props.activeSched;
    const days = objToArray(schedData.sched);

    const startMoment = hydrateDate(schedData.startDate);
    const endMoment = hydrateDate(schedData.endDate);
    return(
        <div className="container sched-view collapsed">
            <div className="sched-view-header">
                {startMoment.format('MMM DD YYYY')} - {endMoment.format('MMM DD YYYY')}
            </div>
            {
                days.map((day, dayIndex)=>{
                    return <DayBlock
                    key={'dayIndx' + dayIndex}
                    collapsed={true}
                    indx={dayIndex}
                    dayTitle={day.name}
                    dateStr={day.id}
                    tasks={day.tasks}
                    />
                })
            }

        </div>
    )
}