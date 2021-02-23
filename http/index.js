export async function getCurrentSeason() {
  let currentSeason = 1;
  const seasonResponse = await fetch(`${process.env.API_ADDR}/GetSeasons`)
  
  const seasonData = await seasonResponse.json();  
  
  const activeSeason = seasonData.find(season => season.IsCurrentSeason === true);
  
  if (activeSeason) {
    console.log('active season found:', activeSeason);
    currentSeason = activeSeason.season_id;
  }

  return currentSeason;
}

export async function getRankings({ season, flag }) {
  let results = [];
  if (!season) season = 0;
  if (!flag) flag = 0;

  const activeRacerList = await fetch(`${process.env.API_ADDR}/GetActiveRacers`);
  const racerList = await activeRacerList.json();

  const rankingResponse = await fetch(`${process.env.API_ADDR}/GetStandings?season_id=${season}&flag_id=0`)
  results = await rankingResponse.json();

  results.forEach((result, index) => {
    result.key = index + 1;
    result.Total = result.Wins + result.Losses + result.Ties;
    result.WinPercent = Math.round((result.Wins / result.Total) * 100);
    const racerRecord = racerList.find(racer => racer.RacerName === result.RacerName);
    if (racerRecord && racerRecord.racer_id) result.id = racerRecord.racer_id;
  });

  return results;
}

export async function getSchedule({ season }) {
  let schedule = [];
  if (!season) season = 0;
  
  const scheduleResponse = await fetch(`${process.env.API_ADDR}/GetSchedule?season_id=${season}`)
  schedule = await scheduleResponse.json();

  return schedule;
}

export async function getPlayerData({ id, season, flag, api }) {
  let stats = [];
  if (!id) return [];
  if (!season) season = 0;
  if (!flag) flag = 0;

  const statsResponse = await fetch(`${process.env.API_ADDR}/GetRacerStandings?racer_id=${id}&season_id=${season}&flag_id=${flag}`);
  stats = statsResponse.json();
  stats.WinPercent = Math.round(stats.Wins / (stats.Wins + stats.Losses + stats.Ties) * 100)
  console.log('sending')
  return stats;
}