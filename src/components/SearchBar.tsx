import { ChangeEvent, FormEvent, useState } from "react";
import { styled } from "styled-components";
import { ComboBox } from "./ComboBox";

import * as data from "../../data.json";

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log("Submitting...");
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Form onSubmit={onSubmit}>
      <InputWrapper>
        <Input
          type="text"
          value={searchTerm}
          placeholder="Type something"
          onChange={handleInputChange}
        />
        <ComboBox searchTerm={searchTerm} items={data.data} />
      </InputWrapper>
      <Button type="submit">Search</Button>
    </Form>
  );
};

const InputWrapper = styled.div`
  width: 100%;
  flex: 1;
  position: relative;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem;
  gap: 1.5rem;
`;

const Input = styled.input`
  width: 100%;
  height: 44px;
  border: 1px solid var(--background);
  border-radius: 6px;
  padding-left: 1rem;

  &:focus {
    outline-color: var(--primary-color);
  }
`;

const Button = styled.button`
  border: none;
  border-radius: 6px;
  height: 44px;
  width: 100px;
  font-weight: bold;
  color: var(--white);
  background-color: var(--primary-color);
  cursor: pointer;
`;
