import { Container, ListGroup } from 'react-bootstrap';
import EnrollShow from './EnrollShow';

const EnrollList = ({ enrollments }) => (
  <Container>
    <ListGroup variant="flush">
      { enrollments.map( e => 
        <EnrollShow 
          key={e.id}
          {...e}
        />
      )}
    </ListGroup>
  </Container>
)

export default EnrollList;