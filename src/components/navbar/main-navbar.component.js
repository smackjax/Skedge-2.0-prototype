import React from 'react';
import './main-navbar.css';
import colors from '../_RESOURCES/colors';

import { Link } from 'react-router-dom';

export default (props)=>{
    return (
      <nav id="main-nav" className="navbar">
        <ul className="navbar-nav justify-content-center">
          <li className="nav-item">
            <Link to="/members" style={{color: colors.member}} className="nav-link" id="members-btn">
              <i className='fa fa-user'></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/groups" style={{color: colors.group}} className="nav-link" id="groups-btn">
            <i className='fa fa-group'></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/tasks" style={{color: colors.task}} className="nav-link" id="tasks-btn">
              <i className='fa fa-list'></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/days" style={{color: colors.day}} className="nav-link" id="days-btn"><i className='fa fa-calendar-o'></i></Link>
          </li>
          <li className="nav-item">
            <Link to="/current-schedule" style={{color: colors.sched}} className="nav-link" id="sched-btn"href="#">
              <i className='fa fa-th'></i> 
            </Link>
          </li>
        </ul>
    </nav>
    );
}