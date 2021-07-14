// import { Url } from 'url';

import { singleEpisodeProp } from "../utils/Interfaces";

const SingleEpisode = ({ ep }: singleEpisodeProp): JSX.Element => {
  return (
    <section>
      <h1>{ep.name}</h1>
      <p>
        {ep.season < 10 ? `S0${ep.season} ` : `S${ep.season} `}
        {ep.number < 10 ? `E0${ep.number}` : `E${ep.number}`}, ID : {ep.id}
      </p>
      <img
        src={
          ep.image.medium === null
            ? ep.image.original
            : "data:image/jpeg;base64,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"
        }
        alt={ep.name}
      />

      {/* <p>{ep.summary.replace(/<p>|<\/p>/g, "")}</p> */}
      <p>{ep.runtime} minutes</p>
    </section>
  );
};

export default SingleEpisode;
