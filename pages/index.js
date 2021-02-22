import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Main from '../components/main/main';

export async function getStaticProps() {
  let currentSeason = 1;
  let results = [];
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
    .then(response => response.json())
    .then(data => results = data);

    return {
      props: {
        rankings: results
      }
    };
}

export default function Home({ rankings }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>ALTTP Ladder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        <Main rankings={rankings} />
      </div>

      
    </div>
  )
}
