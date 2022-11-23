import Link from 'next/link'

export default function EmptyCart() {
  return (
    <>
        <h1 className='text-center mt-5'>Ваша корзина пуста :(</h1>
        <div className='text-center'>
            <Link href="/catalog">
              <a>Давай наполним её...</a>
            </Link>
        </div>
    </>
  )
}
