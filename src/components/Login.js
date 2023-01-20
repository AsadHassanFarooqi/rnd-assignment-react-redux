import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";

import { handleLogin } from "../actions/authedUser";

import pollsImage from '../images/polls-image.png';

const Login = ({dispatch, users}) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleUsername = (e) => {
    const userID = e.target.value;
    setUsername(userID);
  }

  const handlePassword = (e) => {
    const userPassword = e.target.value;
    setPassword(userPassword);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleLogin(username, password));
    setUsername('');
    setPassword('');
    navigate(-1);
  }

  return (
    <Row className="mx-auto d-flex justify-content-center align-items-center">
      <Col xs="12 mt-5"><h1 className="text-center">Employee Polls Project</h1></Col>
      <Col xs="12" lg="8">
        <Image src={pollsImage} alt="Polls" className="mx-auto mt-2" fluid rounded />
      </Col>
      <Col lg="8">
        <Form className="mt-5" onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>User ID</Form.Label>
            <Form.Select aria-label="users select" value={username} onChange={handleUsername} data-testid="user-field">
              <option>Open this select user</option>
              {Object.values(users).map(user => (
                <option value={user.id} key={user.id}>{user.id}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} name="password" onChange={handlePassword} data-testid="password-field" />
          </Form.Group>
          <div className="text-center">
            <Button variant="primary" type="submit" data-testid="login-btn">
              Submit
            </Button>
          </div>
        </Form>
      </Col>
    </Row>
  )
}

const mapStateToProps = ({users}) => ({
  users
})

export default connect(mapStateToProps)(Login);