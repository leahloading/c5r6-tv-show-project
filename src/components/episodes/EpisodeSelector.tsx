import AppState from "../../types/AppState";
import DisplayList from "./EpisodeDisplayList";
import EpisodeFilterBar from "./EpisodeFilterBar";

interface EpisodeSelectorProps {
  app: AppState;
  setApp: (app: AppState) => void;
  className: string;
}

const EpisodeSelector = ({
  app,
  setApp,
  className,
}: EpisodeSelectorProps): JSX.Element => {
  return (
    <div className={`${className} Selector`}>
      <EpisodeFilterBar app={app} setApp={setApp} itemType={className} />
      <DisplayList
        ids={app.episodeDisplay}
        itemList={app.episodeList}
        itemType={className}
        onCardClick={(id) => setApp({ ...app, selectedEpisode: id })}
      />
    </div>
  );
};

export default EpisodeSelector;
