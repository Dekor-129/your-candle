import { Col, Container, } from 'react-bootstrap'
import MainContainer from '../Layouts/MainContainer'

export default function About() {
  return (
  <>
    <MainContainer title = 'На этой странице мы расскажем о нас, нашем деле и почему с нами работать выгодно' description={'На этой странице мы расскажем о нас, нашем деле и почему с нами работать выгодно.'}>
      <h2 className="text-center">О нас</h2>
      <Container>
        <Col className='my-5'>
          Наша команда занимается поставками свечей из соевого воска по всей территории России. Мы работаем как с юридическими, так и с физическими лицами. У нас можно заказать контейнерные, ароматические, формовые свечи и свечи с посланием.
        </Col>
      </Container>
    </MainContainer>
    </>
  )
}
