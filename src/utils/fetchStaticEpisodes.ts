import mockEpisodes from '../data/mockEpisodes.json'
import WideEpisode from '../types/WideEpisode';

async function fetchStaticEpisodes(): Promise<WideEpisode[]> {

    return await mockEpisodes;
}

export default fetchStaticEpisodes;