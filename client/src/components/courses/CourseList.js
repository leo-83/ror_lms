import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CourseList = ({ courses }) => (
  <Container>
    <Row md='4' sm='12'>
      { courses.map( c =>
        <Col>
          <Card style={{ width: '10rem' }}>
            <Card.Body>
              <Card.Title>{c.title}</Card.Title>
              <Card.Text>
                {c.desc}
                {c.ctype}
              </Card.Text>
              <Link to={`/courses/${c.id}`}>
                <Button>Show</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      )}
    </Row>
  </Container>
)

export default CourseList;