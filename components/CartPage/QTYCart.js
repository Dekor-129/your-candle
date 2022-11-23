import { Col } from 'react-bootstrap'

export default function QTYCart({ cartItems, elem }) {
  return (
    <Col className="text-center  align-self-center">{cartItems.filter((el)=> el.name === elem.name).length}</Col>
  )
}
