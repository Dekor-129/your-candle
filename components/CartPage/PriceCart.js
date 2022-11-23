import { Col } from 'react-bootstrap'

export default function PriceCart({elem, cartItems }) {
  const arr1 =  cartItems.filter((el)=> el.parameter.coloring.coloring === false)
  const arr2 =  cartItems.filter((el)=> el.parameter.coloring.coloring === true)

  return (
    <Col sm={12} md={6} className="text-center  align-self-center">
      {
        arr1.length > 0 &&  arr2.length > 0
        ? elem.currentPrice + ' - ' + (elem.currentPrice + elem.parameter.coloring.coloringPrice)
        : arr1.length > 0
        ? elem.currentPrice
        : elem.currentPrice + elem.parameter.coloring.coloringPrice
      } &#8381;
    </Col>
  )
}
