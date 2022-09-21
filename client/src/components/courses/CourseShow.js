import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

const CourseShow = ({}) => {
  const { id } = useParams()
  const [course, setCourse] = useState({ title: '', desc: '', ctype: '' })

  useEffect( () => {
    axios.get(`/api/courses/${id}`)
      .then( res => setCourse(res.data))
      .catch( err => console.log(err) )
  }, [])

  const { title, desc, ctype } = course
  return (
    <>
      <h1>{title}</h1>
      <h3>{ctype}</h3>
      <p>{desc}</p>
      <Button variant="warning">
        Edit
      </Button>
      <Button variant="success">
        Enrollments
      </Button>
      <Button variant="danger">
        Delete
      </Button>
    </>
  )
}

export default CourseShow;