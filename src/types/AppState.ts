import Episode from "./Episode";
import Show from "./Show";

interface AppState {
  episodeDisplay: number[];
  showDisplay: number[];
  episodeList: Episode[];
  showList: Show[];
  selectedShow: number | null;
  selectedEpisode: number | null;
}
export default AppState;
