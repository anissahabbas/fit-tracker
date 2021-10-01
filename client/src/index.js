import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-hvlckvse.us.auth0.com'
      clientId='prJv14tnRADAd4rFpK2K2IoNQu5zJLBp'
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

