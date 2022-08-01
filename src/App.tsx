import Episode from "./types/Episode";
import getData from "./utils/getData";
import { greet } from "./utils/greet";

function App(): JSX.Element {
  const episodeList: Episode[] = getData()

  return (
    <>
      <h1>{greet("TV Shows App")}</h1>;
      {episodeList.map((ep) => <p key={ep.id}>{JSON.stringify(ep)}</p>)}
    </>
  )
}

export default App;
