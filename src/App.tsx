import { useEffect, useState } from "react";
import PageFooter from "./components/PageFooter";
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
  const [episodeDisplay, setEpisodeDisplay] = useState<number[]>([]);
  const [showDisplay, setShowDisplay] = useState<number[]>([]);
  const [episodeList, setEpisodeList] = useState<Episode[]>([]);
  const [showList, setShowList] = useState<Show[]>([]);
  const [selectedShow, setSelectedShow] = useState<Show | Episode | null>(null);
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | Show | null>(
    null
  );

  useEffect(() => {
    getShows(() => fetchStaticShows()).then((shows) => {
      const sortedShows = sortShowsAlphabetically(shows);
      setShowList(sortedShows);
      setShowDisplay(sortedShows.map((show) => show.id));
    });
  }, []);

  useEffect(() => {
    getEpisodes(() =>
      fetchEpisodesFromURL(`${selectedShow?._links.self.href}/episodes`)
    ).then((episodes) => {
      setEpisodeDisplay(episodes.map((ep) => ep.id));
      setEpisodeList(episodes);
    });
  }, [selectedShow]);

  useEffect(() => {
    console.log(selectedShow);
    console.log(selectedEpisode);
    console.log(showDisplay);
  }, [selectedEpisode, selectedShow, showDisplay]);

  return (
    <>
      <PageHeader />
      <PageMain
        episodeList={episodeList}
        setEpisodeList={setEpisodeList}
        showList={showList}
        setShowList={setShowList}
        selectedShow={selectedShow}
        setSelectedShow={setSelectedShow}
        selectedEpisode={selectedEpisode}
        setSelectedEpisode={setSelectedEpisode}
        episodeDisplay={episodeDisplay}
        setEpisodeDisplay={setEpisodeDisplay}
        showDisplay={showDisplay}
        setShowDisplay={setShowDisplay}
      />
      <PageFooter />
    </>
  );
}

export default App;
