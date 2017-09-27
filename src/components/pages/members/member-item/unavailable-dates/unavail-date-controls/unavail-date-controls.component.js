import React from 'react';
import moment from 'moment';
import SelectDate from '../../../../../_INPUTS/select-date/select-date.component';


// Styles
import colors from '../../../../../_RESOURCES/colors';
import './unavail-date-controls.style.css';



export default class UnavailDateControls extends React.Component {
        // Props come from member-item.component
    // this.props.confirmFunc
    // this.props.closeOverlay

    state={
        range: false,
        startDate: '',
        endDate: ''
    }
    

    handleChange(dateVals){
        // Check for invalid dates
        
       if(dateVals.isValid){
            this.setState({[dateVals.name]: dateVals.dateStr}, ()=>{
                // If date range and both dates set
                if(this.state.range && this.state.startDate && this.state.endDate){
                    const sDate = moment(this.state.startDate, 'YYYY-MM-DD');
                    const eDate = moment(this.state.endDate, 'YYYY-MM-DD'); 
                    // If start date is later or not equal to end date 
                    if(sDate > eDate){
                        this.setState({
                            [dateVals.name]: '',
                            errMsg: 'Please choose a later end date than start'})
                    } else {
                        this.setState({[dateVals.name]: dateVals.dateStr,
                        errMsg: ''})
                    }
                }
            });
        } else { // If date not valid
            this.setState({[dateVals.name]: ''})
        }
    }

    handleRangeCheck(e){
        this.setState({range: e.target.checked});
    }

    confirmFunc(){
        // Check that end is later than start
        // If both dates are valid, generate dates array
        if(this.state.startDate && this.state.endDate && this.state.range){
            const newDatesArr = [];
                const startMomentObj = 
                    moment(this.state.startDate, 'YYYY-MM-DD');
                const endMomentObj = 
                    moment(this.state.endDate, 'YYYY-MM-DD');
        
            let newDate = startMomentObj; 
            for(let d = 0; newDate < endMomentObj; d++){
                // 'date()' sets date when given args, 
                    // or retrieves when called without
                newDate = moment(startMomentObj).date(
                    startMomentObj.date() + d
                );
                newDatesArr.push(newDate.format('YYYY-MM-DD'));
            }
            this.props.confirmFunc(newDatesArr);

        // startDate populated and not a date range
        } else if (this.state.startDate && !this.state.range){
            const singleDate = [this.state.startDate];
            this.props.confirmFunc(singleDate);
        }
        this.props.closeOverlay();
    }

    render(){ 
        const datesValid = this.state.range ? 
            this.state.startDate !== '' && this.state.endDate !== '' :
                 this.state.startDate !== '';
        return(
            <div className="unavailable-dates-controls">
                <div style={{color: colors.day, borderBottomColor: colors.day}} className="unavail-controls-header">
                    UNAVAILABLE DATES 
                </div>
                <SelectDate 
                onChange={this.handleChange.bind(this)}
                name='startDate'
                labelTxt='Start'
                />
                { this.state.range &&
                <SelectDate 
                onChange={this.handleChange.bind(this)}
                name='endDate'
                labelTxt='End'
                />
                }
                <div className="container">
                    <div className="row">
                        <div className="form-check unavail-check-wrap">
                            <label
                            className="form-check-label unavail-check-label">
                                <input
                                type='checkbox'
                                className="form-check-input unavail-checkbox" 
                                onChange={this.handleRangeCheck.bind(this)}/>
                                Date range
                            </label>
                        </div>
                    </div>
                </div>



                <div className="container unavail-controls-btn-wrap">
                    <div className="row">
                    <button 
                    onClick={this.props.closeOverlay} 
                    className="col-5 btn btn-danger">
                        <i className="fa fa-times"></i>
                    </button>
                    <button 
                    disabled={!datesValid}
                    onClick={this.confirmFunc.bind(this)} 
                    className="offset-1 col-6 btn btn-success">
                        <i className="fa fa-check"></i>
                    </button>
                    </div>
                </div>
            </div>
        )
    }
}