import ProductPageImg from '../../../components/ProductPageImg';
import db from '../../../dataBase/containerCandlesDB.json'
import colorsDB from '../../../dataBase/colorsDB.json'
import MainContainer from '../../../Layouts/MainContainer'
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import PageButton from './PageButton';

export default function ContainerCandles({ product, colors }) {
  const [color, setColor] = useState(colors[0])
  const [prod, setProd] = useState({ ...product })
  const [quantity, setQuantity] = useState([ prod ])

  //console.log(prod);
  //console.log(quantity);

  const normilize = ()=> {
    setProd(()=> {
      const obj = {
        ...product
      }
      return obj
    })
  }
  const handleColor = (e)=>{
    setColor(...colors.filter((el)=> el.name === e.target.value))
    const color = colors.filter((el)=> el.name === e.target.value)[0]
    setProd((oldProp)=> {
      const obj = {
        ...oldProp,
        parameter: {
          ...oldProp.parameter,
          color: color
        }
      }
      setQuantity([ obj ])
      return obj
    })
  }

  const handleVolume = (volume)=> {
    setProd((oldProp)=> {
      const price = volume === 50 ? 250 : volume === 100 ? 350 : 550
      const currentPrice = volume === 50 ? 200 : volume === 100 ? 300 : 450

      const obj = {
        ...oldProp,
        price,
        currentPrice,
        parameter: {
          ...oldProp.parameter,
          volume
        }
      }

      setQuantity([ obj ])

      return obj
    })
  }

  const increment = ()=>{
    setQuantity([...quantity, prod])
  }

  const decrement = ()=>{
    if(quantity.length > 1){
      let arr = [...quantity]
      arr.pop()
      setQuantity(arr)
    }
  }

  return (
    <MainContainer 
      title = { `Свеча ${product.name} по доступной цене` } 
      description={`Свеча ${product.name} по доступной цене.`}
      keywords={`свеча ${product.name}, формовые свечи`}
    >
      <Container>
        <div className='blockPath'>
          <Link href={'/'}>
            <a>Главная / </a>
          </Link>
          <Link href={'/catalog'}>
            <a>Каталог / </a>
          </Link>
          <Link href={'/catalog/container-candles'}>
            <a>Контейнерные свечи / </a>
          </Link>
          <Link href={`/catalog/container-candles/${prod.path}`}>
            <a><span>{prod.name}</span></a>
          </Link>
        </div>
      </Container>

      <Container className='my-4'>
        <Row>
          <Col lg={6}>
            <ProductPageImg src={ prod.src }/>
          </Col>
          <Col lg={6}>
            <Col>
              <Tabs
                defaultActiveKey="parameter"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab eventKey="parameter" title="Характеристики">
                  <Container>
                    <Row>
                      <Col>Объем свечи: </Col>
                      <Col>
                        <Row>
                          <Col>
                            <button className={prod.parameter.volume === 50 ? 'btn-valume-active' : 'btn-valume'} onClick={()=>handleVolume(50)} >50 мл</button>
                          </Col>
                          <Col>
                            <button className={prod.parameter.volume === 100 ? 'btn-valume-active' : 'btn-valume'} onClick={()=>handleVolume(100)} >100 мл</button>
                          </Col>
                          <Col>
                            <button className={prod.parameter.volume === 200 ? 'btn-valume-active' : 'btn-valume'} onClick={()=>handleVolume(200)} >200 мл</button>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    
                    <Row className='mt-4'>
                      <Col>Цвет: </Col>
                      <Col>
                        <Row>
                          <Col xs ={ 3 }>
                            <div className={'colorIcon ' + color.color}></div>
                          </Col>
                          <Col>
                            <Form.Select onChange={handleColor} size="sm">
                              {
                                colors.map((el)=>(
                                  <option key={el.id}>{el.name}</option>
                                ))
                              }
                            </Form.Select>
                          </Col>
                        </Row>
                      </Col>
                    </Row>

                  </Container>
                </Tab>
              </Tabs>
            </Col>
            <Col>
              <Container style={{marginTop: '200px'}}>
                <hr />
                <Row>
                  <Col>Свеча {prod.name}</Col>
                  <Col>+ {prod.currentPrice} &#8381;</Col>
                </Row>
                <Row>
                  <Col>Цвет {prod.parameter.colorName}</Col>
                  <Col>+ 0 &#8381;</Col>
                </Row>
                <Row>
                    <Col>Количество</Col>
                    <Col>
                      <span style={{cursor: 'pointer'}} onClick={decrement}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className ="bi bi-dash-square" viewBox="0 0 16 16">
                          <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                          <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                        </svg>
                      </span>
                      <span className=' mx-2'>
                        {quantity.length}
                      </span>
                      <span style={{cursor: 'pointer'}} onClick={increment}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus-square" viewBox="0 0 16 16">
                          <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                        </svg>
                      </span>
                    </Col>
                </Row>
                <Row>
                  <Col>Итого</Col>
                  <Col>
                    + {

                      quantity.reduce((current, el)=> current + el.currentPrice, 0)
                    } &#8381;
                  </Col>
                </Row>
                <Row className='justify-content-end mt-3'>
                  <Col sm='6'>
                    <PageButton elem={quantity} normilize={normilize} />
                  </Col>
                </Row>
              </Container>
            </Col>
          </Col>
        </Row>

      </Container>
    </MainContainer>
  )
}

export async function getStaticPaths() {
  const product = await db
  const paths = product.map((el) => ({
    params: { id: el.path },
  }))
  
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const product = await db.filter((elem)=> elem.path === params.id)[0]
  const colors = await colorsDB

  return { 
    props: { 
      product, 
      colors 
    } 
  }
}