import { useContext, useState, useEffect } from "react";
import { Data, SearchContext } from "../providers/SearchContext";

type UseSearchParams = {
  searchTerm: string;
};

export const useSearch = ({ searchTerm }: UseSearchParams) => {
  const [results, setResults] = useState<Data[] | []>([]);

  const value = useContext(SearchContext);
  const { performSearch } = value;

  useEffect(() => {
    const results = performSearch(searchTerm);

    setResults(results);
  }, [searchTerm, performSearch]);

  return {
    results,
  };
};
