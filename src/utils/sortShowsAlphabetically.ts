import Show from "../types/Show";

function sortShowsAlphabetically(showList: Show[]): Show[] {
  const sortedShows = showList.sort((showA, showB) =>
    showA.name > showB.name ? 1 : -1
  );
  return sortedShows;
}

export default sortShowsAlphabetically;
