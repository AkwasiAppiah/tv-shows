import { IEpisode, searchFunctionProps } from "./Interfaces";

export function searchFunction({
  search,
  episodes,
}: searchFunctionProps): IEpisode[] {
  return episodes.filter(
    (episode) =>
      episode.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
      episode.summary.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );
}
