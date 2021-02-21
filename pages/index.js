import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Main from '../components/main/main';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ALTTP Ladder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        <Main />
      </div>

      
    </div>
  )
}
