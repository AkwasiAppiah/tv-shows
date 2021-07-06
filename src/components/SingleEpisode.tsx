// import { Url } from 'url';

interface singleEpisodeProp {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  links: {
    self: {
      href: string;
    };
};
}

const SingleEpisode = ({ name }: singleEpisodeProp):JSX.Element =>  {
  return (
    <>
      <h1>{name}</h1>
      {/* <h2>{id}, {season},{number},{runtime}, {image},{summary}</h2> */}
    </>
  );
}

export default SingleEpisode;
