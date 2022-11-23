import Cart from "./Cart.js";
import Logo from "./Logo";
import classes from '../../styles/HeaderTop.module.css'

export default function HeaderTop() {
  return (
    <div className={classes.headerTop}>
      <Logo />
      <Cart />
    </div>
  )
}
