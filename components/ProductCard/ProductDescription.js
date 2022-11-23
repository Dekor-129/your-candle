import classes from '../../styles/ProductCard.module.css'

export default function ProductDescription(props) {
  return (
    <div className={classes.textDesc}>
      <h4>{ props.elem.name}</h4>
    </div>
  )
}
