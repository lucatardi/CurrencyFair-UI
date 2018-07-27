import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import configureStore from './store';
import AppOverlay from './components/AppOverlay'

ReactDOM.render(
<Provider store={configureStore()}>
<App />
{/* <AppOverlay></AppOverlay> */}
</Provider>, 
    document.getElementById('root'));
registerServiceWorker();
