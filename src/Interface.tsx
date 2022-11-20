export interface IProps {
  map(arg0: (card: IApiData) => JSX.Element): unknown;
  callback: (e: { target: { value: string } }) => void;
  dataArr: IApiData[];
}

export interface ICallback {
  callback: (obj: object) => void;
  changeDisabled: (num: number) => void;
  changeShowState: () => void;
  dis: boolean;
}

export interface IApiData {
  alternativeTitles?: string[];
  episodes?: number;
  hasEpisode?: boolean;
  genres?: [];
  hasRanking?: boolean;
  image?: string;
  link?: string;
  ranking?: number;
  thumb?: string;
  title?: string;
  __v?: number;
  _id?: string;
  status?: string;
  synopsis?: string;
  year?: string;
  type?: string;
}
