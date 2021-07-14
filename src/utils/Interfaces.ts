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

export interface shows {
  name: string;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  genres: string[];
  status: string;
  runtime: number | null;
  id: number;
  url: string;
  type: string;
  language: string;
  averageRuntime: number | null;
  premiered: string | null;
  officialSite: string | null;
  schedule: {
    time: string;
    days: string[];
  };
  rating: {
    average: number | null;
  };
  weight: number;
  network: {
    id: number;
    name: string;
    country: {
      name: string;
      code: string;
      timezone: string;
    } | null;
  } | null;
  webChannel: {
    id: number;
    name: string;
    country: {
      name: string;
      code: string;
      timezone: string;
    } | null;
  } | null;
  dvdCountry: string | null;
  externals: {
    tvrage: number;
    thetvdb: number | null;
    imdb: string | null;
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
  dropDownState: string;
  setdropDownState(dropdownState: string): void;
}

export interface numofEpisodesProp {
  eds: IEpisode[];
  episodes: IEpisode[];
}

export interface dropDownFilterProps {
  dropDownState: string;
  episodes: IEpisode[];
}

export interface showSelectorProps {
  showState: string;
  setShowState(showState: string): void;
  shows: shows[];
}

export 
