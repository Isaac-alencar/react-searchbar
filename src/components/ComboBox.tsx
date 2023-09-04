import { useState, useEffect, useCallback } from "react";
import { styled } from "styled-components";

type Data = {
  name: string;
  city: string;
  country: string;
  favoriteSport: string;
};

type ComboBoxProps<T> = {
  searchTerm: string;
  items: T[];
};

export const ComboBox = <T extends Data>({
  searchTerm,
  items,
}: ComboBoxProps<T>) => {
  const [filteredList, setFilteredList] = useState<typeof items>([]);

  const filterList = useCallback(() => {
    const nextList = items.filter((item) =>
      item.name.toLocaleLowerCase().includes(searchTerm)
    );

    setFilteredList(nextList);
  }, [items, searchTerm]);

  useEffect(() => {
    filterList();
  }, [filterList]);

  return (
    <ComboBoxContainer isVisible={!!searchTerm}>
      {filteredList.map((item) => {
        return <ComboBoxItem key={item.name}>{item.name}</ComboBoxItem>;
      })}
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

const ComboBoxItem = styled.span`
  width: 100%;
  padding: 0.2rem;
  line-height: 1.8;
  cursor: pointer;
  border-radius: 3px;
  transition: background-color 50ms ease-in;

  &:hover {
    background-color: var(--background);
  }
`;
