import { useState } from 'react';
import CourseList from './CourseList';
import CourseForm from './CourseForm';
import { Modal, Button } from 'react-bootstrap';
import { CourseConsumer } from '../../providers/CourseProvider';

const Courses = ({ addCourse, courses }) => {
  const [adding, setAdd] = useState(false)

  return (
    <>
      <Button onClick={() => setAdd(true)}>
        +
      </Button>

      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Create Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CourseForm
            addCourse={addCourse}
            setAdd={setAdd}
          />
        </Modal.Body>
      </Modal>
      <h1>All Courses</h1>
      <CourseList 
        courses={courses} 
      />
    </>
  )
}

const ConnectedCourses = (props) => (
  <CourseConsumer>
    { value => <Courses {...value} {...props} />}
  </CourseConsumer>
)

export default ConnectedCourses;