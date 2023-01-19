import React, { useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router';

import Card from './Card';

const Dashboard = ({authedUser, questions, users}) => {
  const navigate = useNavigate();

  const unanswered = (question) => (!question.optionOne.votes.includes(authedUser.id)
        && !question.optionTwo.votes.includes(authedUser.id));

  const answered = (question) => (question.optionOne.votes.includes(authedUser.id)
      || question.optionTwo.votes.includes(authedUser.id));

      const navigateHome = () => {
        navigate('/');
      }

  useEffect(() => {
    if(!authedUser) {
      console.log('yes');
    }
  }, []);

  return (
    <>
      <h1>Dashboard</h1>
      <Tabs
        defaultActiveKey="unanswered"
        id="polls"
        className="my-5"
        fill
      >
        <Tab eventKey="unanswered" title="New Polls">
          <Row>
            {questions.filter(unanswered).map((poll) => (
                <Col xs="12" lg="3" className="mb-3" key={poll.id}>
                  <Card poll={poll} author={users[poll.author]} />
                </Col>
              ))
            }
          </Row>
        </Tab>

        <Tab eventKey="answered" title="Answered Polls">
          <Row>
            {questions.filter(answered).map(poll => (
                <Col xs="12" lg="3" className="mb-3" key={poll.id}>
                  <Card poll={poll} author={users[poll.author]} />
                </Col>
              ))
            }
          </Row>
        </Tab>
      </Tabs>
    </>
  )
}

const mapStateToProps = ({authedUser, questions, users}) => ({
  authedUser,
  questions: Object.values(questions).sort(
      (a, b) => b.timestamp - a.timestamp
  ),
  users,
});


export default connect(mapStateToProps)(Dashboard)