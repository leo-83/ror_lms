import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const EnrollForm = ({ addEnroll, setAdd, unenrolledUsers, id, user_id, updateEnroll, setEdit }) => {
  const [enrollment, setEnrollment] = useState({ user_id: 0 })

  useEffect( () => {
    if (id) {
      setEnrollment({ user_id })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateEnroll(id, enrollment)
      setEdit(false)
    } else {
      addEnroll(enrollment)
      setAdd(false)
    }
    setEnrollment({ user_id: 0 })
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>User</Form.Label>
          <Form.Select
            name='user_id'
            value={enrollment.user_id}
            onChange={(e) => setEnrollment({...enrollment, user_id: parseInt(e.target.value) })}
            required
          >
            <option>Choose an user</option>
            { unenrolledUsers.map( u => 
              <option value={u.id} key={u.id}>
                {u.first_name} {u.last_name}
              </option>
            )}
          </Form.Select>
        </Form.Group>
        <Button type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

export default EnrollForm;