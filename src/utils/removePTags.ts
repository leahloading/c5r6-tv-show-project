import Episode from "../types/Episode";

function removePTags({ summary }: Episode): string {
  const regex = /<.{1,2}>/gi;
  return summary!.replaceAll(regex, "");
}

export default removePTags;
