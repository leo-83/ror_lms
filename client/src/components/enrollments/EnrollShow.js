import { useState, useEffect } from 'react';
import axios from 'axios';
import { ListGroup, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import EnrollForm from './EnrollForm';
import { EnrollmentConsumer } from '../../providers/EnrollmentProvider';

const EnrollShow = ({ id, course_id, user_id, updateEnroll, unenrolledUsers, deleteEnroll }) => {
  const [user, setUser] = useState({ first_name: '' , last_name: '' })
  const { courseId } = useParams()
  const [editing, setEdit] = useState(false)

  useEffect( () => {
    axios.get(`/api/users/${user_id}`)
      .then( res => setUser( res.data ))
      .catch( err => console.log(err))
  }, [])

  const { first_name, last_name } = user
  const fullName = first_name + ' ' + last_name
  return (
    <>
      { editing ?
        <>
          <EnrollForm 
            id={id}
            user_id={id}
            updateEnroll={updateEnroll}
            setEdit={setEdit}
            unenrolledUsers={unenrolledUsers}
            courseId={courseId}
          />
          <Button 
            variant='warning'
            onClick={() => setEdit(false)}
          >
            Cancel
          </Button>
        </>
        :
        <ListGroup.Item>
          {fullName}
          <Button 
            variant='warning'
            onClick={() => setEdit(true)}
          >
            Edit
          </Button>
          <Button 
            variant='danger'
            onClick={() => deleteEnroll(courseId, id)}
          >
            Delete
          </Button>
        </ListGroup.Item>
      }
    </>
  )
}

const ConnectedEnrollShow = (props) => (
  <EnrollmentConsumer>
    { value => <EnrollShow {...value} {...props} />}
  </EnrollmentConsumer>
)

export default ConnectedEnrollShow;