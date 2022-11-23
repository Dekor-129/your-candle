import classes from '../../styles/ProductPage.module.css'
import Image from 'next/image'

export default function ProductPage(props) {
  return (
    <Image 
      className={ classes.img } 
      src={ props.src } 
      width={500}
      height={500}
      placeholder="blur"
      blurDataURL={`data:${props.src};base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOsn3WuHgAF7wJoVTITfAAAAABJRU5ErkJggg==`}
    />
  )
}
