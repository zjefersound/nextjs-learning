import Link from 'next/link'
import Head from 'next/head';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Homepage</title>
      </Head>
      <main>
        <h1>Olá mundo!</h1>
        <Link as='/motorcycle/jeferson' href='/[vehicle]/[person]' >
          Ir para o link
        </Link>
      </main>
    </div>
  )
}
export default Home;
