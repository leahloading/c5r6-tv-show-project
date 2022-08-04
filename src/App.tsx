import React, { useEffect, useState } from "react";
import PageHeader from "./components/PageHeader";
import PageMain from "./components/PageMain";
import Episode from "./types/Episode";
import Show from "./types/Show";
import fetchEpisodesFromURL from "./utils/fetchEpisodes";
import fetchStaticShows from "./utils/fetchStaticShows";
import getEpisodes from "./utils/getEpisodes";
import getShows from "./utils/getShows";
import sortShowsAlphabetically from "./utils/sortShowsAlphabetically";

function App(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");
  const [episodeList, setEpisodeList] = useState<Episode[]>([]);
  const [showList, setShowList] = useState<Show[]>([]);
  const [selectedShow, setSelectedShow] = useState<Show>();

  useEffect(() => {
    getShows(() => fetchStaticShows()).then((shows) =>
      setShowList(sortShowsAlphabetically(shows))
    );
    getEpisodes(() =>
      fetchEpisodesFromURL(`${selectedShow?._links.self.href}/episodes`)
    ).then((episodes) => setEpisodeList(episodes));
  }, [selectedShow]);

  useEffect(() => {
    console.log(selectedShow);
    console.log(searchTerm);
  }, [searchTerm, selectedShow]);

  return (
    <>
      <PageHeader />
      <PageMain
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        episodeList={episodeList}
        setEpisodeList={setEpisodeList}
        showList={showList}
        setShowList={setShowList}
        selectedShow={selectedShow}
        setSelectedShow={setSelectedShow}
      />
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
