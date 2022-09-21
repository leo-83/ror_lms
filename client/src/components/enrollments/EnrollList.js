import { Container, ListGroup } from 'react-bootstrap';
import EnrollShow from './EnrollShow';

const EnrollList = ({ enrollments, updateEnroll, unenrolledUsers, deleteEnroll }) => (
  <Container>
    <ListGroup variant="flush">
      { enrollments.map( e => 
        <EnrollShow 
          key={e.id}
          {...e}
          updateEnroll={updateEnroll}
          unenrolledUsers={unenrolledUsers}
          deleteEnroll={deleteEnroll}
        />
      )}
    </ListGroup>
  </Container>
)

export default EnrollList;