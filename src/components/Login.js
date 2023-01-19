import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";

import { handleLogin } from "../actions/authedUser";

import pollsImage from '../images/polls-image.png';

const Login = ({dispatch}) => {

  const [userInfo, setUSerInfo] = useState({
    username: 'sarahedo',
    password: 'password123'
  })

  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUSerInfo({ [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleLogin(userInfo.username, userInfo.password));
    userInfo.username = "";
    userInfo.password = "";
    navigate("/home");
  }

  return (
    <Row className="mx-auto d-flex justify-content-center align-items-center">
      <Col xs="12 mt-5"><h1 className="text-center">Employee Polls Project</h1></Col>
      <Col xs="12" lg="8">
        <Image src={pollsImage} alt="Polls" className="mx-auto mt-2" fluid rounded />
      </Col>
      <Col lg="8">
        <Form className="mt-5" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="text" placeholder="Enter id" value={userInfo.username} name="username" onChange={handleOnChange} data-testid="user-field" />
            {userInfo.username === '' &&  (
              <Alert variant="danger">
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
              </Alert>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={userInfo.password} name="password" onChange={handleOnChange} data-testid="password-field" />
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

export default connect()(Login);