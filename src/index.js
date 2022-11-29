import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Auth0Provider} from '@auth0/auth0-react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import {ErrorFallback,myErrorHandler} from './errorfallbackcomponent/errorfallbackcomponent';
import {ErrorBoundary} from 'react-error-boundary';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
    <BrowserRouter>
    <Auth0Provider domain={"dev-u87k7c236y08nvf5.us.auth0.com"} clientId={"MDehNhUb1cwVy7TlHcA0gLsPYeEeLyju"} redirectUri={window.location.origin}>
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={myErrorHandler}>
    <App />
    </ErrorBoundary>
    </Auth0Provider>
    </BrowserRouter>
    </Provider>    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
