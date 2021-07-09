// import { Url } from 'url';

import {singleEpisodeProp} from "../utils/Interfaces";

const SingleEpisode = ({
 ep
}: singleEpisodeProp): JSX.Element => {
  return (
    <section>
      <h1>{ep.name}</h1>
      <p>
        {ep.season < 10 ? `S0${ep.season} ` : `S${ep.season} `}
        {ep.number < 10 ? `E0${ep.number}` : `E${ep.number}`} 
        , ID : {ep.id}
      </p>
      <img src={ep.image.medium} alt={ep.name} />
      <p>{ep.summary.replace(/<p>|<\/p>/g, "")}</p>
      <p>{ep.runtime} minutes</p>
    </section>
  );
};

export default SingleEpisode;
