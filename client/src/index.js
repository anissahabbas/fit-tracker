import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CurrentWorkoutProvider } from './DoingWorkout/CurrentWorkoutContext';
import { NewWorkoutProvider } from './WorkoutList/NewWorkoutContext';

ReactDOM.render(
  <React.StrictMode>
    <CurrentWorkoutProvider>
      <NewWorkoutProvider>
        <Auth0Provider
          domain='dev-hvlckvse.us.auth0.com'
          clientId='prJv14tnRADAd4rFpK2K2IoNQu5zJLBp'
          redirectUri={window.location.origin}
        >
          <App />
        </Auth0Provider>
      </NewWorkoutProvider>
    </CurrentWorkoutProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

