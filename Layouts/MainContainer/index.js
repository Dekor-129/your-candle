import Head from 'next/head'
import Header from '../../components/Header'

export default function MainContainer(props) {
  const description = props.description ? props.description : ''
  const keywords = props.keywords ? props.keywords : ''
  const title = props.title ? props.title : 'Твоя свеча - это отличный выбор для подарка себе и любимым. Мы производим свечи из 100% соевого воска'

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={`Твоя свеча, это отличный выбор для подарка себе и любимым, мы производим свечи из 100% соевого воска. ` + description} />
        <meta name="keywords" content={`Свечи Рязань, соевые свечи рязань, свечи подарочные, ` + keywords} />
      </Head>
      <Header />
      <main>
        {props.children}
      </main>
    </>
  )
}
