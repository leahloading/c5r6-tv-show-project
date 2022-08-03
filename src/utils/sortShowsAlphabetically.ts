import Show from "../types/Show";

function sortShowAlphabetically(showList: Show[]) {
    const sortedShows = showList.sort((showA, showB) => showA.name > showB.name ? 1 : -1);
    return sortedShows;
}

export default sortShowAlphabetically;