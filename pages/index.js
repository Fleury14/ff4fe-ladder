import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Main from '../components/main/main';
import { getCurrentSeason, getRankings, getSchedule } from '../http';

export async function getStaticProps() {
  let results = [];
  let schedule = [];
  const currentSeason = await getCurrentSeason();

  results = await getRankings({ season: currentSeason });  
  schedule = await getSchedule({ season: currentSeason });
 
  return {
    props: {
      schedule: schedule,
      rankings: results,
    }
  };
}

export default function Home({ rankings, schedule }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>ALTTP Ladder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        <Main rankings={rankings} schedule={schedule}/>
      </div>

      
    </div>
  )
}
