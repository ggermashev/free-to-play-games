async function getGames({genre= 'all', platform = 'all', sortBy = 'all'} : {genre?: string, platform?: string, sortBy?: string}) {
    const response = await fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/games?
        ${genre !== 'all' && `category=${genre}`}&
        ${platform !== 'all' && `platform=${platform}`}&
        ${sortBy !== 'all' && `sort-by=${sortBy}`}
        `, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'cfab58aea5msh7688b8d15545bddp1df4e2jsn9e32d7e707fe',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    })
    const data = await response.json()
    return data
}

async function getGame(gameId: number) {
    const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'cfab58aea5msh7688b8d15545bddp1df4e2jsn9e32d7e707fe',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    })
    const data = await response.json()
    return data
}

export {getGames, getGame}