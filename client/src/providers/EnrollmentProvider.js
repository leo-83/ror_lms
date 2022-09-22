import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const EnrollmentContext = React.createContext();

export const EnrollmentConsumer = EnrollmentContext.Consumer;

const EnrollmentProvider = ({ children }) => {
  const [enrollments, setEnrollments] = useState([])
  const [unenrolledUsers, setUsers] = useState([])

  const getAllEnrollments = (courseId) => {
    axios.get(`/api/courses/${courseId}/enrollments`)
      .then( res => setEnrollments(res.data))
      .catch( err => console.log(err))
  }

  const getAllUnenrolledUsers = (courseId) => {
    axios.get(`/api/courses/${courseId}/unenrolled`)
      .then( res => setUsers(res.data))
      .catch( err => console.log(err))
  }

  const addEnroll = (courseId, enrollment) => {
    axios.post(`/api/courses/${courseId}/enrollments`, { enrollment })
      .then( res => setEnrollments([...enrollments, res.data]))
      .catch( err => console.log(err))
  }

  const updateEnroll = (courseId, id, enrollment) => {
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

  const deleteEnroll = (courseId, id) => {
    axios.delete(`/api/courses/${courseId}/enrollments/${id}`)
      .then( res => setEnrollments( enrollments.filter( e => e.id !== id )))
      .catch( err => console.log(err))
  }

  return (
    <EnrollmentContext.Provider value={{
      enrollments,
      unenrolledUsers,
      getAllEnrollments,
      getAllUnenrolledUsers, 
      addEnroll,
      updateEnroll,
      deleteEnroll,
    }}>
      { children }
    </EnrollmentContext.Provider>
  )
}

export default EnrollmentProvider;