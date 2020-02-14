import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {HashRouter as Router} from 'react-router-dom';
import {createHashHistory} from 'history';
import {ThemeProvider} from '@material-ui/styles'
import Theme from './theme'
import './app.scss'
import { Provider } from 'react-redux';

import Store from './store';
const StoreInstance = Store();

      const history= createHashHistory({ queryKey: false});
      ReactDOM.render (  
         <Provider store={StoreInstance}>
            <Router history={history}>
               <ThemeProvider theme={Theme}>
                  <App />
               </ThemeProvider>
            </Router>
         </Provider>,document.getElementById('root'));
      serviceWorker.unregister();


