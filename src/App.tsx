import { useEffect, useState } from "react";
import PageFooter from "./components/PageFooter";
import PageHeader from "./components/PageHeader";
import PageMain from "./components/PageMain";
import Episode from "./types/Episode";
import Show from "./types/Show";
import fetchEpisodesFromURL from "./utils/episodes/fetchEpisodes";
import fetchStaticShows from "./utils/shows/fetchStaticShows";
import getEpisodes from "./utils/episodes/getEpisodes";
import getShows from "./utils/shows/getShows";
import sortShowsAlphabetically from "./utils/shows/sortShowsAlphabetically";

function App(): JSX.Element {
  const [episodeDisplay, setEpisodeDisplay] = useState<number[]>([]);
  const [showDisplay, setShowDisplay] = useState<number[]>([]);
  const [episodeList, setEpisodeList] = useState<Episode[]>([]);
  const [showList, setShowList] = useState<Show[]>([]);
  const [selectedShow, setSelectedShow] = useState<number | null>(null);
  const [selectedEpisode, setSelectedEpisode] = useState<number | null>(null);

  // intialise
  useEffect(() => {
    getShows(() => fetchStaticShows()).then((shows) => {
      const sortedShows = sortShowsAlphabetically(shows);
      setShowList(sortedShows);
      setShowDisplay(sortedShows.map((show) => show.id));
    });
  }, []);

  // when show is selected
  useEffect(() => {
    const showToLoad: Show = showList.filter((sh) => sh.id === selectedShow)[0];
    getEpisodes(() =>
      fetchEpisodesFromURL(`${showToLoad?._links.self.href}/episodes`)
    ).then((episodes) => {
      selectedShow && setShowDisplay([selectedShow]);
      setEpisodeDisplay(episodes.map((ep) => ep.id));
      setEpisodeList(episodes);
    });
  }, [selectedShow, showList]);

  // when episode is selected
  useEffect(() => {
    if (selectedEpisode !== null) {
      setEpisodeDisplay([selectedEpisode]);
      console.log("selectedEpisode from App", selectedEpisode);
    }
  }, [selectedEpisode, episodeList]);

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
