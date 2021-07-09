import { numofEpisodesProp } from "../utils/Interfaces"

export const NumofEpisodes = ({eds,episodes}:numofEpisodesProp): JSX.Element => {

    return(
        <p>{eds.length},{episodes.length}</p>
    )

}

