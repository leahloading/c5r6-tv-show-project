import { useEffect, useState } from "react";
import PageFooter from "./components/PageFooter";
import PageHeader from "./components/PageHeader";
import PageMain from "./components/PageMain";
import Show from "./types/Show";
import fetchEpisodesFromURL from "./utils/episodes/fetchEpisodes";
import fetchStaticShows from "./utils/shows/fetchStaticShows";
import getEpisodes from "./utils/episodes/getEpisodes";
import getShows from "./utils/shows/getShows";
import sortShowsAlphabetically from "./utils/shows/sortShowsAlphabetically";
import AppState from "./types/AppState";
import nullAppState from "./utils/nullAppState";

function App(): JSX.Element {
  const [app, setApp] = useState<AppState>(nullAppState);

  // intialise
  useEffect(() => {
    getShows(() => fetchStaticShows()).then((shows) => {
      const sortedShows = sortShowsAlphabetically(shows);
      setApp((app) => {
        const newAppState: AppState = {
          ...app,
          showList: sortedShows,
          showDisplay: sortedShows.map((show) => show.id),
        };
        return newAppState;
      });
    });
  }, []);

  // when show is selected

  useEffect(() => {
    if (app.selectedShow !== null) {
      const showToLoad: Show = app.showList.filter(
        (sh) => sh.id === app.selectedShow
      )[0];
      getEpisodes(() =>
        fetchEpisodesFromURL(`${showToLoad?._links.self.href}/episodes`)
      ).then((episodes) => {
        setApp((app) => {
          return {
            ...app,
            showDisplay: [showToLoad.id],
            selectedShow: app.selectedShow,
            episodeDisplay: episodes.map((ep) => ep.id),
            episodeList: episodes,
          };
        });
      });
    }
  }, [app.selectedShow, app.showList]);

  // when episode is selected
  useEffect(() => {
    setApp((app) => {
      if (app.selectedEpisode !== null) {
        return { ...app, episodeDisplay: [app.selectedEpisode] };
      } else {
        return { ...app };
      }
    });
  }, [app.selectedEpisode, app.episodeList]);

  return (
    <>
      <PageHeader />
      <PageMain
        episodeList={app.episodeList}
        setEpisodeList={(i) => setApp({ ...app, episodeList: i })}
        showList={app.showList}
        setShowList={(i) => setApp({ ...app, showList: i })}
        selectedShow={app.selectedShow}
        setSelectedShow={(i) => setApp({ ...app, selectedShow: i })}
        selectedEpisode={app.selectedEpisode}
        setSelectedEpisode={(i) => setApp({ ...app, selectedEpisode: i })}
        episodeDisplay={app.episodeDisplay}
        setEpisodeDisplay={(i) => setApp({ ...app, episodeDisplay: i })}
        showDisplay={app.showDisplay}
        setShowDisplay={(i) => setApp({ ...app, showDisplay: i })}
      />
      <PageFooter />
    </>
  );
}

export default App;
