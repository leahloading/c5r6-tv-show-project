import Episode from "../types/Episode";

function removeEpNameSpace({ name }: Episode): string {
  const regex = / /gi;
  return name.replaceAll(regex, "-").toLowerCase();
}

export default removeEpNameSpace;
