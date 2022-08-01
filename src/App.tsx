import EpisodeCard from "./components/EpisodeCard";
import Episode from "./types/Episode";
import getData from "./utils/getData";
import { greet } from "./utils/greet";

function App(): JSX.Element {
  const episodeList: Episode[] = getData();

  return (
    <>
      <h1>{greet("TV Shows App")}</h1>
      {episodeList.map((ep) => (
        <EpisodeCard key={ep.id} episode={ep} />
      ))}
    </>
  );
}

export default App;
