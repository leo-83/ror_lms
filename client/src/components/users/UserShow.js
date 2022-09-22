import { useParams } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Image, Button } from "react-bootstrap";
import CourseList from '../courses/CourseList';
import { UserConsumer } from "../../providers/UserProvider";
import UserForm from "./UserForm";

const UserShow = ({ updateUser, deleteUser }) => {
  const [user, setUser] = useState({ first_name: '', last_name: '', img: '' })
  const { id } = useParams()
  const [userCourses, setUserCourses] = useState([])
  const [editing, setEdit] = useState(false)

  useEffect( () => {
    axios.get(`/api/users/${id}`)
      .then( res => setUser(res.data) )
      .catch( err => console.log(err) )

    axios.get(`/api/${id}/userCourses`)
      .then( res => setUserCourses(res.data) )
      .catch( err => console.log(err) )
  }, [])

  const { first_name, last_name, img } = user
  return (
    <>
      { editing ?
        <>
          <UserForm
            id={id}
            first_name={first_name}
            last_name={last_name}
            img={img}
            updateUser={updateUser}
            setEdit={setEdit}
          />
          <Button 
            variant="warning"
            onClick={() => setEdit(false)}
          >
            Cancel
          </Button>
        </>
        :
        <>
          <h1>{first_name} {last_name}</h1>
          <Image 
            src={img}
            alt={first_name}
            width='300'
          />
          <Button 
            variant="warning"
            onClick={() => setEdit(true)}
          >
            Edit
          </Button>
          <Button 
            variant="danger"
            onClick={() => deleteUser(id)}
          >
            Delete
          </Button>
          <br />
          <h1>All Courses this user is taking</h1>
          <CourseList courses={userCourses} />
        </>
      }
    </>
  )
}

const ConnectedUserShow = (props) => (
  <UserConsumer>
    { value => <UserShow {...value} {...props} />}
  </UserConsumer>
)

export default ConnectedUserShow;