import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserList from '../users/UserList';
import { CourseConsumer } from '../../providers/CourseProvider';
import CourseForm from './CourseForm';

const CourseShow = ({ updateCourse, deleteCourse }) => {
  const { id } = useParams()
  const [course, setCourse] = useState({ title: '', desc: '', ctype: '' })
  const [courseUsers, setCourseUsers] = useState([])
  const [editing, setEdit] = useState(false)

  useEffect( () => {
    axios.get(`/api/courses/${id}`)
      .then( res => setCourse(res.data))
      .catch( err => console.log(err) )

    axios.get(`/api/${id}/courseUsers`)  
      .then( res => setCourseUsers(res.data))
      .catch( err => console.log(err) )  
  }, [])

  const { title, desc, ctype } = course
  return (
    <>
      { editing ?
        <>
          <CourseForm
            id={id}
            title={title}
            desc={desc}
            ctype={ctype}
            updateCourse={updateCourse}
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
          <h1>{title}</h1>
          <h3>{ctype}</h3>
          <p>{desc}</p>
          <Button 
            variant="warning"
            onClick={() => setEdit(true)}
          >
            Edit
          </Button>
          <Link 
            to={`/${id}/enrollments`}
            state={{ courseTitle: title }}
          > 
            <Button variant="success">
              Enrollments
            </Button>
          </Link>
          <Button 
            variant="danger"
            onClick={() => deleteCourse(id)}
          >
            Delete
          </Button>
          <br />
          <h1>All users taking this course</h1>
          <UserList users={courseUsers} />
        </>
      }
    </>
  )
}

const ConnectedCourseShow = (props) => (
  <CourseConsumer>
    { value => <CourseShow {...value} {...props} />}
  </CourseConsumer>
)


export default ConnectedCourseShow;