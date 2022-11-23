import Alert from 'react-bootstrap/Alert';
import { motion } from "framer-motion";
import { useSelector } from 'react-redux'
import classes from "../../styles/Alert.module.css"

export default function MyAlert() {
  const alert = useSelector((state)=> state.animate.showAlert)
  const alertVariants = useSelector((state)=> state.animate.alertVariants)
  const items = useSelector((state)=> state.items.cartItems)

  return (
    <>
      {alert && <motion.div
        initial={alertVariants.hidden}
        animate={alertVariants.visible}
        variants={alertVariants}
        className={classes.alertDiv}
      >
        <Alert className={classes.alert}>
          {`Ваш заказ "${items[items.length - 1].name}" добавлен в корзину!`}
        </Alert>
      </motion.div>}
    </>
  )
}
