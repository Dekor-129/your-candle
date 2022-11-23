import { Col, Container, Row } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';

export default function MySpiner() {
  return (
    <Container className='position-absolute top-50 start-50 translate-middle'>
      <Row>
        <Col className='d-flex justify-content-center'>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Col>
      </Row>
    </Container>
  )
}
