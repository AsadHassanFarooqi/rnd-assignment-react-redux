import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'

import { handleLogout } from '../actions/authedUser';

const NavBar = ({authedUserId, dispatch}) => {

  const handleUserLogout = (e) => {
    e.preventDefault();
    dispatch(handleLogout());
  }

  return (
    <Navbar bg="dark" variant="dark" className="px-2 mb-5">
      <Nav className="me-auto">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/add" className="nav-link mx-2">Add</Link>
        <Link to="/leaderboard" className="nav-link mx-2">Leaderboard</Link>
        <Navbar.Toggle />
      </Nav>
      {
        authedUserId && (
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Logout: <Link to="/" onClick={handleUserLogout} data-testid="user-information">{authedUserId}</Link>
            </Navbar.Text>
          </Navbar.Collapse>
        )
      }
    </Navbar>
  )
}

const mapStateToProps = ({authedUser}) => ({
  authedUserId: authedUser?.id,
});

export default connect(mapStateToProps)(NavBar);