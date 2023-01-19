import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import { connect } from 'react-redux';
import { useNavigate, useRouteLoaderData } from 'react-router';
import { handleAddQuestion } from '../actions/questions';

const NewPoll = ({dispatch, authedUser}) => {
  const navigate = useNavigate();
    const [firstOption, setFirstOption] = useState("");
    const [secondOption, setSecondOption] = useState("");

    const handleFirstOptionChange = (e) => {
        const value = e.target.value;
        setFirstOption(value);
    };

    const handleSecondOptionChange = (e) => {
        const value = e.target.value;
        setSecondOption(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(handleAddQuestion(firstOption, secondOption));
        navigate("/home");
    };

  return (
    <div className="card">
      <Row>
        <Col xs="12" lg="12" className="d-flex align-items-center p-4">
          <Form className="w-100" onSubmit={handleSubmit}>
            <h2>Would you rather?</h2>
            <Form.Group className="mb-3">
              <Form.Label data-testid="firstOptionLabel">First option</Form.Label>
              <Form.Control type="text" placeholder="Enter first option" id="firstOption" onChange={handleFirstOptionChange} data-testid="firstOption" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label data-testid="secondOptionLabel">Second option</Form.Label>
              <Form.Control type="text" placeholder="Enter second option" id="secondOption" onChange={handleSecondOptionChange} data-testid="secondOption" />
            </Form.Group>
            <Button variant="primary" type="submit" data-testid="submit-poll">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  )
}

const mapStateToProps = ({authedUser}) => ({
  authedUser
})

export default connect(mapStateToProps)(NewPoll);