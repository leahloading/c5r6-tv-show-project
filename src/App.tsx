import React, { useEffect, useState } from "react";
import EpisodeCard from "./components/EpisodeCard";
import Episode from "./types/Episode";
import Show from "./types/Show";
import fetchEpisodesFromURL from "./utils/fetchEpisodes";
import fetchStaticShows from "./utils/fetchStaticShows";
import filterEpisodes from "./utils/filterEpisodes";
import generateEpisodeCode from "./utils/generateEpisodeCode";
import getEpisodes from "./utils/getEpisodes";
import getShows from "./utils/getShows";

function App(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");
  const [episodeList, setEpisodeList] = useState<Episode[]>([]);
  const [seasonList, setSeasonList] = useState<Show[]>();

  useEffect(() => {
    getShows(() => fetchStaticShows()).then((shows) => setSeasonList(shows));
    getEpisodes(() =>
      fetchEpisodesFromURL("https://api.tvmaze.com/shows/83/episodes")
    ).then((episodes) => setEpisodeList(episodes));
  }, []);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    console.log(searchTerm);
  }, [searchTerm]);

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setSearchTerm(e.target.value);
  const handleReset = () => setSearchTerm("");

  const filteredEpisodes = episodeList.filter((ep) =>
    filterEpisodes(ep, searchTerm)
  );
  return (
    <>
      <h1>TV Shows</h1>
      <input type="text" value={searchTerm} onChange={handleChange} />
      <select
        name="episode"
        id="episode-select"
        onChange={handleSelect}
        value={searchTerm}
      >
        <option value="">Select All</option>
        {episodeList.map((ep) => (
          <option key={ep.id} value={ep.name}>{`${generateEpisodeCode(ep)} - ${ep.name
            }`}</option>
        ))}
      </select>
      <button onClick={handleReset}>reset search</button>
      <p>Episodes found: {filteredEpisodes.length}</p>
      {filteredEpisodes.map((ep) => (
        <EpisodeCard key={ep.id} episode={ep} />
      ))}

      <footer>
        Data has been obtained from{" "}
        <a
          href="https://www.tvmaze.com/api#licensing"
          target="_blank"
          rel="noreferrer"
        >
          TV Maze
        </a>
      </footer>
    </>
  );
}

export default App;
