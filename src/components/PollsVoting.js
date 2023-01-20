import React from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { connect } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { handleAddAnswer } from '../actions/questions';

const PollsVoting = ({ dispatch, authedUser, questions, author }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const question = Object.values(questions).find(question => question.id === id);

  if(!authedUser || !question) {
    return navigate("/404");
  }
  
  const hasChoseOptionOne = question.optionOne.votes.includes(authedUser.id);
  const hasChoseOptionTwo = question.optionTwo.votes.includes(authedUser.id);
  const hasVoted = hasChoseOptionOne || hasChoseOptionTwo;

  const handleOptionClick = (e) => {
    const { id } = e.target;
    dispatch(handleAddAnswer(question.id, id));
  }

  const calculatePercentage = (option, question) => {
    const numberVotesTotal = (question.optionOne.votes.length + question.optionTwo.votes.length);
    switch (option) {
      case "optionOne":
        return question.optionOne.votes.length / numberVotesTotal * 100 + " %";
      case "optionTwo":
        return question.optionTwo.votes.length / numberVotesTotal * 100 + " %";
      default:
        return "";
    }
  }

  return (
    <Card>
      <Row>
        <Col xs="12" lg="5" className="text-center p-5">
          <Image src={author.avatarURL} rounded />
        </Col>
        <Col xs="12" lg="6" className="text-center my-3">
          <h1>Poll By {author.name}</h1>
          <h5>Would you rather?</h5>
          <Button variant={`${!hasVoted ? 'primary' : 'secondary' } w-100 mb-2`} disabled={hasVoted} onClick={handleOptionClick} id="optionOne">
            <p>{question?.optionOne.text}</p>
          {!hasVoted ? (
            'Click'
          ) : (
            `Votes: ${question.optionOne.votes.length} (${calculatePercentage("optionOne", question)})`
          )}
          </Button>
          <Button variant={`${!hasVoted ? 'primary' : 'secondary' } w-100`} disabled={hasVoted} onClick={handleOptionClick} id="optionTwo">
          <p>{question?.optionTwo.text}</p>
          {!hasVoted ? (
            'Click'
          ) : (
            `Votes: ${question.optionTwo.votes.length} (${calculatePercentage("optionTwo", question)})`
          )}
          </Button>
        </Col>
      </Row>
    </Card>
  )
}

const mapStateToProps = ({authedUser, users, questions}) => {
  const author = Object.values(users).find(user => user.id === authedUser.id);
  return { authedUser, questions, author };
}

export default connect(mapStateToProps)(PollsVoting);