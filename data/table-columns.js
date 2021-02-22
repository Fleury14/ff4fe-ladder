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
];

export const scheduledRacesColumns = [
  {
    title: 'Mode',
    dataIndex: 'Mode',
    key: 'Mode',
  },
  {
    title: 'StartTime',
    dataIndex: 'StartTime',
    key: 'StartTime'
  }
]

export const bigRankingsColumns = [
  {
    title: 'Rank',
    dataIndex: 'Rank',
    key: 'Rank',
    className: 'righteous',
    sorter: (a, b) => a.Rank - b.Rank,
    sortDirections: ['ascend', 'descend']
  },
  {
    title: 'Racer',
    dataIndex: 'RacerName',
    key: 'RacerName',
    sorter: (a, b) => a.RacerName - b.RacerName,
    sortDirections: ['ascend', 'descend'],
    render: (text, record) => <Link href={`/player-detail?id=${record.id}`}>{text}</Link>
  },
  {
    title: 'Rating',
    dataIndex: 'Rating',
    key: 'Rating',
    className: 'righteous',
    sorter: (a, b) => a.Rating - b.Rating,
    sortDirections: ['ascend', 'descend']
  },
  {
    title: 'Last Change',
    dataIndex: 'Change',
    key: 'Change',
    className: 'righteous',
    sorter: (a, b) => a.Change - b.Change,
    sortDirections: ['ascend', 'descend']
  },
  {
    title: 'Wins',
    dataIndex: 'Wins',
    key: 'Wins',
    className: 'righteous',
    sorter: (a, b) => a.Wins - b.Wins,
    sortDirections: ['ascend', 'descend']
  },
  {
    title: 'Losses',
    dataIndex: 'Losses',
    key: 'Losses',
    className: 'righteous',
    sorter: (a, b) => a.Losses - b.Losses,
    sortDirections: ['ascend', 'descend']
  },
  {
    title: 'Ties',
    dataIndex: 'Ties',
    key: 'Ties',
    className: 'righteous',
    sorter: (a, b) => a.Ties - b.Ties,
    sortDirections: ['ascend', 'descend']
  },
  {
    title: 'Total',
    dataIndex: 'Total',
    key: 'Total',
    className: 'righteous',
    sorter: (a, b) => a.Total - b.Total,
    sortDirections: ['ascend', 'descend']
  },
  {
    title: 'Win %',
    dataIndex: 'WinPercent',
    key: 'WinPercent',
    className: 'righteous',
    sorter: (a, b) => a.winPercent - b.winPercent,
    sortDirections: ['ascend', 'descend']
  },
]