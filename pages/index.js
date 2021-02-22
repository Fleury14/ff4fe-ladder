import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Main from '../components/main/main';

export async function getStaticProps() {
  let currentSeason = 1;
  let results = [];
  let schedule = [];
  const seasonResponse = await fetch(`${process.env.API_ADDR}/GetSeasons`)
    .then(response => response.json())
    .then(data => {
      const activeSeason = data.find(season => season.IsCurrentSeason === true);
      if (activeSeason) {
        console.log('active season found:', activeSeason);
        currentSeason = activeSeason.season_id;
      }
    });

  const rankingResponse = await fetch(`${process.env.API_ADDR}/GetStandings?season_id=${currentSeason}&flag_id=0`)
  results = await rankingResponse.json();

  const scheduleResponse = await fetch(`${process.env.API_ADDR}/GetSchedule?season_id=${currentSeason}`)
  schedule = await scheduleResponse.json();

  const exampleProps = {
      schedule: schedule,
      rankings: results,
  }

  console.log(exampleProps);
 
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
