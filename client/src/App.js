import React from 'react';
import GlobalStyles from './GlobalStyles';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
import LandingPage from './LandingPage';
import ExerciseList from './ExerciseList/index';
import Header from './Header/index';
import Footer from './Footer';
import styled from 'styled-components';
import WorkoutList from './WorkoutList/index';
import DoingWorkout from './DoingWorkout';
import Stats from './Stats/index';
import Settings from './Settings/index';
import CompletedWorkout from './DoingWorkout/CompletedWorkout';

const App = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  console.log(isAuthenticated);
  console.log(user);
  console.log(isLoading, 'load');

  if (isAuthenticated) {
    return (
      <BrowserRouter>
        <GlobalStyles />
        <Header />
        <Container >
          <Switch>
            <Route path='/exerciseList'>
              <ExerciseList />
            </Route>
            <Route path='/workoutList'>
              <WorkoutList />
            </Route>
            <Route path='/doingWorkout/:workoutId'>
              <DoingWorkout />
            </Route>
            <Route path='/stats'>
              <Stats />
            </Route>
            <Route path='/settings'>
              <Settings />
            </Route>
            <Route path='/completedWorkout'>
              <CompletedWorkout />
            </Route>
          </Switch>
        </Container>
        <Footer />
      </BrowserRouter>
    );

  } else if (!isLoading) {
    return (
      <BrowserRouter>
        <Route exact path='/'>
          <LandingPage />
        </Route>
      </BrowserRouter>
    );
  } else {
    return <div>loading...</div>
  }

};
export default App;

const Container = styled.div`
  height: 600px;
`;