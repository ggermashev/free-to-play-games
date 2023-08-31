async function getGames({genre= 'all', platform = 'all', sortBy = 'all'} : {genre?: string, platform?: string, sortBy?: string}) {
    const response = await fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/games?
        ${genre !== 'all' ? `category=${genre}&` : ''}
        ${platform !== 'all' ? `platform=${platform}&` : ''}
        ${sortBy !== 'all' ? `sort-by=${sortBy}&` : ''}
        `, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '676ccd3e18msh7c4967bc1796726p1c71aajsnc25d449104f3',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    })
    const data = await response.json()
    console.log(data)
    return data
}

async function getGame(gameId: number) {
    const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '676ccd3e18msh7c4967bc1796726p1c71aajsnc25d449104f3',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    })
    const data = await response.json()
    return data
}

export {getGames, getGame}