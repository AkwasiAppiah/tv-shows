export interface IEpisode {
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
  _links: {
    self: {
      href: string;
    };
  };
}

export interface episodeProp {
  episode: IEpisode;
}

export interface searchProps {
  search: string;
  setSearch(search: string): void;
}

export interface searchFunctionProps {
  search: string;
  episodes: IEpisode[];
}

export interface singleEpisodeProp {
  ep: IEpisode;
}

export interface dropdownProps {
  eds: IEpisode[];
}
