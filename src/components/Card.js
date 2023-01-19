import React from 'react'
import { Card as ReactCard, Button } from 'react-bootstrap';

import { Link } from "react-router-dom";

const Card = ({ poll, author }) => {
  return (
    <Link className="card p-2" to={`/question/${poll.id}`}>
      <ReactCard.Img variant="top" src={author?.avatarURL} alt={author?.id}  />
      <ReactCard.Body>
        <ReactCard.Title>{poll.author}</ReactCard.Title>
        <ReactCard.Text>
        {new Date(poll.timestamp).toDateString()}
        </ReactCard.Text>
        <Button variant="primary">Show</Button>
      </ReactCard.Body>
    </Link>
  )
}

export default Card