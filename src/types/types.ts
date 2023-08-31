export const genres = ['mmorpg', 'shooter', 'strategy', 'moba', 'racing', 'sports', 'social',
    'sandbox', 'open-world', 'survival', 'pvp', 'pve', 'pixel', 'voxel',
    'zombie', 'turn-based', 'first-person', 'third-Person', 'top-down',
    'tank', 'space', 'sailing', 'side-scroller', 'superhero',
    'permadeath', 'card','battle-royale', 'mmo', 'mmofps', 'mmotps',
    '3d', '2d', 'anime', 'fantasy', 'sci-fi', 'fighting', 'action-rpg',
    'action', 'military', 'martial-arts', 'flight', 'low-spec',
    'tower-defense', 'horror', 'mmorts'].sort()
genres.unshift('all')

export const platforms = ['all', 'pc', 'browser']

export const sortBy = ['all', 'release-date','popularity', 'alphabetical', 'relevance']

interface ISystemRequirements {
    os: string,
    processor: string,
    memory: string,
    graphics: string,
    storage: string
}

export interface IGame {
    id: number,
    title: string,
    "thumbnail": string,
    short_description: string,
    description: string,
    game_url: string,
    genre: string
    platform: string,
    publisher: string,
    developer: string,
    release_date: string,
    minimum_system_requirements: ISystemRequirements,
    screenshots: {id: number, image: string}[]
}
