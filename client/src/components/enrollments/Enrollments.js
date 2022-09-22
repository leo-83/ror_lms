import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EnrollList from './EnrollList';
import { useLocation } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import EnrollForm from './EnrollForm';
import { EnrollmentConsumer } from '../../providers/EnrollmentProvider';

const Enrollments = ({ getAllEnrollments, getAllUnenrolledUsers, unenrolledUsers, enrollments}) => {
  const { courseId } = useParams()
  const location = useLocation()
  const { courseTitle } = location.state
  const [adding, setAdd] = useState(false)

  useEffect( () => {
    getAllEnrollments(courseId)
    getAllUnenrolledUsers(courseId)
  }, [])

  return (
    <>
      <Button onClick={() => setAdd(true)}>
        +
      </Button>

      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Enroll a user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EnrollForm 
            unenrolledUsers={unenrolledUsers}
            setAdd={setAdd}
            courseId={courseId}
          />
        </Modal.Body>
      </Modal>
      <h1>All Enrollments for the course {courseTitle}</h1>
      <EnrollList 
        enrollments={enrollments}
      />
    </>
  )
}

const ConnectedEnrollments = (props) => (
  <EnrollmentConsumer>
   { value => <Enrollments {...value} {...props} />} 
  </EnrollmentConsumer>
)

export default ConnectedEnrollments;