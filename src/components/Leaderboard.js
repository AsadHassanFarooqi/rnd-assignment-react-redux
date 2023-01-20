import React from 'react';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import { connect } from 'react-redux';

const Leaderboard = ({users}) => {
  const stats = Object.values(users).sort(
    (a,b) => Object.keys(b.answers).length - Object.keys(a.answers).length
  );
  return (
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Username</th>
          <th>Answered Polls</th>
          <th>Created Polls</th>
        </tr>
      </thead>
      <tbody>
      {stats && stats.map((stat, index) => (
        <tr key={stat.id}>
          <td>{index}</td>
          <td><Image src={stat.avatarURL} width="35" roundedCircle={true} /> {stat.name}</td>
          <td>{Object.keys(stat.answers).length}</td>
          <td>{stat.questions.length}</td>
        </tr>
      ))}
      </tbody>
    </Table>
  )
}

const mapStateToProps = ({users}) => ({
  users
})

export default connect(mapStateToProps)(Leaderboard);