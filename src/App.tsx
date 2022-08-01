import EpisodeCard from "./components/EpisodeCard";
import Episode from "./types/Episode";
import getData from "./utils/getData";

function App(): JSX.Element {
  const episodeList: Episode[] = getData();

  return (
    <>
      <h1>TV Shows</h1>
      {episodeList.map((ep) => (
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
