import Link from 'next/link';

export const topTenColumns = [
    {
      title: 'RacerName',
      dataIndex: 'RacerName',
      key: 'RacerName',
      render: text => <Link href={`/player-detail?id=${text}`}>{text}</Link>
    },
    {
      title: 'Rating',
      dataIndex: 'Rating',
      key: 'Rating',
      className: 'righteous'
    }
  ]