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
  if (!season) season = 0;
  if (!flag) flag = 0;

  const rankingResponse = await fetch(`${process.env.API_ADDR}/GetStandings?season_id=${season}&flag_id=0`)
  results = await rankingResponse.json();

  return results;
}

export function getSchedule({ season }) {
  if (!season) season = 0;
  
  const scheduleResponse = await fetch(`${process.env.API_ADDR}/GetSchedule?season_id=${season}`)
  schedule = await scheduleResponse.json();

  return schedule;
}