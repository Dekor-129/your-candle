import classes from '../../styles/ProductCard.module.css'
import { useDispatch } from 'react-redux'
import { addProductAction } from '../../store/itemsReducer'
import { rotatePlus, rotateMinus, showAlert } from '../../store/animateReduser'

export default function CardButton({ elem }) {
  const dispatch = useDispatch()

  const addProduct = () =>{
    dispatch(addProductAction(elem));
    dispatch(showAlert(true));
    setTimeout(()=>dispatch(showAlert(false)), 2500)
  }

  const rotateCartPlus = (num = 0) =>{
    dispatch(rotatePlus(num))
  }

  const rotateCartMinus = (num = 0) =>{
    dispatch(rotateMinus(num))
  }

  return (
    <button
      className = {classes.buttonSendToCart}
      onClick={()=>{
        addProduct()
        rotateCartPlus(10)
        setTimeout(()=>rotateCartMinus(20), 250)
        setTimeout(()=>rotateCartPlus(10), 500)
      }}
    >
      В корзину
    </button>
  )
}
