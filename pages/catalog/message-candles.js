import MainContainer from '../../Layouts/MainContainer'
import ProductCard from '../../components/ProductCard';
import db from '../../dataBase/messageCandlesDB.json'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap';

export default function MessageCandles() {
  return (
    <>
    <MainContainer 
      title = 'Большой выбор свечей с посланием по доступным ценам' 
      description={'Большой выбор свечей с посланием по доступным ценам.'}
      keywords={'свечи с посланием'}
    >
      <Container>
        <div className='blockPath'>
          <Link href={'/'}>
            <a>Главная / </a>
          </Link>
          <Link href={'/catalog'}>
            <a>Каталог / </a>
          </Link>
          <Link href={'/catalog/message-candles'}>
            <a><span>Свечи с посланием</span></a>
          </Link>
        </div>
      </Container>

      <Container className='mb-5'>
        <Row>
          {
            db.map((elem) => {
              return(
                <Col className='d-flex justify-content-center' xxl={3} xl={4} lg={4} md={6} key={elem.id}>
                  <ProductCard setButton elem={elem}/>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </MainContainer>
    </>
  )
}
