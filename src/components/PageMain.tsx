import AppState from "../types/AppState";
import Episode from "../types/Episode";
import EpisodeSelector from "./episodes/EpisodeSelector";
import ShowSelector from "./shows/ShowSelector";

interface Props {
  app: AppState;
  setApp: (app: AppState) => void;
  episodeDisplay: number[];
  setEpisodeDisplay: (ids: number[]) => void;
  episodeList: Episode[];
  setEpisodeList: (ep: Episode[]) => void;
  selectedEpisode: number | null;
  setSelectedEpisode: (id: number | null) => void;
}

const PageMain = ({
  app,
  setApp,
  episodeDisplay,
  setEpisodeDisplay,
  episodeList,
  setEpisodeList,
  selectedEpisode,
  setSelectedEpisode,
}: Props): JSX.Element => {
  return (
    <main>
      <ShowSelector app={app} setApp={setApp} className="Show" />

      {app.selectedShow === null || (
        <EpisodeSelector
          className="Episode"
          selectedItem={selectedEpisode}
          setSelectedItem={setSelectedEpisode}
          itemList={episodeList}
          setItemList={setEpisodeList}
          itemDisplay={episodeDisplay}
          setItemDisplay={setEpisodeDisplay}
          onCardClick={setSelectedEpisode}
        />
      )}
    </main>
  );
};

export default PageMain;
