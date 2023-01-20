import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';

import { handleInitialData } from '../actions/shared';
import Login from './Login';
import Nav from './Nav';
import Dashboard from './Dashboard';
import NotFound from './NotFound';
import Leaderboard from './Leaderboard';
import PollsVoting from './PollsVoting';
import NewPoll from './NewPoll';
import AuthenticatedRoute from './AuthenticatedRoute';

function App({dispatch}) { 
  useEffect(() => {
    dispatch(handleInitialData());
  });
  
  return (
    <Container>
      <Nav />
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<AuthenticatedRoute><Dashboard /></AuthenticatedRoute>} />
        <Route exact path="/question/:id" element={<AuthenticatedRoute><PollsVoting /></AuthenticatedRoute>} />
        <Route exact path="/leaderboard" element={<AuthenticatedRoute><Leaderboard /></AuthenticatedRoute>} />
        <Route exact path="/add" element={<AuthenticatedRoute><NewPoll /></AuthenticatedRoute>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
}

export default connect()(App);
