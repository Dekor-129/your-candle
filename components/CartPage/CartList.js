import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import classes from '../../styles/Cart.module.css'
import MyModal from './MyModal'
import PriceCart from './PriceCart'
import ProductCart from './ProductCart'
import QTYCart from './QTYCart'
import TrashCart from './TrashCart'

export default function CartList({showSuccess}) {
  const cartItems = useSelector((state)=> state.items.cartItems)
  const sortedCart = useSelector((state)=> state.items.sortedCart)
  const [modalShow, setModalShow] = useState(false)

  return (
    <>
      <Container className={classes.cartContainer + ' my-5'}>
        {
          sortedCart.map((elem)=>(
            <Row className={' m-4' } key={elem.id}>
              <ProductCart elem={elem} />
              <Col className="text-center  align-self-center">
                <Row>
                  <PriceCart cartItems={cartItems} elem={elem} /> 
                  <QTYCart cartItems={cartItems} elem={elem} /> 
                </Row>
              </Col>
              <TrashCart cartItems={cartItems} elem={elem} />
            </Row>
          ))
        }
      </Container>
      <Container>
        <Row className='justify-content-end mx-5'>
            <Col sm={5} md={4} lg={3} xl={3}>
              <h4  className={'text-center mb-3' }>Итого: {cartItems.reduce((sum, current)=>  sum + (current.parameter.coloring.coloring ? current.currentPrice + current.parameter.coloring.coloringPrice : current.currentPrice) , 0)} &#8381;</h4>
            </Col>
        </Row>
        <Row className='justify-content-end mx-5'>
            <Col className='text-center' sm={5} md={4} lg={3} xl={3}>
              <button onClick={() => setModalShow(true)} className={classes.Cartbutton + ' mb-5'}>Оформить заказ</button>
            </Col>
        </Row>
        <MyModal
          show={modalShow}
          onHide={() => setModalShow(true)}
          onClose={setModalShow}
          showSuccess={showSuccess}
        />
      </Container>
    </>
  )
}
