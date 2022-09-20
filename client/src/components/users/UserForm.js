import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const UserForm = ({ addUser, setAdd, id, first_name, last_name, img, updateUser, setEdit }) => {
  const [user, setUser] = useState({ first_name: '', last_name: '', img: '' })
  
  useEffect( () => {
    if (id) {
      setUser({ first_name, last_name, img })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateUser(id, user)
      setEdit(false)
    } else {
      addUser(user)
      setAdd(false)
    }
    setUser({ first_name: '', last_name: '', img: '' })
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control 
            name='first_name'
            value={user.first_name}
            onChange={(e) => setUser({...user, first_name: e.target.value })}
            placeholder="first name" 
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control 
            name='last_name'
            value={user.last_name}
            onChange={(e) => setUser({...user, last_name: e.target.value })}
            placeholder="last name" 
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Profile Image</Form.Label>
          <Form.Control 
            name='img'
            value={user.img}
            onChange={(e) => setUser({...user, img: e.target.value })}
            placeholder="image" 
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

export default UserForm;