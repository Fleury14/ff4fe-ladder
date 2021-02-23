import { useRouter } from 'next/router';
import { getPlayerData } from '../../http'
import PlayerDetail from '../../components/player-detail/player-detail';

export async function getServerSideProps(context) {
    const racerDetail = await getPlayerData({ id: context.query.id })
    return {
        props: {
            racerDetail
        }
    }
}

const PlayerDetailPage = (props) => {
    console.log('prizzops', props)
    const { racerDetail } = props;
    const router = useRouter();
    return (
        <PlayerDetail racerDetail={racerDetail} id={router.query.id} />
    )
}

export default PlayerDetailPage;