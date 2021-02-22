import Rankings from '../../components/rankings/rankings';
import { getCurrentSeason, getRankings } from '../../http';

export async function getStaticProps(context) {
  console.log('context', context);
  const currentSeason = await getCurrentSeason();

  const rankings = await getRankings({ season: currentSeason })

  return {
    props: {
      rankings,
    }
}
}

const RankingsPage = (props) => {
  const { rankings } = props;
  return (
    <>
      <Rankings rankings={rankings} />
    </>
  );
}

export default RankingsPage;