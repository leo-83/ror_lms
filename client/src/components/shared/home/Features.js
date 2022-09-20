import { Container, Row, Col, Image } from 'react-bootstrap';

const Features = () => (
  <Container>
    <Row>
      <Col md='6' sm='12'>
        <h1>Featuring Our Top Courses</h1>
        <Row>
          <Col md='6' sm='12'>
            <i></i>
            <p>White Box testing having to test ourside the box</p>
          </Col>
          <Col md='6' sm='12'>
            <i></i>
            <p>Deploy and shipping a finished application</p>
          </Col>
        </Row>
      </Col>
      <Col md='6' sm='12'>
        <Image 
          src="https://images.unsplash.com/photo-1663524789637-1a0ad51c64c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
          alt='home img'
          width='300'
        />
      </Col>
    </Row>
  </Container>
)

export default Features;