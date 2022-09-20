import { useParams } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Image, Button } from "react-bootstrap";

const UserShow = ({}) => {
  const [user, setUser] = useState({ first_name: '', last_name: '', img: '' })
  const { id } = useParams()

  useEffect( () => {
    axios.get(`/api/users/${id}`)
      .then( res => setUser(res.data) )
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
    </>
  )
}

export default UserShow;