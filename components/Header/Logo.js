import classes from '../../styles/HeaderTop.module.css'
import Link from 'next/link'

export default function Logo() {
  return (
    <Link href={'/'}>
      <div className={classes.logoBlock}> 
        <div className={classes.textLogoBlock}>Твоя свеча</div>
        <img src='/fire.png'/>
      </div>
    </Link>
  )
}
