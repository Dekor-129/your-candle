import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import MainContainer from '../Layouts/MainContainer'

export default function Home() {
  return (
    <>
      <MainContainer>
        <Container>
          <h2 className='mb-5 text-center'>
            Добро пожаловать в наш уютный мирок, где каждая свеча может стать твоей!
          </h2>
            <Col className='text-center' xs={12}>
              <Image 
                src={ '/index.png' } 
                width={800}
                height={600}
                placeholder="blur"
                blurDataURL={`data:index.png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOsn3WuHgAF7wJoVTITfAAAAABJRU5ErkJggg==`}
              />
            </Col>
            
          
          
        </Container>
      </MainContainer>
    </>   
  )
}
