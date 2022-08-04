import Episode from "../types/Episode";
import Show from "../types/Show";

function filterEpisodes(
  { summary, name }: Episode | Show,
  searchTerm: string
): boolean {
  [summary, name, searchTerm] = [summary, name, searchTerm].map((e) =>
    e.toLowerCase()
  );

  return summary.includes(searchTerm) || name.includes(searchTerm);
}

export default filterEpisodes;
