import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate } from 'react-router-dom';

import { handleInitialData } from '../actions/shared';
import Login from './Login';
import Nav from './Nav';
import Dashboard from './Dashboard';
import NotFound from './NotFound';
import Leaderboard from './Leaderboard';
import PollsVoting from './PollsVoting';

function App({dispatch, loggedIn}) { 
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(handleInitialData());
  })

  useEffect(() => {
    if(loggedIn === null) {
      navigate('/');
    }
  }, []);


  return (
    <Container>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/question/:id" element={<PollsVoting />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Container>
  );
}

const mapStateToProps = ({authedUser}) => ({
  loggedIn: authedUser
})

export default connect(mapStateToProps)(App);
