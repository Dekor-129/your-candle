import MainContainer from '../Layouts/MainContainer'
import { useSelector } from 'react-redux'
import CartPage from '../components/CartPage'

export default function Cart() {
  const cartItems = useSelector((state)=> state.items.cartItems)

  return (
    <MainContainer title = 'Корзина'>
        <CartPage />
    </MainContainer>
  )
}
