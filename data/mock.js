import Link from 'next/link';

export const mockTopTen = [
  {
    key: 1,
    name: 'Antidale',
    score: 2000
  },
  {
    key: 2,
    name: 'Invenerable',
    score: 1910
  },
  {
    key: 3,
    name: 'penguin8r',
    score: 1857
  },
  {
    key: 4,
    name: 'Poidrac',
    score: 1810
  },
  {
    key: 5,
    name: 'Asuka424',
    score: 1795
  },
  {
    key: 6,
    name: 'Bakashinobi',
    score: 1756
  },
  {
    key: 7,
    name: 'Soleras',
    score: 1722
  },
  {
    key: 8,
    name: 'SchalaKitty',
    score: 1700
  },
  {
    key: 9,
    name: 'Fleury14',
    score: 1676
  },
  {
    key: 10,
    name: 'pk4787',
    score: 2
  },
]

export const mockTopTenColumns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Score',
    dataIndex: 'score',
    key: 'score',
    className: 'righteous'
  }
]

export const mockScheduledRaces = [
  {
    key: 1,
    flagset: "Hero",
    time: '3/12/2021 3:00am'
  },
  {
    key: 2,
    flagset: "Beginner",
    time: '3/12/2021 7:00am'
  },
  {
    key: 3,
    flagset: "LHL Table",
    time: '3/12/2021 12:00pm'
  },
  {
    key: 4,
    flagset: "Loot Goblin",
    time: '3/12/2021 4:00pm'
  },
  {
    key: 5,
    flagset: "Mystery",
    time: '3/12/2021 8:00pm'
  },
  {
    key: 6,
    flagset: "Hero",
    time: '3/12/2021 11:00pm'
  },
]

export const mockRankingsColumns = [
  {
    title: 'Rank',
    dataIndex: 'rank',
    key: 'rank',
    className: 'righteous',
    sorter: (a, b) => a.rank - b.rank,
    sortDirections: ['ascend', 'descend']
  },
  {
    title: 'Racer',
    dataIndex: 'racer',
    key: 'racer',
    sorter: (a, b) => a.racer - b.racer,
    sortDirections: ['ascend', 'descend']
  },
  {
    title: 'Rating',
    dataIndex: 'rating',
    key: 'rating',
    className: 'righteous',
    sorter: (a, b) => a.rating - b.rating,
    sortDirections: ['ascend', 'descend']
  },
  {
    title: 'Last Change',
    dataIndex: 'lastChange',
    key: 'lastChange',
    className: 'righteous',
    sorter: (a, b) => a.lastChange - b.lastChange,
    sortDirections: ['ascend', 'descend']
  },
  {
    title: 'Wins',
    dataIndex: 'wins',
    key: 'wins',
    className: 'righteous',
    sorter: (a, b) => a.wins - b.wins,
    sortDirections: ['ascend', 'descend']
  },
  {
    title: 'Losses',
    dataIndex: 'losses',
    key: 'losses',
    className: 'righteous',
    sorter: (a, b) => a.losses - b.losses,
    sortDirections: ['ascend', 'descend']
  },
  {
    title: 'Ties',
    dataIndex: 'ties',
    key: 'ties',
    className: 'righteous',
    sorter: (a, b) => a.ties - b.ties,
    sortDirections: ['ascend', 'descend']
  },
  {
    title: 'Total',
    dataIndex: 'total',
    key: 'total',
    className: 'righteous',
    sorter: (a, b) => a.totale - b.total,
    sortDirections: ['ascend', 'descend']
  },
  {
    title: 'Win %',
    dataIndex: 'winPercent',
    key: 'winPercent',
    className: 'righteous',
    sorter: (a, b) => a.winPercent - b.winPercent,
    sortDirections: ['ascend', 'descend']
  },
]

export function makeMockRankings() {
  const mockData = [];
  for (let i = 0; i < 100; i++) {
    mockData.push({
      rank: i+1,
      racer: 'Racer Unknown',
      rating: 1500,
      lastChange: 8,
      wins: 30,
      losses: 10,
      ties: 0,
      total: 40,
      winPercent: 75
    })
  }
  return mockData;
}



export const mockScheduledRacesColumns = [
  {
    title: 'Flagset',
    dataIndex: 'flagset',
    key: 'flagset',
  },
  {
    title: 'Time',
    dataIndex: 'time',
    key: 'time'
  }
]

export function mockCalendarRaceCell(value) {
  console.log('called!');
  if(value.date() === 15) {
    return (
      <ul style={{ listStyle: 'none', fontSize: "10px", padding: 0 }} className="calendar-list">
        <li>
          <Link href="/race-detail?id=12345">
            <span>4:00pm: Mystery</span>
          </Link>
        </li>
        <li>
          <Link href="/race-detail?id=12345">
            <span>7:00pm: Hero</span>
          </Link>
        </li>
      </ul>
    )
  }
}

export const mockPlayerRankingsColumns = [
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category'
  },
  {
    title: 'Record',
    dataIndex: 'record',
    key: 'record'
  },
  {
    title: 'Rank',
    dataIndex: 'rank',
    key: 'rank',
    className: 'righteous',
  },
  {
    title: 'Rating',
    dataIndex: 'rating',
    key: 'rating',
    className: 'righteous'
  },
]

export const mockPlayerLifeTimeRanking = [
  {
    key: 1,
    category: 'Global',
    record: '39-11-0  (78%)',
    rank: 3,
    rating: 2000
  },
  {
    key: 1,
    category: 'Beginner',
    record: '39-11-0  (78%)',
    rank: 3,
    rating: 2000
  },
  {
    key: 1,
    category: 'Push B 2 Jump',
    record: '12-3-0  (80%)',
    rank: 3,
    rating: 1978
  },
  {
    key: 1,
    category: 'Hero',
    record: '7-5-0  (58%)',
    rank: 21,
    rating: 1644
  },
  {
    key: 1,
    category: 'Mystery',
    record: '9-2-0  (81%)',
    rank: 4,
    rating: 1930
  },
  {
    key: 1,
    category: 'LHL Bracket',
    record: '11-1-0  (92%)',
    rank: 1,
    rating: 2175
  },
]