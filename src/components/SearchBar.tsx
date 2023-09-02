import { FormEvent } from "react";
import { styled } from "styled-components";

export const SearchBar = () => {
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log("Submitting...");
  };

  return (
    <Form onSubmit={onSubmit}>
      <Input type="search" placeholder="Type something" />
      <Button type="submit">Search</Button>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem;
  gap: 1.5rem;
`;

const Input = styled.input`
  flex: 1;
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
