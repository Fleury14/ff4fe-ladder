import { useRouter } from 'next/router';
import PlayerDetail from '../../components/player-detail/player-detail';

const PlayerDetailPage = (props) => {
    const router = useRouter();
    return (
        <PlayerDetail id={router.query.id} />
    )
}

export default PlayerDetailPage;