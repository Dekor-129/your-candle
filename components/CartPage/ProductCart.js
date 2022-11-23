import { Col, Container, Row } from 'react-bootstrap'
import classes from '../../styles/Cart.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function ProductCart({ elem }) {
  return (
    <Col className="text-center  align-self-center">
      <Link href={`/catalog/shaped-candles/${elem.path}`}>
        <a style={{color: '#000'}}>
          <Container>
            <Row >
              <Col  xl={6} className="text-center  align-self-center">
                <Image className={classes.img} height={300} width={300} src={elem.src} />
              </Col>
              <Col className="text-center  align-self-center">
                {elem.name}
              </Col>
            </Row>
          </Container>
        </a>
      </Link>
    </Col> 
  )
}
