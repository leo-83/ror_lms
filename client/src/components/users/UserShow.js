import { useParams } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Image, Button } from "react-bootstrap";
import CourseList from '../courses/CourseList';

const UserShow = ({}) => {
  const [user, setUser] = useState({ first_name: '', last_name: '', img: '' })
  const { id } = useParams()
  const [userCourses, setUserCourses] = useState([])

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
      <h1>{first_name} {last_name}</h1>
      <Image 
        src={img}
        alt={first_name}
        width='300'
      />
      <Button variant="warning">
        Edit
      </Button>
      <Button variant="danger">
        Delete
      </Button>
      <br />
      <h1>All Courses this user is taking</h1>
      <CourseList courses={userCourses} />
    </>
  )
}

export default UserShow;