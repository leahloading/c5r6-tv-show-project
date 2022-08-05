import Episode from "../types/Episode";
import Show from "../types/Show";

function filterItem({ id }: Episode | Show, targetIds: number[]): boolean {
  return targetIds.includes(id);
}

export default filterItem;
