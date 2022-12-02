import { useSelector } from 'react-redux'
import CartList from './CartList'
import EmptyCart from './EmptyCart'
import SuccessModal from './SuccessModal'
import { useState } from 'react';

export default function CartPage() {
  const cartItems = useSelector((state)=> state.items.cartItems)
  const [show, setShow] = useState(false)

  const handleClose = (arg) => {
    setShow(arg);
  }

  const showSuccess = {
    show,
    handleClose
  }

  return (
    <>
      {cartItems.length > 0 ? <CartList showSuccess={showSuccess} /> : <EmptyCart />}
      <SuccessModal showSuccess={showSuccess} />
    </>
  )
}
