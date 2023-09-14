import { createContext, useEffect, useMemo, useState } from "react";
import * as data from "../../data.json";
import { search } from "../lib/search";

export type Data = {
  name: string;
  city: string;
  country: string;
  favoriteSport: string;
};

type SearchContextProps = {
  initialDataSource: Data[];
  performSearch: (searchTerm: string) => Data[];
};

type SearchProviderProps = { children: React.ReactNode };

export const SearchContext = createContext({} as SearchContextProps);

export const SearchProvider = ({ children }: SearchProviderProps) => {
  const [initialDataSource, setInitialDataSource] = useState<Data[]>([]);

  useEffect(() => {
    setInitialDataSource(data.data);
  }, []);

  const value = useMemo(
    () => ({
      initialDataSource,
      performSearch: search(initialDataSource),
    }),
    [initialDataSource]
  );

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
