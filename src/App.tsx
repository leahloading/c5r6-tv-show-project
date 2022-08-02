import React, { useEffect, useState } from "react";
import EpisodeCard from "./components/EpisodeCard";
import Episode from "./types/Episode";
import filterEpisodes from "./utils/filterEpisodes";
import getData from "./utils/getData";

function App(): JSX.Element {
  const episodeList: Episode[] = getData();

  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    console.log(searchTerm);
  }, [searchTerm]);

  const filteredEpisodes = episodeList.filter((ep) =>
    filterEpisodes(ep, searchTerm)
  );
  return (
    <>
      <h1>TV Shows</h1>
      <input type="text" value={searchTerm} onChange={handleChange} />
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
