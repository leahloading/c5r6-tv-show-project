import Episode from "../types/Episode";

function filterEpisodes(
  { summary, name }: Episode,
  searchTerm: string
): boolean {
  [summary, name, searchTerm] = [summary, name, searchTerm].map((e) =>
    e.toLowerCase()
  );

  return summary.includes(searchTerm) || name.includes(searchTerm);
}

export default filterEpisodes;
