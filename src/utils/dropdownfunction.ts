import { IEpisode, dropDownFilterProps } from "./Interfaces";

export function dropdownfunction({
    dropDownState,
    episodes,
    
  }: dropDownFilterProps): IEpisode[] {
    return episodes.filter(
      (episode) =>
        episode.id === parseInt(dropDownState)
    );

  }