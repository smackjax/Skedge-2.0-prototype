import React from 'react';
import ReactDOM from 'react-dom';

// Routing
import { BrowserRouter } from 'react-router-dom';

// Redux
import {Provider} from 'react-redux';
import ReduxStore from './_redux/redux-store';


// Libraries
import 'font-awesome/css/font-awesome.css';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<Provider store={ReduxStore}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
</Provider>, 
document.getElementById('root'));
registerServiceWorker();
