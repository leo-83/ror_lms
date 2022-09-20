import { Container, Row, Col, Card } from 'react-bootstrap';

const Team = () => (
  <Container>
    <h1 className='text-center'>Team Members</h1>
    <Row>
      <Col md='3' sm='12'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://images.unsplash.com/photo-1663529695671-2134387a4827?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1015&q=80" />
          <Card.Body>
            <Card.Title>Bob Smith</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col md='3' sm='12'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://images.unsplash.com/photo-1663529695671-2134387a4827?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1015&q=80" />
          <Card.Body>
            <Card.Title>Bob Smith</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col md='3' sm='12'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://images.unsplash.com/photo-1663529695671-2134387a4827?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1015&q=80" />
          <Card.Body>
            <Card.Title>Bob Smith</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col md='3' sm='12'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://images.unsplash.com/photo-1663529695671-2134387a4827?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1015&q=80" />
          <Card.Body>
            <Card.Title>Bob Smith</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
)

export default Team;