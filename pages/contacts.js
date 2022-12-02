import { Button, Col, Container, Row } from 'react-bootstrap'
import MainContainer from '../Layouts/MainContainer'
import { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import MySpiner from '../components/CartPage/MyModal/MySpiner';

const adress = 'https://your-candle-dekor129.vercel.app'

export default function Contacts() {
  const [isLoad, setIsLoad] = useState(false)

  const [form, setForm] = useState({
    name: '',
    email: '',
    tel: '',
    comment: ''
  })

  const handleSubmit = async (event)=> {
    event.preventDefault()
    if(form.name === false || form.email === false || form.tel === false || form.agree === false) {
      return
    }

    const response = await fetch(`${adress}/api/sendMessage`, {
      method: 'POST',
      body: JSON.stringify({
        form
      })

    });

    if(response.ok) {
      const res = await response.json()
      if(res.work) {
        setIsLoad(!isLoad)
        setForm({
          name: '',
          email: '',
          tel: '',
          comment: '',
          agree: false
        })
      }
    }
  }

  return (
    <>
    <MainContainer title = 'Контакты помогут легко связаться по указанным на странице способам.' description ={'С нами можно легко связаться по указанным на странице способам.'}>
      <h2 className="text-center">Контакты</h2>
      <Container className='my-5'>
        <Row>
          <Col sm={12} md={6} className={'mb-5'}><h3>Вы можете написать нам свой вопрос,отзыв или предложение</h3></Col>
          <Col sm={12} md={6}>
          <Form className='position-relative'  onSubmit={handleSubmit}>
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
              label="Комментарий"
            >
              <Form.Control 
                as="textarea" 
                placeholder="Комментарий" 
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
                type="checkbox" label="Нажимая на флажок вы даете согласие на обработку персональных данных и соглашаетесь с политикой конфиденциальности" 
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
          </Col>
        </Row>
      </Container>
      <Container className='my-5'>
        <Row>
          <Col className='mb-5'><strong>Телефон:</strong> <a href='tel:89105755989'><strong>8-910-575-59-89</strong></a> | | <a href='tel:89106293912'><strong>8-910-629-39-12</strong></a></Col>
        </Row>
      </Container>
    </MainContainer>
    </>
  )
}
