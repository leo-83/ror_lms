import { useState, useEffect } from 'react';
import axios from 'axios';
import CourseList from './CourseList';
import CourseForm from './CourseForm';
import { Modal, Button } from 'react-bootstrap';

const Courses = () => {
  const [courses, setCourses] = useState([])
  const [adding, setAdd] = useState(false)

  useEffect( () => {
    axios.get('/api/courses')
      .then( res => setCourses(res.data))
      .catch( err => console.log(err))
  }, [])

  const addCourse = (course) => {
    axios.post('/api/courses', { course })
      .then( res => setCourses([...courses, res.data]))
      .catch( err => console.log(err))
  }

  const updateCourse = (id, course) => {
    axios.put(`/api/courses/${id}`, { course })
      .then( res => {
        const newUpdatedCourses = courses.map( c => {
          if (c.id === id) {
            return res.data
          }
          return c
        })
        setCourses(newUpdatedCourses)
      })
      .catch( err => console.log(err))
  }

  const deleteCourse = (id) => {
    axios.delete(`/api/courses/${id}`)
      .then( res => setCourses( courses.filter( c => c.id !== id )))
      .catch( err => console.log(err)) 
  }

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

export default Courses;