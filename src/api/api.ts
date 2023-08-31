async function getGames({genre= 'all', platform = 'all', sortBy = 'all', limit=12, offset=0} : {genre?: string, platform?: string, sortBy?: string, limit?: number, offset?: number}) {
    const response = await fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/games?${genre !== 'all' ? `category=${genre}&` : ''}${platform !== 'all' ? `platform=${platform}&` : ''}${sortBy !== 'all' ? `sort-by=${sortBy}&` : ''}`, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'dd03ff617fmsh3f7edfc01eb462ep15e199jsn289d48116440',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    })
    const data = await response.json()
    console.log('all games')
    return data
}

async function getGame(gameId: number) {
    const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'dd03ff617fmsh3f7edfc01eb462ep15e199jsn289d48116440',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    })
    const data = await response.json()
    console.log('single game')
    return data
}

export {getGames, getGame}