import { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux'
import { fullDeleteAction } from '../../../store/itemsReducer'
import { useSelector } from 'react-redux'
import MySpiner from '../MyModal/MySpiner';

const adress = 'https://your-candle-dekor129.vercel.app'

export default function MyForm({ onClose, showSuccess, load }) {
  const dispatch = useDispatch()
  const cartItems = useSelector((state)=> state.items.cartItems)
  const sortedCart = useSelector((state)=> state.items.sortedCart)
  const [isLoad, setIsLoad] = useState(false)


  const [form, setForm] = useState({
    name: '',
    email: '',
    tel: '',
    comment: '',
    agree: false
  })
  

  const handleSubmit = async (event)=> {
    event.preventDefault()
    if(form.name === false || form.email === false || form.tel === false || form.agree === false) {
      return
    }

    const response = await fetch(`${adress}/api/send`, {
      method: 'POST',
      body: JSON.stringify({
        form,
        cartItems,
        sortedCart
      })

    });

    if(response.ok) {
      onClose(false)
      dispatch(fullDeleteAction())
      showSuccess.handleClose(true)
      const res = await response.json()
      if(res.work) setIsLoad(!isLoad)
    }
  }

  return (
    <Form className='position-relative' onSubmit={handleSubmit}>
      <FloatingLabel 
        controlId="floatingInputName" 
        label="Имя" 
        className="mb-3"
      >
        <Form.Control 
          type="text" 
          placeholder="Имя" 
          value={form.name}
          required
          onChange={(e)=>{
            setForm({...form, name: e.target.value})
          }}
        />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Email"
        className="mb-3"
      >
        <Form.Control 
          type="email" 
          placeholder="name@gmail.com" 
          value={form.email}
          required
          onChange={(e)=>{
            setForm({...form, email: e.target.value})
          }}
        />
      </FloatingLabel>
      <FloatingLabel 
        controlId="floatingTel" 
        label="Телефон" 
        className="mb-5 "

      >
        <Form.Control 
          type="tel" 
          placeholder="Телефон"
          value={form.tel}
          required
          onChange={(e)=>{
            setForm({...form, tel: e.target.value})
          }}
        />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingTextarea"
        label="Комментарий к заказу"
      >
        <Form.Control 
          as="textarea" 
          placeholder="Комментарий к заказу" 
          style={{ height: '100px' }} 
          value={form.comment}
          onChange={(e)=>{
            setForm({...form, comment: e.target.value})
          }}
        />
        
      </FloatingLabel>
      <Form.Group className="my-3" controlId="formBasicCheckbox">
        <Form.Check 
          required 
          type="checkbox" label="Срок изготовления и сборки заказов составляет 1-3 дней" 
          onClick={()=>{
            setForm({...form, agree: !form.agree})
          }}
        />
      </Form.Group>
      <Container className='mt-3'>
        <Row className='justify-content-end'>
          <Col sm={2}>
            <Button 
              onClick={()=> 
                form.agree && setIsLoad(!isLoad)
              } 
              type='submit'
            >Отправить</Button>
          </Col>
        </Row>
      </Container>
      {isLoad && <MySpiner />}
    </Form>
  );
}