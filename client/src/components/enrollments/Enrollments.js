import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import EnrollList from './EnrollList';
import { useLocation } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import EnrollForm from './EnrollForm';

const Enrollments = ({}) => {
  const { courseId } = useParams()
  const [enrollments, setEnrollments] = useState([])
  const location = useLocation()
  const { courseTitle } = location.state
  const [adding, setAdd] = useState(false)
  const [unenrolledUsers, setUsers] = useState([])
  const navigate = useNavigate()

  useEffect( () => {
    axios.get(`/api/courses/${courseId}/enrollments`)
      .then( res => setEnrollments(res.data))
      .catch( err => console.log(err))

    axios.get(`/api/courses/${courseId}/unenrolled`)
      .then( res => setUsers(res.data))
      .catch( err => console.log(err))
  }, [])

  const addEnroll = (enrollment) => {
    axios.post(`/api/courses/${courseId}/enrollments`, { enrollment })
      .then( res => setEnrollments([...enrollments, res.data]))
      .catch( err => console.log(err))
  }

  const updateEnroll = (id, enrollment) => {
    axios.put(`/api/courses/${courseId}/enrollments/${id}`, { enrollment })
      .then( res => {
        const newUpdatedEnrollments = enrollments.map( e => {
          if (e.id == id) {
            return res.data
          }
          return e
        })
        setEnrollments(newUpdatedEnrollments)
        // navigate(`/${courseId}/enrollments`, { state: { courseTitle } })
        window.location.reload()
      })
      .catch( err => console.log(err))
  } 

  const deleteEnroll = (id) => {
    axios.delete(`/api/courses/${courseId}/enrollments/${id}`)
      .then( res => setEnrollments( enrollments.filter( e => e.id !== id )))
      .catch( err => console.log(err))
  }

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
            addEnroll={addEnroll}
            unenrolledUsers={unenrolledUsers}
            setAdd={setAdd}
          />
        </Modal.Body>
      </Modal>
      <h1>All Enrollments for the course {courseTitle}</h1>
      <EnrollList 
        enrollments={enrollments}
        updateEnroll={updateEnroll}
        unenrolledUsers={unenrolledUsers}
        deleteEnroll={deleteEnroll}
      />
    </>
  )
}

export default Enrollments;