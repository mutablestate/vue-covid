const isRefSymbol = Symbol();
interface Ref<T = any> {
  [isRefSymbol]: true;
  value: T;
}

interface ICovidData {
  confirmed: Ref<number>;
  recovered: Ref<number>;
  deaths: Ref<number>;
  lastUpdate: string;
  error?: string;
}

interface ICountry {
  name: string;
  iso2: string;
  iso3: string;
}

interface ICountriesData {
  [countries: string]: Array<ICountry>;
}

interface IUseCovidApi {
  endpoint: string;
  params?: object;
  handleData?: (data: ICovidData | ICountry[]) => void;
}

export { Ref, ICovidData, ICountriesData, ICountry, IUseCovidApi };
