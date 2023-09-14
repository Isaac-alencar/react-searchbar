import { styled } from "styled-components";

type ComboBoxProps<T> = {
  searchTerm: string;
  items: T[];
};

import { Data } from "../providers/SearchContext";
import { useSearch } from "../hooks/useSearch";

export const ComboBox = <T extends Data>({ searchTerm }: ComboBoxProps<T>) => {
  const { results } = useSearch({ searchTerm });

  return (
    <ComboBoxContainer isVisible={!!searchTerm}>
      {results.length ? (
        results.map((item) => {
          return (
            <ComboBoxItem key={item.name}>
              <strong>{item.name}</strong>
              <div>
                <span>
                  {item.city}, {item.country}
                </span>
              </div>
            </ComboBoxItem>
          );
        })
      ) : (
        <span>
          <i>No matches found</i>
        </span>
      )}
    </ComboBoxContainer>
  );
};

const ComboBoxContainer = styled.div<{ isVisible: boolean }>`
  position: absolute;
  top: 50px;
  display: ${(props) => (props.isVisible ? "flex" : "none")};
  flex-direction: column;
  border-radius: 6px;
  padding: 0.5rem;
  width: 100%;
  background-color: var(--grey);
`;

const ComboBoxItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0.2rem;
  line-height: 1.8;
  cursor: pointer;
  border-radius: 3px;
  transition: background-color 50ms ease-in;

  span {
    color: #444a;
    font-size: 0.9rem;
  }

  &:hover {
    background-color: var(--background);
  }
`;
