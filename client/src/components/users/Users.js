import { useState } from 'react';
import UserList from './UserList';
import UserForm from './UserForm';
import { Modal, Button } from 'react-bootstrap';
import { UserConsumer } from '../../providers/UserProvider';

const Users = ({ addUser, users }) => {
  const [adding, setAdd] = useState(false)

  return (
    <>
      <Button onClick={() => setAdd(true)}>
        +
      </Button>

      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UserForm addUser={addUser} setAdd={setAdd} />
        </Modal.Body>
      </Modal>

      <h1>All Users</h1>
      <UserList 
        users={users}
      />
    </>
  )
}

const ConnectedUsers = (props) => (
  <UserConsumer>
    { value => <Users {...value} {...props} /> }
  </UserConsumer>
)

export default ConnectedUsers;