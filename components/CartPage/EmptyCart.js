import Link from 'next/link'

export default function EmptyCart() {
  return (
    <>
        <h1 className='text-center mt-5'>Твоя корзина пуста :(</h1>
        <div className='text-center'>
            <h4>
              <Link href="/catalog">
                <a>Давай наполним её...</a>
              </Link>
            </h4>
        </div>
    </>
  )
}
