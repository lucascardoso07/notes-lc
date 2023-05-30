import styled from "styled-components";

export const StyledCardList = styled.li`
  list-style: none;
  width: 48%;

  background-color: var(--gray2);
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 6px;
  overflow: hidden;
  filter: drop-shadow(0px 7px 8px rgba(0, 0, 0, 0.25));

  h3 {
    color: var(--primary-color);
    font-size: 23px;
    margin: 0;
    text-transform: capitalize;
  }

  p {
    color: var(--gray3);
    word-wrap: break-word;
  }

  button {
    height: 28px;
    border-radius: 6px;
    background-color: var(--primary-color);
    border: 2px solid var(--primary-color);
    color: var(--gray1);
    font-weight: bold;
    cursor: pointer;
    transition: all 0.4s;
  }

  button:hover {
    background-color: var(--gray2);
    color: var(--primary-color);
  }

  @media (max-width: 1000px) {
    width: 100%;
  }
`;
