export const stringNormalization = (term: string) => {
  return term.trim().toLowerCase();
};

type StringToken = {
  index: number;
  values: string[];
};

export const search =
  <T>(data: T[]) =>
  (searchTerm: string) => {
    const matchedResults: T[] = [];
    let stringTokens: StringToken[] = [];

    if (!searchTerm) return [];

    data.forEach((item, index) => {
      const tokens = [
        ...stringTokens,
        {
          index,
          values:
            typeof item === "object" ? Object.values(item as object) : [item],
        },
      ];
      stringTokens = tokens;
    });

    stringTokens.forEach((item) => {
      const term = stringNormalization(searchTerm);

      const matchString = item.values.some((i: string) =>
        stringNormalization(i).includes(term)
      );

      const matchTerm = item.values.includes(term);

      if (matchTerm || matchString) matchedResults.push(data[item.index]);
    });

    return matchedResults;
  };
