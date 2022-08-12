import WideEpisode from "../../types/WideEpisode";

async function fetchEpisodesFromURL(URL: string): Promise<WideEpisode[]> {
  const response = await fetch(URL);
  const widelyTypedEpisodes = response.json();
  return widelyTypedEpisodes;
}

export default fetchEpisodesFromURL;
