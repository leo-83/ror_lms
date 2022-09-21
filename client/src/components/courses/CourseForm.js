import { useState, useEffect } from "react";
import { Form, Button } from 'react-bootstrap';

const CourseForm = ({ addCourse, setAdd, id, title, desc, ctype, updateCourse, setEdit }) => {
  const [course, setCourse] = useState({ title: '', desc: '', ctype: 'Other' })

  useEffect( () => {
    if (id) {
      setCourse({ title, desc, ctype })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      updateCourse(id, course)
      setEdit(false)
    } else {
      addCourse(course)
      setAdd(false)
    }
    setCourse({ title: '', desc: '', ctype: 'Other' })
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control 
            name='title'
            value={course.title}
            onChange={(e) => setCourse({ ...course, title: e.target.value })}
            required
            placeholder="title"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control 
            name='desc'
            value={course.desc}
            onChange={(e) => setCourse({ ...course, desc: e.target.value })}
            required
            as="textarea" 
            rows={3}
          />
        </Form.Group>
        {/* <Form.Group className="mb-3">
          <Form.Label>Course type</Form.Label>
          <Form.Control 
            name='ctype'
            value={course.ctype}
            onChange={(e) => setCourse({ ...course, ctype: e.target.value })}
            required
          />
        </Form.Group> */}
        <Form.Group className="mb-3">
          <Form.Label>Course type</Form.Label>
          <Form.Select
            name='ctype'
            value={course.ctype}
            onChange={(e) => setCourse({ ...course, ctype: e.target.value })}
            required
          >
            <option>Open this select menu</option>
            <option value="Math">Math</option>
            <option value="Science">Science</option>
            <option value="Tech">Tech</option>
          </Form.Select>
        </Form.Group>
        <Button type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

export default CourseForm;