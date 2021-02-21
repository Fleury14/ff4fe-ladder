import  { useRouter } from 'next/router';
import RaceDetail from '../../components/race-detail/race-detail';

const RaceDetailPage = (props) => {
    const router = useRouter();
    return <RaceDetail id={router.query.id} />
}

export default RaceDetailPage;