import React, { Component } from 'react';

// Redux 
import DATA_ACTS from './_redux/actions/data.actions';
import reduxStore from './_redux/redux-store';

import './polyfills/includes';
import './polyfills/object.assign';

//Router 
import {Route, Redirect} from 'react-router-dom';

// Components
import MainNav from './components/navbar/main-navbar.component';
import MainOverlay from './components/overlay/main-overlay.component';

// Route components
import LoginComponent from './components/pages/login/login.component';
import MembersComponent from './components/pages/members/members.component';
import GroupsComponent from './components/pages/groups/groups.component';
import TasksComponent from './components/pages/tasks/tasks.component';
import DaysComponent from './components/pages/days-of-week/days-of-week.component';
import SchedDashComponent from './components/pages/sched-dash/sched-dash.component';
import AllSchedules from './components/pages/all-schedules/all-schedules.component';


// Blank components
// import SchedDashComponent from './components/pages/blank.component';
import NewPage from './components/pages/blank.component';

import './App.css';
import './components/pages/pages.style.css';


class App extends Component {
  componentWillMount(){ 
    reduxStore.dispatch(DATA_ACTS.loadData());
  }
  render() {
    return (
      <div  className="app">
        <MainOverlay />
        <MainNav />
        <Route exact path='/' render={
         ()=><Redirect to='/members' />
        }/>
        <Route path='/login' component={LoginComponent} />
        <Route path='/current-schedule' component={SchedDashComponent} />
        <Route path='/all-schedules' component={AllSchedules} />
        <Route path='/members' component={MembersComponent}/>
        <Route path='/groups' component={GroupsComponent}/>
        <Route path='/tasks' component={TasksComponent}/>
        <Route path='/days' component={DaysComponent}/>


        <Route path='/sandbox' component={NewPage} />
      </div>
    );
  }
}

export default App;
