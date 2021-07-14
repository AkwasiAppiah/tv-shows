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
      {ep.image.medium === null} ? {<img src = 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80' alt = ''/>}:{<img src={ep.image.medium} alt={ep.name} />}

      
      {/* <p>{ep.summary.replace(/<p>|<\/p>/g, "")}</p> */}
      <p>{ep.runtime} minutes</p>
    </section>
  );
};

export default SingleEpisode;
