import React, { useEffect, useState } from "react";
import EpisodeCard from "./components/EpisodeCard";
import Episode from "./types/Episode";
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

  function filterEpisodes(
    { summary, name }: Episode,
    searchTerm: string
  ): boolean {
    [summary, name, searchTerm] = [summary, name, searchTerm].map((e) =>
      e.toLowerCase()
    );

    return summary.includes(searchTerm) || name.includes(searchTerm);
  }

  return (
    <>
      <h1>TV Shows</h1>
      <input type="text" value={searchTerm} onChange={handleChange} />
      {episodeList
        .filter((ep) => filterEpisodes(ep, searchTerm))
        .map((ep) => (
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
