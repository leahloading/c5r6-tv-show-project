import AppState from "../types/AppState";
import EpisodeSelector from "./episodes/EpisodeSelector";
import ShowSelector from "./shows/ShowSelector";

interface Props {
  app: AppState;
  setApp: (app: AppState) => void;
}

const PageMain = ({ app, setApp }: Props): JSX.Element => {
  return (
    <main>
      <ShowSelector app={app} setApp={setApp} className="Show" />

      {app.selectedShow === null || (
        <EpisodeSelector app={app} setApp={setApp} className="Episode" />
      )}
    </main>
  );
};

export default PageMain;
