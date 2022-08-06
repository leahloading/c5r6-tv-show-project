import AppState from "../../types/AppState";
import ShowDisplayList from "./ShowDisplayList";
import ShowFilterBar from "./ShowFilterBar";

interface ShowSelectorProps {
  app: AppState;
  setApp: (app: AppState) => void;
  className: string;
}

const ShowSelector = ({
  app,
  setApp,
  className,
}: ShowSelectorProps): JSX.Element => {
  return (
    <div className={`${className} Selector`}>
      <ShowFilterBar app={app} setApp={setApp} itemType={className} />
      <ShowDisplayList
        ids={app.showDisplay}
        itemList={app.showList}
        itemType={className}
        onCardClick={(id) => setApp({ ...app, selectedShow: id })}
      />
    </div>
  );
};

export default ShowSelector;
