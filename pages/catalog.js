import MainContainer from '../Layouts/MainContainer'
import ProductCard from '../components/ProductCard';
import catalogDB from '../dataBase/catalogDB.json'
import { Container, Row, Col } from 'react-bootstrap';

export default function Catalog() {
  return (
    <>
    <MainContainer 
      title = 'В нашем асортименте вы найдете свечи на любой вкус: формовые свечи, ароматические свечи' 
      description={'В нашем асортименте вы найдете свечи на любой вкус: формовые свечи, ароматические свечи.'}
      keywords={'формовые свечи, ароматические свечи'}
    >
      <h2 className="text-center">Каталог</h2>
      <Container className='mb-5'>
        <Row>
          {
            catalogDB.map((elem) => {
              return(
                <Col className='d-flex justify-content-center' key={elem.id}>
                  <ProductCard elem={elem}/>
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

