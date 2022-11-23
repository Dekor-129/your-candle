import classes from '../../styles/ProductCard.module.css'
import Link from 'next/link'
import {useRouter} from 'next/router'
import Image from 'next/image'

export default function ProductImg({ path, src }) {
  const router = useRouter()

  return (
    <Link href={`${router.pathname}/${path}`}>
      <div className='d-flex justify-content-center'>
        <a>
          <Image 
            className={ classes.img } 
            src={ src } 
            width={300}
            height={300}
            placeholder="blur"
            blurDataURL={`data:${src};base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOsn3WuHgAF7wJoVTITfAAAAABJRU5ErkJggg==`}
            />
        </a>
      </div>
    </Link>
  )
}
